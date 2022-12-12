import React, { useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

const image_1 = "assets/area-of-triangle/slide_11.svg";
const image_2 = "assets/area-of-triangle/slide_11_2.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

// Equilateral triangle
const Slide16 = ({ downIcon, navBar }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TextAndDiagramSlide
			title={"Equilateral triangle"}
			secondaryTitle={"Area of different types of triangle"}
			bg={"LIGHT"}
			diagram={
				<LeftWrap>
					<TransitionImage
						images={[image_1, image_2]}
						activeIndex={activeIndex}
					/>
				</LeftWrap>
			}
			downIcon={downIcon}
			navBar={navBar}
		>
			<Paragraph
				color={colors.BLACK}
				marginBottom="50px"
				fontSize={fontSizes.MEDIUM}
			>
				Given the length &apos;a&apos; of a side of an{" "}
				<TextSpan
					fontSize={fontSizes.MEDIUM}
					fontWeight={"500"}
					color={colors.WHITE}
					bgColor={colors.RED}
					hoverBgColor={colors.DARK_BLUE}
					onHover={() => {
						setActiveIndex(1);
					}}
					onHoverOut={() => {
						setActiveIndex(0);
					}}
				>
					equilateral triangle
				</TextSpan>
				, its area can be calculated as:
			</Paragraph>
			<Pill
				width="fit-content"
				fontSize="1.8rem"
				bgColor={colors.GREEN}
				color={colors.WHITE}
			>
				Area of an equilateral triangle ={" "}
				<MathElement htmlString={"\\frac{\\sqrt{3}}{4} \\times a^2"} />
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide16;
