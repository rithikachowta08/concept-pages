import { toast } from "react-toastify";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Icon = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Icon)
);

const error = "assets/error.svg";
const success = "assets/success.svg";
import { Paragraph } from "components/text";

const Slide5 = ({ downIcon, navBar }) => {
  const triggerToast = (isRightAngled) => {
    if (isRightAngled) {
      toast.success("That is correct! ABC is a right angled triangle", {
        icon: <Icon src={success} width="20px"></Icon>,
      });
    } else {
      toast.error("A right angled triangle has one angle equal to 90°", {
        icon: <Icon src={error} width="20px"></Icon>,
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
      title="Area using Unit Squares"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
      navBar={navBar}
    >
      <Paragraph>
        Move the sliders to create a rectangle occupying an area of 54 unit
        squares.
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide5;
