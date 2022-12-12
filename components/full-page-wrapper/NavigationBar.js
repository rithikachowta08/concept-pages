import styled from "styled-components";
import PropTypes from "prop-types";
import MobileNavBar from "./MobileNavBar";
import { DEVICE_TYPES } from "hooks/useDeviceType";
import { useState } from "react";
import DefaultNavBar from "./DefaultNavBar";

const Wrapper = styled.div`
	width: ${(props) => (props.isMobile ? "100%" : "60px")};
	z-index: 6;
	position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
	top: ${(props) => (props.isMobile ? "0" : "50%")};
	left: 0;
	transform: ${(props) =>
		props.isAbsolute && !props.isMobile ? "translateY(-50%)" : "none"};
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 200px) and (max-width: 768px) {
		height: 45px;
	}

	@media (min-width: 768px) and (max-width: 992px) {
		scale: 0.8;
		transform: ${(props) =>
			props.isAbsolute && !props.isMobile ? "translateY(-80%)" : "none"};
	}

	@media (min-height: 500px) and (max-height: 800px) and (min-width: 769px) {
		scale: 0.8;
		transform: ${(props) =>
			props.isAbsolute && !props.isMobile ? "translateY(-80%)" : "none"};
	}
`;

const NavigationBar = ({
	darkTheme,
	deviceType,
	moveTo,
	sections,
	isAbsolute,
	currentPageIdx,
}) => {
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
			isAbsolute={isAbsolute}
			isMobile={deviceType === DEVICE_TYPES.MOBILE}
		>
			{content}
		</Wrapper>
	);
};

NavigationBar.propTypes = {
	darkTheme: PropTypes.bool,
	sections: PropTypes.array.isRequired,
	moveTo: PropTypes.func,
	currentPageIdx: PropTypes.number,
	deviceType: PropTypes.string,
};

export default NavigationBar;
