import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Explore Length using Non-standard Units"
         currentPageIdx={currentPageIdx}
         AppletComponent={null}
      ></AppletSlide>
   );
};

export default Slide3;
