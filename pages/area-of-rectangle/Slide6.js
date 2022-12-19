import { useState } from "react";
import dynamic from "next/dynamic";

const ActivitySlide = dynamic(() => import("components/slides/ActivitySlide"));
const QuestionAnswerImage = dynamic(() =>
   import("components/media/QuestionAnswerImage")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
import { Icon } from "components/StyledElements";
const info = "assets/info.svg";
const boat = "assets/boat.svg";
const tent_with_triangle = "assets/tent_with_triangle.svg";
const boat_correct_answer = "assets/boat_correct_answer.svg";
const boat_wrong_answer = "assets/boat_wrong_answer.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";

const Slide6 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
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
