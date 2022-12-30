import { useState } from "react";
import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import dynamic from "next/dynamic";
const Icon = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Icon)
);
const SlideWrap = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Modal = dynamic(() => import("components/layout/Modal"));

const bg = "assets/white_bg.png";
const info = "assets/info.svg";
const boat = "assets/triangles/boat.svg";
const tent_with_triangle = "assets/triangles/tent_with_triangle.svg";
const boat_correct_answer = "assets/triangles/boat_correct_answer.svg";
const boat_wrong_answer = "assets/triangles/boat_wrong_answer.svg";

const Slide3 = () => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="50px" fontSize="1.5rem">
            {
               "If the object has a triangular surface present within itself, then choose 'Yes'"
            }
         </Paragraph>
         <Title
            fontSize="1.8rem"
            marginBottom="20px"
            color="white"
            fontWeight={700}
            small
         >
            Example
         </Title>
         <QuestionAnswerImage
            width="fit-content"
            correctAnswerSrc={tent_with_triangle}
            correctAnswerMsg="Yes"
            isCorrectAnswer
         />
      </Flex>
   );
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const ANSWER_TYPES = {
      YES: "YES",
      NO: "NO",
   };
   return (
      <SlideWrap bg="LIGHT" alignItems="center">
         <Modal
            isOpen={isModalOpen}
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Title opacity={0.5} small>
            Identify the triangles
         </Title>
         <Flex marginBottom="40px" alignItems="center">
            <Paragraph marginRight="10px">
               Does this object have a triangle in it?
            </Paragraph>
            <Icon src={info} onClick={onClick}></Icon>
         </Flex>
         <QuestionAnswerImage
            options={Object.values(ANSWER_TYPES)}
            defaultSrc={boat}
            correctAnswer={ANSWER_TYPES.YES}
            correctAnswerMsg="Great job!"
            wrongAnswerMsg="This object has a triangle"
            correctAnswerSrc={boat_correct_answer}
            wrongAnswerSrc={boat_wrong_answer}
         ></QuestionAnswerImage>
      </SlideWrap>
   );
};

export default Slide3;
