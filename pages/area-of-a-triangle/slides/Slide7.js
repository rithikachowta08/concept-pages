import React from "react";

import { Paragraph, TextSpan } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import MathElement from "components/MathElement";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { fontSizes } from "utils/fontStyles";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import HyperLink from "components/text/HyperLink";

const applet = "applets/triangle.html";

// General formula derivation
const Slide7 = ({ downIcon, navBar }) => {
	const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
	return (
		<TextAndAppletSlide
			title={"Derivation"}
			secondaryTitle={"Area of a triangle"}
			bg={"LIGHT"}
			paddingLeft="200px"
			appletSrc={applet}
			downIcon={downIcon}
			navBar={navBar}
		>
			<Paragraph
				color={colors.BLACK}
				marginBottom={isMobile ? "20px" : "40px"}
				fontSize={fontSizes.MEDIUM}
			>
				Two identical triangles combine to form a parallelogram.
			</Paragraph>
			<Paragraph color={colors.BLACK} marginBottom="10px" fontSize={"1.4rem"}>
				<HyperLink
					color={colors.PURPLE}
					href={"https://byjus.com/us/math/area-of-parallelogram/"}
				>
					Area of a parallelogram
				</HyperLink>{" "}
				= Base (b) × Height (h)
			</Paragraph>
			<Paragraph
				color={colors.BLACK}
				marginBottom={isMobile ? "30px" : "50px"}
				fontSize={"1.4rem"}
			>
				Area of a triangle = <MathElement htmlString={"\\frac{1}{2}"} /> × Area
				of the parallelogram
			</Paragraph>
			<Pill width="fit-content" bgColor={colors.GREEN}>
				<TextSpan fontSize="1.8rem" color={colors.WHITE} fontWeight="600">
					Area of the triangle ={" "}
					<MathElement htmlString={"\\frac{1}{2}\\times"} />{" "}
				</TextSpan>
				<TextSpan fontSize="1.8rem" color={colors.WHITE} fontWeight="600">
					Base (b){" "}
				</TextSpan>
				<TextSpan fontSize="1.8rem" color={colors.WHITE} fontWeight="600">
					<MathElement htmlString={"\\times\\ "} />
					Height (h)
				</TextSpan>
			</Pill>
		</TextAndAppletSlide>
	);
};

export default Slide7;
