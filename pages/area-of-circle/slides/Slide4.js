import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const applet = "applets/triangle.html";

// Applet slide
const Slide4 = ({ navBar, downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="LIGHT"
         title={"Derivation"}
         secondaryTitle={"Area of a Circle"}
         navBar={navBar}
         downIcon={downIcon}
         appletSrc={applet}
      ></TextAndAppletSlide>
   );
};

export default Slide4;
