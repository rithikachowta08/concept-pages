import styled from "styled-components/macro";
import PropTypes from "prop-types";
import MobileNavBar from "./MobileNavBar";
import { DEVICE_TYPES } from "hooks/useDeviceType";
import { useState } from "react";
import DefaultNavBar from "./DefaultNavBar";

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
    content = (
      <MobileNavBar
        toggleNav={toggleNav}
        sections={sections}
        isExpanded={isExpanded}
        darkTheme={darkTheme}
        onSectionClick={onSectionClick}
        currentPageIdx={currentPageIdx}
      />
    );
  } else {
    content = (
      <DefaultNavBar
        showNav={showNav}
        hideNav={hideNav}
        sections={sections}
        isExpanded={isExpanded}
        darkTheme={darkTheme}
        onSectionClick={onSectionClick}
        currentPageIdx={currentPageIdx}
      />
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
