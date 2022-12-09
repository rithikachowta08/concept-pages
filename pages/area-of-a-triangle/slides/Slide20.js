import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap } from "components/StyledElements";
import { Paragraph, TextSpan } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<TextAndDiagramSlide
			title={"Derivation"}
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
				Apply the "Sine" formula in the{" "}
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
				<br />
			</Paragraph>
			<Paragraph fontSize={fontSizes.MEDIUM} margin="0 0 0 40px">
				<TextSpan marginBottom={"10px"}>
					<MathElement htmlString={"Sin\\ A = \\frac{h}{b}"} />
				</TextSpan>
				<br />
				<TextSpan>
					<MathElement htmlString={"h = b.Sin \\ A"} />
				</TextSpan>
			</Paragraph>
			<Flex>
				<Flex direction="column">
					<Paragraph fontSize={fontSizes.MEDIUM}>
						Area of triangle (<MathElement htmlString={"\\Delta"} />
						ABC)
					</Paragraph>
				</Flex>
				<Flex direction="column">
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement
							htmlString={"\\ = \\frac{1}{2} \\times Base \\times Height"}
						/>
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"\\ = \\frac{1}{2}\\times c\\times h)"} />
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement
							htmlString={"\\ = \\frac{1}{2}\\times c\\times b\\ Sin A)"}
						/>
					</Paragraph>
				</Flex>
			</Flex>
			{/* <Paragraph fontSize={fontSizes.MEDIUM}>
				Area of triangle (<MathElement htmlString={"\\Delta"} />
				ABC) ={" "}
				<MathElement htmlString={"\\frac{1}{2} \\times Base \\times Height"} />
			</Paragraph>
			<Paragraph marginBottom={"20px"} fontSize={fontSizes.MEDIUM}>
				<MathElement htmlString={"A = \\frac{1}{2}\\times c\\times h)"} />
			</Paragraph>
			<Paragraph marginBottom={"20px"} fontSize={fontSizes.MEDIUM}>
				<MathElement
					htmlString={"A = \\frac{1}{2}\\times c\\times b\\ Sin A)"}
				/>
			</Paragraph> */}
			<Pill
				width="fit-content"
				fontSize="1.8rem"
				bgColor={colors.GREEN}
				color={colors.WHITE}
			>
				Area =
				<MathElement htmlString={"\\frac{1}{2}\\ bc\\ Sin\\ A"} />
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide20;
