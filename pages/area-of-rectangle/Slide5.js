import { Icon } from "components/StyledElements";
import { toast } from "react-toastify";
import error from "assets/error.svg";
import success from "assets/success.svg";
import { useEffect } from "react";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";

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
    <TextAndAppletSlide
      title="Move the sliders to create a rectangle occupying an area of 54 unit squares."
      secondaryTitle="Area using Unit Squares"
      appletSrc="./triangle.html"
    />
  );
};

export default Slide5;
