import { SlideWrap, Flex, Icon } from "components/StyledElements";
import { toast } from "react-toastify";
import bg from "assets/white_bg.png";
import error from "assets/error.svg";
import success from "assets/success.svg";
import { Paragraph } from "components/text";
import { useEffect } from "react";

const Slide8 = () => {
  const triggerToast = (angleValue) => {
    if (angleValue === 90) {
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
        <Paragraph maxWidth="30%">Move the vertices to form a right angled triangle</Paragraph>
        <iframe
          src="./Triangle.html"
          width="750"
          height="700"
          allowFullScreen
          frameBorder="0"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide8;
