import React, { useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

const image_1 = "assets/area-of-triangle/slide_12.svg";
const image_2 = "assets/area-of-triangle/slide_12_2.svg";
const image_3 = "assets/area-of-triangle/slide_12_3.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

// Isosceles triangle
const Slide13 = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TextAndDiagramSlide
			title={"Isosceles triangle"}
			secondaryTitle="Area of Different types of Triangle"
			paddingLeft={"160px"}
			bg={"LIGHT"}
			diagram={
				<LeftWrap>
					<TransitionImage
						images={[image_1, image_2, image_3]}
						activeIndex={activeIndex}
						bottomOffset="65px"
					/>
				</LeftWrap>
			}
		>
			<Paragraph
				color={colors.BLACK}
				marginBottom="50px"
				fontSize={fontSizes.MEDIUM}
			>
				Given the length of the{" "}
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
					base &apos;b&apos;
				</TextSpan>{" "}
				and the{" "}
				<TextSpan
					fontSize={fontSizes.MEDIUM}
					fontWeight={"500"}
					color={colors.WHITE}
					bgColor={colors.RED}
					hoverBgColor={colors.DARK_BLUE}
					onHover={() => {
						setActiveIndex(2);
					}}
					onHoverOut={() => {
						setActiveIndex(0);
					}}
				>
					equal sides &apos;a&apos;
				</TextSpan>{" "}
				, its area can be calculated as:
			</Paragraph>
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

export default Slide13;
