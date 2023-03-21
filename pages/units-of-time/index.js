import dynamic from "next/dynamic";
import Script from "next/script";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
import { SLIDE_TYPES } from "utils/constants";
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
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);

const UnitsOfTime = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={10} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide12 key={11} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         key={12}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Units of time"}
         nextPageLink={"/us/math/study/concept/area-of-rectangle"}
         nextPageTitle={"Area of a Rectangle"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is time?",
         slides: [1],
      },
      {
         title: "How do we measure time?",
         slides: [2, 3],
      },
      {
         title: "Units of time",
         slides: [4, 5, 6, 7, 8],
      },
      {
         title: "Relationship between units of time",
         slides: [9, 10, 11, 12],
      },
   ];

   const darkBgIndices = [0, 2, 4, 9, 11, 12, 13];
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
UnitsOfTime.title = "Units of time: Definition, Formula, Examples - BYJU'S";
UnitsOfTime.meta =
   "Gain a thorough understanding of the units of time with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default UnitsOfTime;
