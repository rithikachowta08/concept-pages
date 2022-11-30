import { useState } from "react";
import { Icon, Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Title, Paragraph } from "components/text";
import ImageWithYesNo, { ANSWER_TYPES } from "components/media/ImageWithYesNo";
import Modal from "components/layout/Modal";
import bg from "assets/white_bg.webp";
import info from "assets/info.svg";
import boat from "assets/boat.svg";
import tent_with_triangle from "assets/tent_with_triangle.svg";
import boat_correct_answer from "assets/boat_correct_answer.svg";
import boat_wrong_answer from "assets/boat_wrong_answer.svg";

const Slide3 = () => {
  const modalContent = (
    <Flex direction="column">
      <Paragraph
        color="white"
        marginBottom="50px"
        fontSize="1.5rem">
        {"If the object has a triangular surface present within itself, then choose 'Yes'"}
      </Paragraph>
      <Title
        fontSize="1.8rem"
        marginBottom="20px"
        color="white"
        fontWeight={700}
        small>
        Example
      </Title>
      <ImageWithYesNo
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
    <SlideWrap
      bg={bg}
      alignItems="center">
      <Modal
        isOpen={isModalOpen}
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Title
        opacity={0.5}
        small>
        Identify the triangles
      </Title>
      <Flex
        marginBottom="40px"
        alignItems="center">
        <Paragraph marginRight="10px">Does this object have a triangle in it?</Paragraph>
        <Icon
          src={info}
          onClick={onClick}></Icon>
      </Flex>
      <ImageWithYesNo
        defaultSrc={boat}
        correctAnswer={ANSWER_TYPES.YES}
        correctAnswerMsg="Great job!"
        wrongAnswerMsg="This object has a triangle"
        correctAnswerSrc={boat_correct_answer}
        wrongAnswerSrc={boat_wrong_answer}></ImageWithYesNo>
    </SlideWrap>
  );
};

export default Slide3;
