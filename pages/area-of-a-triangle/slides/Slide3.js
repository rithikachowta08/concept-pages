import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import { SlideWrap } from "components/StyledElements";
import { Paragraph } from "components/text";
import React from "react";

// Definition applet
const Slide3 = () => {
	return (
		<SlideWrap bg={"LIGHT"} alignItems="center" padding="40px">
			<Paragraph marginBottom="70px" textAlign={"center"} fontSize="1.6rem">
				Select the color that covers the entire area of the triangular park.
			</Paragraph>
			<QuestionAnswerImage
				width="400px"
				options={["Green", "Brown"]}
				correctAnswer={"Green"}
				correctAnswerMsg="Great Job!"
				wrongAnswerMsg="Wrong Answer!"
			/>
		</SlideWrap>
	);
};

export default Slide3;
