import { useState } from "react";
import styled from "styled-components/macro";
import { Flex } from "components/StyledElements";
import Button from "components/Button";
import Pill from "components/Pill";
import success from "assets/success.svg";
import error from "assets/error.svg";
import { PropTypes } from "prop-types";

const ImgContainer = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid ${(props) => props.color};
  border-radius: 24px;
  padding: 40px 60px;
`;

export const ANSWER_TYPES = {
  YES: "YES",
  NO: "NO"
};

const ImageWithYesNo = ({
  defaultSrc,
  wrongAnswerSrc,
  correctAnswerMsg,
  wrongAnswerMsg,
  correctAnswerSrc
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const onClickNo = () => {
    setIsCorrectAnswer(false);
  };
  const onClickYes = () => {
    setIsCorrectAnswer(true);
  };
  let imageSrc = defaultSrc;
  let color = "#4A33F5";
  let bottomActions = (
    <>
      <Button
        onClick={onClickNo}
        bgColor="white"
        color={"#4A33F5"}
        borderColor={"#4A33F5"}>
        No
      </Button>
      <Button
        onClick={onClickYes}
        color="white"
        bgColor={"#4A33F5"}>
        Yes
      </Button>
    </>
  );
  if (isCorrectAnswer !== null) {
    if (isCorrectAnswer) {
      imageSrc = correctAnswerSrc;
      color = "#4DCB88";
      bottomActions = (
        <Pill
          bgColor="#4DCB88"
          color="white"
          icon={success}>
          {correctAnswerMsg}
        </Pill>
      );
    } else {
      color = "#EA6560";
      bottomActions = (
        <Pill
          bgColor="#EA6560"
          color="white"
          icon={error}>
          {wrongAnswerMsg}
        </Pill>
      );
    }
  }
  return (
    <ImgContainer color={color}>
      <img src={isCorrectAnswer ? correctAnswerSrc : defaultSrc} />
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
  defaultSrc: PropTypes.string.isRequired,
  isCorrectAnswer: PropTypes.bool,
  correctAnswerSrc: PropTypes.string.isRequired,
  correctAnswerMsg: PropTypes.string.isRequired,
  wrongAnswerMsg: PropTypes.string.isRequired,
  wrongAnswerSrc: PropTypes.string.isRequired
};

export default ImageWithYesNo;
