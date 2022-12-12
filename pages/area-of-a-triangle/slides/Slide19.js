import React, { useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, TextSpanBg, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const area_triangle_snt = "assets/area-of-triangle/area_triangle_s&t.svg";
const area_triangle_snt_2 = "assets/area-of-triangle/area_triangle_sna_2.svg";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

// Two sides and included angle
const Slide19 = ({ downIcon, navBar }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TextAndDiagramSlide
			title={"Two sides and the included angle"}
			secondaryTitle={"Area of a triangle"}
			bg={"DARK"}
			diagram={
				<LeftWrap>
					<TransitionImage
						images={[area_triangle_snt, area_triangle_snt_2]}
						activeIndex={activeIndex}
					/>
				</LeftWrap>
			}
			downIcon={downIcon}
			navBar={navBar}
		>
			<Paragraph
				color={colors.WHITE}
				marginBottom="50px"
				fontSize={fontSizes.MEDIUM}
			>
				Given any{" "}
				<TextSpanBg
					color={colors.RED}
					bgColor={colors.RED}
					hoverColor={colors.DARK_BLUE}
					fontSize={fontSizes.MEDIUM}
					onHover={() => setActiveIndex(1)}
					onHoverOut={() => setActiveIndex(0)}
				>
					{" "}
					two sides of the triangle and the included angle between them,
				</TextSpanBg>{" "}
				its area can be calculated as:
			</Paragraph>
			<Pill
				width="fit-content"
				fontSize="1.8rem"
				bgColor={colors.GREEN}
				color={colors.WHITE}
			>
				Area =
				<MathElement
					htmlString={
						"\\frac{1}{2} bc \\ Sin A = \\frac{1}{2} ca\\ Sin B = \\frac{1}{2} ab\\ Sin C"
					}
				/>
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide19;
