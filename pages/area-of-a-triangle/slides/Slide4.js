import React, { useEffect, useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import { colors } from "utils/colors";

const t_formula = "assets/area-of-triangle/slide_3_normal.svg";
const t_base = "assets/area-of-triangle/slide_3_b.svg";
const t_height = "assets/area-of-triangle/slide_3_p.svg";

import Pill from "components/Pill";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

// General Formula Slide
const Slide4 = ({ downIcon, navBar }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TextAndDiagramSlide
			bg="DARK"
			title={"General Formula"}
			secondaryTitle={"Area of a triangle"}
			downIcon={downIcon}
			navBar={navBar}
			diagram={
				<LeftWrap>
					<TransitionImage
						images={[t_formula, t_base, t_height]}
						activeIndex={activeIndex}
					/>
				</LeftWrap>
			}
		>
			<Paragraph
				color={colors.WHITE}
				marginBottom="50px"
				fontSize={fontSizes.MEDIUM}
			>
				The area &apos;A&apos; of a triangle is one-half of the product of its
				base &apos;b&apos; and height &apos;h&apos;.
			</Paragraph>
			<Pill
				width="fit-content"
				fontSize="1.8rem"
				bgColor={colors.GREEN}
				color={colors.WHITE}
			>
				Area of the triangle ={" "}
				<MathElement htmlString={"\\frac{1}{2} \\times\\ "} />{" "}
				<TextSpan
					fontSize="1.8rem"
					fontWeight={500}
					color={colors.WHITE}
					onHover={() => setActiveIndex(1)}
					onHoverOut={() => setActiveIndex(0)}
					bgColor={colors.RED}
					hoverBgColor={colors.AQUA}
				>
					Base
				</TextSpan>{" "}
				<MathElement htmlString={"\\times\\ "} />{" "}
				<TextSpan
					fontSize="1.8rem"
					color={colors.WHITE}
					onHover={() => setActiveIndex(2)}
					onHoverOut={() => setActiveIndex(0)}
					bgColor={colors.RED}
					hoverBgColor={colors.AQUA}
				>
					Perpendicular height
				</TextSpan>
			</Pill>
		</TextAndDiagramSlide>
	);
};

export default Slide4;
