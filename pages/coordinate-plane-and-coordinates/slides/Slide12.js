import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide12 = ({ currentPageIdx, downIcon, navBar }) => {
   return (
      <AppletSlide
         bg={"LIGHT"}
         title={"Locate the Coordinates on the Map"}
         appletSrc={""}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
         navBar={navBar}
      />
   );
};

export default Slide12;
