import React from "react";
import styled from "styled-components";
import { fontSizes } from "utils/fontStyles";
import { colors } from "utils/colors";
import { PropTypes } from "prop-types";

const MathEqLine = styled.p`
	color: ${(props) => props.color || colors.DARK_GREY};
	text-align: ${(props) => props.textAlign};
	max-width: ${(props) => props.maxWidth};
	font-size: ${(props) => props.fontSize || fontSizes.LARGE};
	font-weight: ${(props) => props.fontWeight || 400};
	margin: ${(props) => props.margin};
	margin-bottom: ${(props) => props.marginBottom || 0};
	margin-right: ${(props) => props.marginRight || 0};
	padding: ${(props) => props.padding || 0};
	margin-top: ${(props) => props.marginTop || 0};
`;

const MathLine = ({
	children,
	fontSize,
	fontWeight,
	marginBottom,
	marginTop,
	maxWidth,
	textAlign,
	marginRight,
	margin,
	padding,
	color,
}) => {
	return (
		<MathEqLine
			marginBottom={marginBottom}
			marginTop={marginTop}
			marginRight={marginRight}
			maxWidth={maxWidth}
			textAlign={textAlign}
			fontSize={fontSize}
			fontWeight={fontWeight}
			padding={padding}
			color={color}
			margin={margin}
		>
			{children}
		</MathEqLine>
        
	);
};

MathLine.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.number,
	marginBottom: PropTypes.string,
	maxWidth: PropTypes.string,
	marginRight: PropTypes.string,
	textAlign: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
};

export default MathLine;
