import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import { Flex, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const area_triangle_angles_1_1 = "assets/area-of-triangle/16.a.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/16.b.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/16.c.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/17.a.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/17.b.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/17.c.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/18.a.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/18.b.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/18.c.svg";

// General Formula base and height slide
const Slide5 = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<SlideWrap bg="LIGHT" alignItems="center" padding="0">
			<Title color={colors.BLACK} fontSize={fontSizes.H2} marginBottom={"20px"}>
				General Formula
			</Title>
			<Paragraph fontSize={fontSizes.MEDIUM}>
				Let’s observe the base and height of different types of triangles.
			</Paragraph>
			<Paragraph color={colors.BLACK} fontSize={fontSizes.MEDIUM}>
				Area = <MathElement htmlString={"\\frac{1}{2}\\ \\times\\ "} />
				<TextSpan
					color={colors.WHITE}
					bgColor={colors.RED}
					hoverBgColor={colors.DARK_BLUE}
					onHover={() => setActiveIndex(1)}
					onHoverOut={() => setActiveIndex(0)}
				>
					Base (b)
				</TextSpan>
				<MathElement htmlString={"\\ \\times\\ "} />
				<TextSpan
					color={colors.WHITE}
					bgColor={colors.RED}
					hoverBgColor={colors.DARK_BLUE}
					onHover={() => setActiveIndex(2)}
					onHoverOut={() => setActiveIndex(0)}
				>
					Height (h)
				</TextSpan>
			</Paragraph>
			<Flex justifyContent="space-between" alignItems="center" width="70%">
				<Flex justifyContent="space-between" direction="column">
					<TransitionImage
						images={[
							area_triangle_angles_1_1,
							area_triangle_angles_1_2,
							area_triangle_angles_1_3,
						]}
						activeIndex={activeIndex}
					/>
					<Paragraph
						color={colors.BLACK}
						fontSize="1.4rem"
						fontWeight={400}
						textAlign="center"
					>
						Acute Angled Triangle
					</Paragraph>
				</Flex>
				<Flex justifyContent="space-between" direction="column">
					<TransitionImage
						images={[
							area_triangle_angles_2_1,
							area_triangle_angles_2_2,
							area_triangle_angles_2_3,
						]}
						activeIndex={activeIndex}
					/>
					<Paragraph
						color={colors.BLACK}
						fontWeight={400}
						textAlign="center"
						fontSize="1.4rem"
					>
						Right Angled Triangle
					</Paragraph>
				</Flex>
				<Flex justifyContent="space-between" direction="column">
					<TransitionImage
						images={[
							area_triangle_angles_3_1,
							area_triangle_angles_3_2,
							area_triangle_angles_3_3,
						]}
						activeIndex={activeIndex}
					/>
					<Paragraph
						color={colors.BLACK}
						fontWeight={400}
						textAlign="center"
						fontSize="1.4rem"
					>
						Obtuse Angled Triangle
					</Paragraph>
				</Flex>
			</Flex>
		</SlideWrap>
	);
};

export default Slide5;
