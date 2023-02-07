import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));
const Slide3 = dynamic(() => import("./Slide3"));
// const Slide4 = dynamic(() => import("./Slide4"));
const Slide5 = dynamic(() => import("./Slide5"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));

const CircumferenceOfCircle = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      // <Slide4 key={3} />,
      <Slide5 key={4} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={10}
         currentPageTitle={"Circumference of a Circle"}
         nextPageTitle="Area of a Rhombus"
         nextPageLink="/us/math/study/area-of-rhombus"
      />,
   ];

   const navigationSections = [
      { title: "What is the circumference of a circle?", slides: [1] },
      { title: "Formula", slides: [2] },
      { title: "Derivation of the formula", slides: [3, 4, 5] },
      { title: "How many revolutions?", slides: [6, 7, 8] },
   ];

   const darkBgIndices = [0, 2, 3, 6, 8, 9];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

CircumferenceOfCircle.title =
   "Circumference of Circle: Definition, Formula, Examples - BYJU'S";

CircumferenceOfCircle.meta =
   "Enhance your understanding of the circumference of circle with BYJU'S interactive activities. Explore the definition, formula, and examples of this important mathematical concept.";

export default CircumferenceOfCircle;
