import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, SlideWrap } from "components/StyledElements";
import { Paragraph } from "components/text";
import React from "react";

// Definition applet
const Slide3 = ({ downIcon, navBar }) => {
	return (
		<TextAndDiagramSlide
			downIcon={downIcon}
			navBar={navBar}
			bg={"LIGHT"}
			// alignItems="center"
			padding="40px"
		>
			<Paragraph marginBottom="70px" textAlign={"center"} fontSize="1.6rem">
				Select the color that covers the entire area of the triangular park.
			</Paragraph>
			<Flex justifyContent={"center"}>
				<QuestionAnswerImage
					width="400px"
					options={["Green", "Brown"]}
					correctAnswer={"Green"}
					correctAnswerMsg="Great Job!"
					wrongAnswerMsg="Wrong Answer!"
				/>
			</Flex>
		</TextAndDiagramSlide>
	);
};

export default Slide3;
