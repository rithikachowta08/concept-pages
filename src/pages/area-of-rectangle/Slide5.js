import { SlideWrap, Flex, Icon, LeftWrap } from "components/StyledElements";
import styled from "styled-components/macro";
import { toast } from "react-toastify";
import bg from "assets/white_bg.png";
import error from "assets/error.svg";
import success from "assets/success.svg";
import { Paragraph, Title } from "components/text";
import { useEffect } from "react";
import { colors } from "utils/colors";

const IFrame = styled.iframe`
  width: 750px;
  height: 700px;
  @media (max-height: 600px) {
    width: 500px;
    height: 550px;
  }
  @media (max-height: 700px) {
    width: 550px;
    height: 600px;
  }
  @media (max-height: 900px) {
    width: 600px;
    height: 650px;
  }
`;

const Slide5 = () => {
  const triggerToast = (isRightAngled) => {
    if (isRightAngled) {
      toast.success("That is correct! ABC is a right angled triangle", {
        icon: (
          <Icon
            src={success}
            width="20px"></Icon>
        )
      });
    } else {
      toast.error("A right angled triangle has one angle equal to 90°", {
        icon: (
          <Icon
            src={error}
            width="20px"></Icon>
        )
      });
    }
  };

  useEffect(() => {
    window.triggerToast = triggerToast;
    return () => {
      window.triggerToast = undefined;
    };
  }, []);

  return (
    <SlideWrap
      bg={bg}
      padding="100px">
      <Flex
        alignItems="center"
        justifyContent="space-around">
        <LeftWrap width="30%">
          <Title
            color={colors.BLACK}
            fontSize="1.5rem"
            marginBottom="20px">
            Area using Unit Squares
          </Title>
          <Paragraph fontSize="1.5rem">
            Move the sliders to create a rectangle occupying an area of 54 unit squares.
          </Paragraph>
        </LeftWrap>
        <IFrame
          src="./triangle.html"
          allowFullScreen
          frameBorder="0"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide5;
