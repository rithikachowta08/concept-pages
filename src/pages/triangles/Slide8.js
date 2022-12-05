import AppletSlide from "components/slides/AppletSlide";
import { Icon } from "components/StyledElements";
import { toast } from "react-toastify";
import error from "assets/error.svg";
import success from "assets/success.svg";
import { useEffect } from "react";

const Slide8 = () => {
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
    <AppletSlide
      appletSrc="./applets/triangle.html"
      title="Move the vertices to form a right angled triangle"></AppletSlide>
  );
};

export default Slide8;
