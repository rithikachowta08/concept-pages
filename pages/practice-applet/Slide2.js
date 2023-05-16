import dynamic from "next/dynamic";
const PracticeSlide = dynamic(() => import("components/slides/PracticeSlide"));

const Slide2 = ({ downIcon, currentPageIdx }) => {
   return (
      <PracticeSlide
         title="Solve the problem"
         downIcon={downIcon}
         equations={["3x+4y-5x+7y", "4x(3x-2x)", "3(4x+2y)+4(3x-6x)", "2x+1=5"]}
         currentPageIdx={currentPageIdx}
      ></PracticeSlide>
   );
};

export default Slide2;
