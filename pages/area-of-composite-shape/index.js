import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
import Script from "next/script";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));
const Slide3 = dynamic(() => import("./Slide3"));
const Slide4 = dynamic(() => import("./Slide4"));
const Slide5 = dynamic(() => import("./Slide5"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));

const AreaOfCompositeShape = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide9 key={8} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide12 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={12}
         currentPageTitle={"Area of a Composite Shape"}
         nextPageTitle="Units of Length"
         nextPageLink="/us/math/study/concept/units-of-length"
      />,
   ];

   const navigationSections = [
      {
         title: "What is a composite shape?",
         slides: [1, 2],
      },
      { title: "Area of a composite shape", slides: [3] },
      {
         title: "Calculating area by counting unit squares",
         slides: [4, 5],
      },
      {
         title: "Calculating area by additive method",
         slides: [6, 7, 8, 9],
      },
      {
         title: "Calculating area by subtractive method",
         slides: [10, 11],
      },
   ];

   const darkBgIndices = [0, 3, 4, 6, 8, 10, 12];
   return (
      <>
         <Script
            src="https://geogebra.org/apps/deployggb.js"
            strategy="beforeInteractive"
         ></Script>
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navigationSections}
            darkBgIndices={darkBgIndices}
         />
      </>
   );
};

AreaOfCompositeShape.title = "Area of Composite shapes - BYJU'S";

AreaOfCompositeShape.meta =
   "Learn about the area of composite shapes, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default AreaOfCompositeShape;
