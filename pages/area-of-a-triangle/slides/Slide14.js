import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg";

// Derivation of isosceles triangle
const Slide14 = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<TextAndDiagramSlide
			title={"Derivation"}
			secondaryTitle={"Area of an Isosceles triangle"}
			paddingLeft={"160px"}
			bg={"LIGHT"}
			diagram={
				<LeftWrap>
					<TransitionImage
						images={[image_1, image_2]}
						activeIndex={activeIndex}
						bottomOffset="65px"
					/>
				</LeftWrap>
			}
		>
			<Paragraph
				color={colors.BLACK}
				marginBottom="20px"
				fontSize={fontSizes.MEDIUM}
			>
				<Paragraph marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
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
					.
				</Paragraph>
				<br />
				<Flex direction="column" height="fit-content" padding="0 0 0 2rem">
					<TextSpan marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"a^2 = h^2 + (\\frac{b}{2})^2"} />
					</TextSpan>
					<TextSpan marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"h^2 = a^2 - (\\frac{b^2}{4})"} />
					</TextSpan>
					<TextSpan marginBottom={"10px"}>
						<MathElement htmlString={"h = \\sqrt{a^2 - (\\frac{b}{2})^2}"} />
					</TextSpan>
				</Flex>
			</Paragraph>
			<Flex>
				<Paragraph margin={"0"}>
					<Paragraph fontSize={fontSizes.MEDIUM} marginBottom="35px">
						Area of triangle{" "}
					</Paragraph>
					<Paragraph textAlign={"right"} fontSize={fontSizes.MEDIUM}>
						A
					</Paragraph>
				</Paragraph>
				<Paragraph margin={"0"}>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement
							htmlString={"\\ = \\frac{1}{2} \\times Base \\times Height"}
						/>
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM} marginBottom="10px">
						<MathElement
							htmlString={
								"\\ = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
							}
						/>
					</Paragraph>
				</Paragraph>
			</Flex>
			{/* <Paragraph fontSize={fontSizes.MEDIUM}>
				Area of triangle ={" "}
				<MathElement htmlString={"\\frac{1}{2} \\times Base \\times Height"} />
			</Paragraph>
			<Paragraph fontSize={fontSizes.MEDIUM} marginBottom="10px">
				<MathElement
					htmlString={
						"A = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
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
				<MathElement htmlString={"\\frac{1}{4}b \\sqrt{4a^2 - b^2}"} />
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide14;
