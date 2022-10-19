import { useState } from "react";
import styled from "styled-components/macro";
import { Flex } from "components/StyledElements";
import Button from "components/Button";
import Pill from "components/Pill";
import success from "assets/success.svg";
import error from "assets/error.svg";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";

const ImgContainer = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 24px;
  padding: 40px 60px;
`;

export const ANSWER_TYPES = {
  YES: "YES",
  NO: "NO"
};

const ImageWithYesNo = ({
  defaultSrc,
  width,
  isCorrectAnswer: defaultIsCorrectAnswer = null,
  correctAnswer,
  wrongAnswerSrc,
  correctAnswerMsg,
  wrongAnswerMsg,
  correctAnswerSrc
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(defaultIsCorrectAnswer);
  const onClickNo = () => {
    setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.NO);
  };
  const onClickYes = () => {
    setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.YES);
  };
  let imageSrc = defaultSrc;
  let color = colors.DARK_BLUE;
  let bottomActions = (
    <>
      <Button
        onClick={onClickNo}
        bgColor="white"
        color={colors.DARK_BLUE}
        borderColor={colors.DARK_BLUE}>
        No
      </Button>
      <Button
        onClick={onClickYes}
        color="white"
        bgColor={colors.DARK_BLUE}>
        Yes
      </Button>
    </>
  );
  if (isCorrectAnswer !== null) {
    if (isCorrectAnswer) {
      imageSrc = correctAnswerSrc;
      color = colors.GREEN;
      bottomActions = (
        <Pill
          bgColor={colors.GREEN}
          color="white"
          icon={success}>
          {correctAnswerMsg}
        </Pill>
      );
    } else {
      color = colors.RED;
      imageSrc = wrongAnswerSrc;
      bottomActions = (
        <Pill
          bgColor={colors.RED}
          color="white"
          icon={error}>
          {wrongAnswerMsg}
        </Pill>
      );
    }
  }
  return (
    <ImgContainer
      color={color}
      width={width}>
      <img src={imageSrc} />
      <Flex
        justifyContent={isCorrectAnswer !== null ? "center" : "space-between"}
        position="absolute"
        left="50%"
        bottom="0"
        transform="translate(-50%,50%)"
        width={isCorrectAnswer !== null ? "70%" : "60%"}>
        {bottomActions}
      </Flex>
    </ImgContainer>
  );
};

ImageWithYesNo.propTypes = {
  defaultSrc: PropTypes.string,
  correctAnswer: PropTypes.string,
  isCorrectAnswer: PropTypes.bool,
  correctAnswerSrc: PropTypes.string,
  correctAnswerMsg: PropTypes.string,
  wrongAnswerMsg: PropTypes.string,
  wrongAnswerSrc: PropTypes.string,
  width: PropTypes.string
};

export default ImageWithYesNo;
