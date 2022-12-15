import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../StyledElements";
import Button from "../Button";
import Pill from "../Pill";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";
const success = "assets/success.svg";
const error = "assets/error.svg";

const ImgContainer = styled.div`
   position: relative;
   background-color: white;
   border: 1px solid ${(props) => props.color};
   width: ${(props) => props.width};
   border-radius: 24px;
   padding: 40px 60px;
   @media (max-height: 600px) {
      height: 100px;
   }
   @media (max-height: 700px) {
      height: 150px;
   }
   @media (max-height: 900px) {
      height: 280px;
   }
`;

const StyledImg = styled.img`
   @media (max-height: 600px) {
      height: 100px;
   }
   @media (max-height: 700px) {
      height: 150px;
   }
   @media (max-height: 900px) {
      height: 200px;
   }
`;

// export const ANSWER_TYPES = {
//   YES: "YES",
//   NO: "NO"
// };

const QuestionAnswerImage = ({
   defaultSrc,
   width,
   options,
   isCorrectAnswer: defaultIsCorrectAnswer = null,
   correctAnswer,
   wrongAnswerSrc,
   correctAnswerMsg,
   wrongAnswerMsg,
   correctAnswerSrc,
}) => {
   const [isCorrectAnswer, setIsCorrectAnswer] = useState(
      defaultIsCorrectAnswer
   );

   // const onClickNo = () => {
   //   setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.NO);
   // };
   // const onClickYes = () => {
   //   setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.YES);
   // };

   const onClickOption = (optionClicked) => {
      setIsCorrectAnswer(correctAnswer === optionClicked);
   };

   let imageSrc = defaultSrc;
   let color = colors.DARK_BLUE;
   let bottomActions = (
      <>
         {options?.map((itm, idx) => (
            <Button
               onClick={() => onClickOption(itm)}
               bgColor="white"
               key={idx}
               color={colors.DARK_BLUE}
               borderColor={colors.DARK_BLUE}
            >
               {itm}
            </Button>
         ))}
         {/* <Button
        onClick={onClickOption}
        color="white"
        bgColor={colors.DARK_BLUE}>
        Yes
      </Button> */}
      </>
   );
   if (isCorrectAnswer !== null) {
      if (isCorrectAnswer) {
         imageSrc = correctAnswerSrc;
         color = colors.OCEAN_GREEN;
         bottomActions = (
            <Pill bgColor={colors.OCEAN_GREEN} icon={success}>
               {correctAnswerMsg}
            </Pill>
         );
      } else {
         color = colors.LIGHT_RED;
         imageSrc = wrongAnswerSrc;
         bottomActions = (
            <Pill bgColor={colors.LIGHT_RED} icon={error}>
               {wrongAnswerMsg}
            </Pill>
         );
      }
   }
   return (
      <ImgContainer color={color} width={width}>
         <StyledImg src={imageSrc} />
         <Flex
            justifyContent={
               isCorrectAnswer !== null ? "center" : "space-between"
            }
            position="absolute"
            left="50%"
            bottom="0"
            transform="translate(-50%,50%)"
            width={isCorrectAnswer !== null ? "70%" : "60%"}
         >
            {bottomActions}
         </Flex>
      </ImgContainer>
   );
};

QuestionAnswerImage.propTypes = {
   defaultSrc: PropTypes.string,
   options: PropTypes.array,
   correctAnswer: PropTypes.string,
   isCorrectAnswer: PropTypes.bool,
   correctAnswerSrc: PropTypes.string,
   correctAnswerMsg: PropTypes.string,
   wrongAnswerMsg: PropTypes.string,
   wrongAnswerSrc: PropTypes.string,
   width: PropTypes.string,
};

export default QuestionAnswerImage;
