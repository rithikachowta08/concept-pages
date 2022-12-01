import styled from "styled-components/macro";
import { TextSpan } from "components/text";
import { Flex, Icon } from "components/StyledElements";
import PropTypes from "prop-types";
import { DEVICE_TYPES } from "hooks/useDeviceType";
import down_caret from "assets/down_caret.svg";
import up_caret from "assets/up_caret.svg";
import left_caret from "assets/left_caret.svg";
import down_caret_dark from "assets/down_caret_dark.svg";
import up_caret_dark from "assets/up_caret.svg";
import { useState } from "react";
import { colors } from "utils/colors";

const NavWrap = styled.div`
  padding: 70px 30px;
  border: ${(props) => (props.darkTheme ? "none" : `1px solid ${colors.PURPLE}`)};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: absolute;
  top: ${(props) => (props.isMobile ? "0" : "50vh")};
  left: ${(props) => (props.isMobile ? "0" : "2vh")};
  width: ${(props) => (props.isMobile ? "100%" : "auto")};
  transform: ${(props) => (props.isMobile ? "none" : "translateY(-50%)")};
  background: rgba(231, 228, 248, 0.4);
  backdrop-filter: ${(props) => (props.isExpanded ? "blur(15px)" : "blur(38px)")};
  z-index: 1;
`;

const MobileNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  border-radius: ${(props) => (props.isExpanded ? "0px 0px 15px 15px" : "0px")};
`;

const SectionBar = styled.div`
  height: 0px;
  flex: ${(props) => props.flex};
  border: 2px solid
    ${(props) => (props.darkTheme ? `rgba(255, 255, 255, 0.2)` : `rgba(74, 51, 245, 0.2)`)};
`;

const BarFill = styled.div`
  height: 0px;
  width: ${(props) => props.percentage}%;
  border: ${(props) =>
    props.percentage ? `2px solid ${props.darkTheme ? colors.WHITE : colors.PURPLE}` : "none"};
  transform: translate(-2px, -2px);
  transition: all 0.3s;
`;

const SectionIndicator = styled.div`
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  width: ${(props) => (props.isMobile ? "6px" : "14px")};
  height: ${(props) => (props.isMobile ? "6px" : "14px")};
  border: ${(props) => (props.isMobile ? "2px" : "4px")} solid
    ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
  background: ${(props) =>
    props.isComplete ? (props.darkTheme ? `${colors.WHITE}` : `${colors.PURPLE}`) : `none`};
  box-shadow: ${(props) =>
    props.isComplete
      ? props.darkTheme
        ? `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(255, 255, 255, 0.3)`
        : `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(74, 51, 245, 0.3)`
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

const NavigationBar = ({ darkTheme, deviceType, moveTo, sections, currentPageIdx }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showNav = () => {
    setIsExpanded(true);
  };
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };
  const hideNav = () => {
    setIsExpanded(false);
  };
  const onSectionClick = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    moveTo(e.currentTarget.getAttribute("data-section-idx"));
  };
  let content;
  if (deviceType === DEVICE_TYPES.MOBILE) {
    const currentSection =
      sections.find((section) => section.slides.includes(currentPageIdx)) || sections[0];
    let icon = darkTheme ? down_caret : down_caret_dark;
    if (isExpanded) {
      icon = darkTheme ? up_caret : up_caret_dark;
    }
    content = (
      <MobileNavWrap
        isExpanded={isExpanded}
        darkTheme={darkTheme}>
        <Flex
          padding={isExpanded ? "20px" : "10px 20px 0px 20px"}
          color={darkTheme ? colors.WHITE : colors.BLACK}
          justifyContent="space-between">
          {isExpanded ? (
            <Flex
              gap="10px"
              direction="column">
              {sections.map((section, idx) => (
                <Flex
                  // moveTo expects slide indices to start from 1
                  data-section-idx={section.slides[0] + 1}
                  onClick={onSectionClick}
                  cursor="pointer"
                  gap="10px"
                  alignItems="center"
                  key={idx}>
                  <SectionIndicator
                    isMobile
                    darkTheme={darkTheme}
                    isComplete={currentPageIdx >= section.slides[0]}
                  />
                  <div>{section.title}</div>
                </Flex>
              ))}
            </Flex>
          ) : (
            currentSection.title
          )}
          <Icon
            alignSelf={isExpanded ? "flex-start" : "center"}
            src={icon}
            onClick={toggleNav}
          />
        </Flex>
        {isExpanded ? null : (
          <Flex justifyContent="space-between">
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
                <SectionBar
                  darkTheme={darkTheme}
                  flex={95 / sections.length / 100}
                  key={idx}>
                  <BarFill
                    darkTheme={darkTheme}
                    percentage={percentage}
                  />
                </SectionBar>
              );
            })}
          </Flex>
        )}
      </MobileNavWrap>
    );
  } else {
    content = (
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
            <div key={idx}>
              <Flex
                key={section.title}
                alignItems="center"
                cursor="pointer"
                // moveTo expects slide indices to start from 1
                data-section-idx={section.slides[0] + 1}
                onClick={onSectionClick}>
                <SectionIndicator
                  darkTheme={darkTheme}
                  isComplete={currentPageIdx >= section.slides[0]}></SectionIndicator>
                {isExpanded ? (
                  <TextSpan
                    cursor="pointer"
                    color={darkTheme ? colors.WHITE : colors.BLACK}
                    marginLeft="20px">
                    {section.title}
                  </TextSpan>
                ) : null}
              </Flex>
              {idx !== sections.length - 1 ? (
                <Connector darkTheme={darkTheme}>
                  <Fill
                    darkTheme={darkTheme}
                    percentage={percentage}
                  />
                </Connector>
              ) : null}
            </div>
          );
        })}
      </NavWrap>
    );
  }
  return (
    <Wrapper
      isExpanded={isExpanded}
      isMobile={deviceType === DEVICE_TYPES.MOBILE}>
      {content}
    </Wrapper>
  );
};

NavigationBar.propTypes = {
  darkTheme: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  moveTo: PropTypes.func,
  currentPageIdx: PropTypes.number,
  deviceType: PropTypes.string
};

export default NavigationBar;
