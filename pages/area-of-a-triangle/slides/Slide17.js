import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/equi_deri_1.svg";
const image_2 = "assets/area-of-triangle/equi_deri_2.svg";

// Derivation of equilateral triangle
const Slide17 = ({ downIcon, navBar }) => {
	const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<TextAndDiagramSlide
			title={"Derivation"}
			secondaryTitle={"Area of an Equilateral triangle"}
			bg={"LIGHT"}
			diagram={
				<TransitionImage
					images={[image_1, image_2]}
					activeIndex={activeIndex}
				/>
			}
			downIcon={downIcon}
			navBar={navBar}
			mobileLayoutGap="0px"
		>
			<Paragraph color={colors.BLACK} marginBottom={isMobile ? "15px" : "50px"}>
				<Paragraph fontSize={fontSizes.MEDIUM} marginBottom="10px">
					Apply the Pythagoras Theorem in the{" "}
					<TextSpan
						bgColor={colors.RED}
						color={colors.WHITE}
						hoverBgColor={colors.DARK_BLUE}
						onHover={() => {
							setActiveIndex(1);
						}}
						onHoverOut={() => {
							setActiveIndex(0);
						}}
					>
						triangle
					</TextSpan>
					.<br />
				</Paragraph>
				<Paragraph
					fontSize={fontSizes.MEDIUM}
					margin={isMobile ? "5px 0" : "10px 0"}
				>
					<MathElement htmlString={"a^2 = h^2 + (\\frac{a}{2})^2"} />
				</Paragraph>
				<Paragraph
					fontSize={fontSizes.MEDIUM}
					margin={isMobile ? "5px 0" : "10px 0"}
				>
					<MathElement htmlString={"h^2 = a^2 - (\\frac{a^2}{4})"} />
				</Paragraph>
				<Paragraph
					fontSize={fontSizes.MEDIUM}
					margin={isMobile ? "5px 0" : "10px 0"}
				>
					<MathElement htmlString={"h = \\frac{1}{2} (\\sqrt{3} a)"} />
				</Paragraph>
			</Paragraph>
			<Flex marginBottom={isMobile ? "10px" : "40px"}>
				<Flex direction="column">
					<TextSpan
						fontSize={fontSizes.MEDIUM}
						margin={isMobile ? "5px 0" : "10px 0"}
						textAlign={"right"}
					>
						Area of triangle =
					</TextSpan>
					<TextSpan
						fontSize={fontSizes.MEDIUM}
						margin={isMobile ? "5px 0" : "10px 0"}
						textAlign={"right"}
					>
						A =
					</TextSpan>
				</Flex>
				<Flex direction="column">
					<TextSpan margin={isMobile ? "5px 0" : "10px 0"}>
						<MathElement
							htmlString={"\\ \\frac{1}{2} \\times Base \\times Height"}
						/>
					</TextSpan>
					<TextSpan margin={isMobile ? "5px 0" : "10px 0"}>
						{" "}
						<MathElement
							htmlString={
								"\\ \\frac{1}{2} \\times a \\times \\frac{1}{2} (\\sqrt{3} a)"
							}
						/>
					</TextSpan>
				</Flex>
			</Flex>
			{/* <Paragraph fontSize={fontSizes.MEDIUM}>
				Area of triangle =
				<TextSpan>
					<MathElement
						htmlString={"\\frac{1}{2} \\times Base \\times Height"}
					/>
				</TextSpan>
			</Paragraph>
			<Paragraph marginBottom={"20px"} fontSize={fontSizes.MEDIUM}>
				A ={" "}
				<MathElement
					htmlString={
						"\\frac{1}{2} \\times a \\times \\frac{1}{2} (\\sqrt{3} a)"
					}
				/>
			</Paragraph> */}
			<Pill
				width="fit-content"
				fontSize="1.8rem"
				bgColor={colors.GREEN}
				color={colors.WHITE}
			>
				Area of an isosceles triangle =
				<MathElement htmlString={"\\frac{\\sqrt{3}}{4} \\times a^2"} />
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide17;
