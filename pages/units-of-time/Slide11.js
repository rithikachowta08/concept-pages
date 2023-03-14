import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide11 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         currentPageIdx={currentPageIdx}
         title="Converting Time"
         downIcon={downIcon}
      ></AppletSlide>
   );
};

export default Slide11;
