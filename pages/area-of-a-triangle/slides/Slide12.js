import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { LeftWrap, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import React from "react";

const image_1 = "assets/area-of-triangle/ex_1.svg";
import { colors } from "utils/colors";

// Area of triangle exercise
const Slide12 = () => {
	return (
		<TextAndAppletSlide
			secondaryTitle={"Find the area of a triangle with the given dimensions."}
			bg={"LIGHT"}
		>
			<LeftWrap>
				<StyledImg src={image_1} bottomOffset="65px" />
			</LeftWrap>
		</TextAndAppletSlide>
	);
};

export default Slide12;
