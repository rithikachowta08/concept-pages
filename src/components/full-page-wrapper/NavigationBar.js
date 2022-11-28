import styled from "styled-components/macro";
import { TextSpan } from "components/text";
import { Flex, Icon } from "components/StyledElements";
import PropTypes from "prop-types";
import left_caret from "assets/left_caret.svg";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";

const NavWrap = styled.div`
  position: absolute;
  top: 50vh;
  left: 2vh;
  padding: 70px 30px;
  background: rgba(231, 228, 248, 0.4);
  border: ${(props) => (props.darkTheme ? "none" : `1px solid ${colors.PURPLE}`)};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%);
  backdrop-filter: ${(props) => (props.isExpanded ? "blur(15px)" : "blur(38px)")};
`;

const SectionIndicator = styled.div`
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  width: 14px;
  height: 14px;
  border: 4px solid ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
  background: ${(props) =>
    props.isComplete ? (props.darkTheme ? `${colors.WHITE}` : `${colors.PURPLE}`) : `none`};
  box-shadow: ${(props) =>
    props.isComplete
      ? props.darkTheme
        ? `0px 0px 0px 6px rgba(255, 255, 255, 0.3)`
        : `0px 0px 0px 6px rgba(74, 51, 245, 0.3)`
      : `none`};
  transition: all 0.3s;
`;

const Connector = styled.div`
  width: 4px;
  height: 50px;
  background: ${(props) =>
    props.darkTheme
      ? `rgba(255, 255, 255, ${props.isComplete ? 1 : 0.3})`
      : `rgba(74, 51, 245, ${props.isComplete ? 1 : 0.3})`};
  transition: all 0.3s;
  transform: translateX(9px);
`;

const Fill = styled.div`
  width: 4px;
  height: ${(props) => props.percentage}%;
  background: ${(props) => (props.darkTheme ? `${colors.WHITE}` : `${colors.PURPLE}`)};
  transition: all 0.3s;
`;

const NavigationBar = ({ darkTheme, moveTo, sections, currentPageIdx }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showNav = () => {
    setIsExpanded(true);
  };
  const hideNav = () => {
    setIsExpanded(false);
  };
  const onSectionClick = (e) => {
    e.stopPropagation();
    moveTo(e.currentTarget.getAttribute("data-section-idx"));
  };
  useEffect(() => {
    console.log("currentPageIdx", currentPageIdx);
  }, [currentPageIdx]);
  console.log("sections", sections);

  return (
    <NavWrap
      isExpanded={isExpanded}
      onMouseEnter={showNav}
      onMouseLeave={hideNav}
      darkTheme={darkTheme}>
      {isExpanded ? (
        <Flex
          cursor="pointer"
          onClick={hideNav}
          alignItems="center"
          marginBottom="40px">
          <Icon src={left_caret}></Icon>
          <TextSpan
            cursor="pointer"
            marginLeft="20px"
            color={darkTheme ? colors.WHITE : colors.PURPLE}
            fontSize="1rem">
            Back to concepts
          </TextSpan>
        </Flex>
      ) : null}
      {sections.map((section, idx) => {
        let percentage = 0;
        const slides = section.slides;
        if (currentPageIdx >= slides[slides.length - 1]) {
          percentage = 100;
        } else if (slides.includes(currentPageIdx)) {
          const slideIdx = slides.indexOf(currentPageIdx);
          percentage = ((slideIdx + 1) / slides.length) * 100;
        }
        return (
          <>
            <Flex
              alignItems="center"
              cursor="pointer"
              // moveTo expects slide indices to start from 1
              data-section-idx={section.slides[0] + 1}
              onClick={onSectionClick}>
              <SectionIndicator
                darkTheme={darkTheme}
                isComplete={currentPageIdx >= section.slides[0]}></SectionIndicator>
              {isExpanded && (
                <TextSpan
                  cursor="pointer"
                  color={darkTheme ? colors.WHITE : colors.BLACK}
                  marginLeft="20px">
                  {section.title}
                </TextSpan>
              )}
            </Flex>
            {idx !== sections.length - 1 && (
              <Connector darkTheme={darkTheme}>
                <Fill
                  darkTheme={darkTheme}
                  percentage={percentage}
                />
              </Connector>
            )}
          </>
        );
      })}
    </NavWrap>
  );
};

NavigationBar.propTypes = {
  darkTheme: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  moveTo: PropTypes.func.isRequired,
  currentPageIdx: PropTypes.number
};

export default NavigationBar;
