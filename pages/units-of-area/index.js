import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";

const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide1 = dynamic(() => import("./slides/Slide1"));
const Slide2 = dynamic(() => import("./slides/Slide2"));
const Slide3 = dynamic(() => import("./slides/Slide3"));
const Slide4 = dynamic(() => import("./slides/Slide4"));
const Slide5 = dynamic(() => import("./slides/Slide5"));
const Slide6 = dynamic(() => import("./slides/Slide6"));
const Slide7 = dynamic(() => import("./slides/Slide7"));
const Slide8 = dynamic(() => import("./slides/Slide8"));
const Slide9 = dynamic(() => import("./slides/Slide9"));
const Slide10 = dynamic(() => import("./slides/Slide10"));
const Slide11 = dynamic(() => import("./slides/Slide11"));
const Slide12 = dynamic(() => import("./slides/Slide12"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);
const UnitsOfArea = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide12 key={11} type={SLIDE_TYPES.APPLET_ONLY} />,
      <PageLastSlide
         key={16}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Units of Area"}
         nextPageLink={"/us/math/study/concept/units-of-time"}
         nextPageTitle={"Units of Time"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is area?",
         slides: [1],
      },
      { title: "How do we measure area?", slides: [2, 3] },
      {
         title: "Customary measurement system",
         slides: [4, 5, 6],
      },
      {
         title: "International system of units",
         slides: [7, 8, 9, 10, 11, 12],
      },
   ];

   const darkBgIndices = [0, 2, 3, 4, 7, 12];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

UnitsOfArea.title = "Units of Area: Definition, Formula, Examples - BYJU'S";
UnitsOfArea.meta =
   "Gain a thorough understanding of the units of area with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default UnitsOfArea;
