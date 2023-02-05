import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide10 = ({ downIcon }) => {
   return <AppletSlide title={"Derivation"} appletSrc="" downIcon={downIcon} />;
};

export default Slide10;
