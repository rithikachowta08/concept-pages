import { useState } from "react";
import { Icon, Flex, SlideWrap } from "components/StyledElements";
import { Title, Paragraph } from "components/text";
import ImageWithYesNo, { ANSWER_TYPES } from "components/media/ImageWithYesNo";
import Modal from "components/layout/Modal";
import bg from "assets/white_bg.png";
import info from "assets/info.svg";
import boat from "assets/boat.svg";
import boat_correct_answer from "assets/boat_with_triangle.svg";
import boat_wrong_answer from "assets/boat_with_triangle.svg";

const Slide3 = () => {
  return (
    <SlideWrap
      bg={bg}
      alignItems="center">
      <Title
        opacity={0.5}
        small>
        Identify the triangles
      </Title>
      <Flex
        marginBottom="40px"
        alignItems="center">
        <Paragraph marginRight="10px">Does this object have a triangle in it?</Paragraph>
        <Icon src={info}></Icon>
      </Flex>
      <ImageWithYesNo
        defaultSrc={boat}
        correctAnswerMsg="Great job!"
        wrongAnswerMsg="This object has a triangle"
        correctAnswerSrc={boat_correct_answer}
        wrongAnswerSrc={boat_wrong_answer}></ImageWithYesNo>
    </SlideWrap>
  );
};

export default Slide3;
