import { useState } from "react";
import { Icon, Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Title, Paragraph } from "components/text";
import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import Modal from "components/layout/Modal";
import ActivitySlide from "components/slides/ActivitySlide";
const info = "assets/info.svg";
const boat = "assets/boat.svg";
const tent_with_triangle = "assets/tent_with_triangle.svg";
const boat_correct_answer = "assets/boat_correct_answer.svg";
const boat_wrong_answer = "assets/boat_wrong_answer.svg";

const Slide6 = ({ downIcon, navBar }) => {
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
   return (
      <ActivitySlide
         bg="LIGHT"
         title="Identify the triangles"
         activity={
            <QuestionAnswerImage
               defaultSrc={boat}
               options={["Fig. A", "Fig. B"]}
               correctAnswer={"Fig. A"}
               correctAnswerMsg="Great job!"
               wrongAnswerMsg="This object has a triangle"
               correctAnswerSrc={boat_correct_answer}
               wrongAnswerSrc={boat_wrong_answer}
            ></QuestionAnswerImage>
         }
         content={
            <Paragraph marginRight="10px">
               Does this object have a triangle in it?
               <Icon src={info} onClick={onClick}></Icon>
            </Paragraph>
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Modal
            isOpen={isModalOpen}
            content={modalContent}
            onDismiss={onDismiss}
         />
      </ActivitySlide>
   );
};

export default Slide6;
