import React, { useState } from "react";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";
import MultipleDiagramSlide from "components/slides/MultipleDiagramSlide";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

// Types of triangle
const Slide10 = ({ downIcon, navBar }) => {
	return (
		<MultipleDiagramSlide
			bg={"DARK"}
			title="Area of different types of triangles"
			images={[
				{
					diagram: <StyledImg src={image_1} />,
					caption: "Equilateral Triangle",
				},
				{
					diagram: <StyledImg src={image_2} />,
					caption: "Isosceles Triangle",
				},
				{
					diagram: <StyledImg src={image_3} />,
					caption: "Scalene Triangle",
				},
			]}
			downIcon={downIcon}
			navBar={navBar}
		></MultipleDiagramSlide>
	);
};

export default Slide10;
