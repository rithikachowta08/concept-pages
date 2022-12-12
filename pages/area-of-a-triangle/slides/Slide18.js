import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/equi_ex_1.svg";
const image_2 = "assets/area-of-triangle/equi_ex_2.svg";

// Example of equilateral triangle
const Slide18 = ({ downIcon, navBar }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<TextAndDiagramSlide
			title={"Find the area of a triangle with the given dimensions."}
			secondaryTitle={"Illustrative Example"}
			bg={"LIGHT"}
			diagram={
				<TransitionImage
					images={[image_1, image_2]}
					activeIndex={activeIndex}
				/>
			}
			downIcon={downIcon}
			navBar={navBar}
		>
			<Paragraph
				color={colors.BLACK}
				marginBottom="30px"
				fontSize={fontSizes.MEDIUM}
			>
				<TextSpan
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
					a
				</TextSpan>{" "}
				= 4 in
			</Paragraph>
			<Flex>
				<Paragraph fontSize={fontSizes.MEDIUM}>Area of the triangle </Paragraph>
				<Flex direction="column">
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times a^2"} />
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times 4^2"} />
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"\\ = \\frac{16 \\ \\sqrt{3}}{4}"} />
					</Paragraph>
					<Paragraph fontSize={fontSizes.MEDIUM}>
						<MathElement htmlString={"\\ = 4 \\sqrt{3}\\ in^2"} />
					</Paragraph>
				</Flex>
			</Flex>
		</TextAndDiagramSlide>
	);
};

export default Slide18;
