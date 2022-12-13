import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import { Flex, SlideWrap } from "components/StyledElements";
import MultipleDiagramSlide from "components/slides/MultipleDiagramSlide";
import { Paragraph, TextSpan, TextSpanBg, Title } from "components/text";
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
const Slide5 = ({ downIcon, navBar }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<MultipleDiagramSlide
			bg="LIGHT"
			title="General formula"
			downIcon={downIcon}
			navBar={navBar}
			images={[
				{
					diagram: (
						<TransitionImage
							images={[
								area_triangle_angles_1_1,
								area_triangle_angles_1_2,
								area_triangle_angles_1_3,
							]}
							activeIndex={activeIndex}
						/>
					),
					caption: "Acute Triangle",
				},
				{
					diagram: (
						<TransitionImage
							images={[
								area_triangle_angles_2_1,
								area_triangle_angles_2_2,
								area_triangle_angles_2_3,
							]}
							activeIndex={activeIndex}
						/>
					),
					caption: "Right Triangle",
				},
				{
					diagram: (
						<TransitionImage
							images={[
								area_triangle_angles_3_1,
								area_triangle_angles_3_2,
								area_triangle_angles_3_3,
							]}
							activeIndex={activeIndex}
						/>
					),
					caption: "Obtuse Triangle",
				},
			]}
		>
			<Paragraph fontSize={fontSizes.MEDIUM}>
				Let’s observe the base and height of different types of triangles.
			</Paragraph>
			<Paragraph
				color={colors.BLACK}
				fontSize={fontSizes.MEDIUM}
				textAlign="center"
			>
				Area = <MathElement htmlString={"\\frac{1}{2}\\ \\times\\ "} />
				<TextSpanBg
					color={colors.RED}
					hoverColor={colors.DARK_BLUE}
					onHover={() => setActiveIndex(1)}
					onHoverOut={() => setActiveIndex(0)}
				>
					Base (b)
				</TextSpanBg>
				<MathElement htmlString={"\\ \\times\\ "} />
				<TextSpanBg
					color={colors.RED}
					hoverColor={colors.DARK_BLUE}
					onHover={() => setActiveIndex(2)}
					onHoverOut={() => setActiveIndex(0)}
				>
					Height (h)
				</TextSpanBg>
			</Paragraph>
		</MultipleDiagramSlide>
	);
};

export default Slide5;
