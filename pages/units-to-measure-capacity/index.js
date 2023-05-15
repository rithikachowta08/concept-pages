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
const Slide13 = dynamic(() => import("./Slide13"));
const Slide14 = dynamic(() => import("./Slide14"));
const Slide15 = dynamic(() => import("./Slide15"));
const Slide16 = dynamic(() => import("./Slide16"));
const Slide17 = dynamic(() => import("./Slide17"));
const Slide18 = dynamic(() => import("./Slide18"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);

const UnitsToMeasureCapacity = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide12 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide13 key={12} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide14 key={13} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide15 key={14} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide16 key={15} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide17 key={16} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide18 key={17} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         key={18}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Units of capacity"}
         nextPageLink={"/us/math/study/concept/volume-of-rectangular-prism"}
         nextPageTitle={"Volume of a Rectangular Prism"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is capacity measurement?",
         slides: [1, 2],
      },
      { title: "Explore capacity using non-standard units ", slides: [3, 4] },
      {
         title: "Standard units",
         slides: [5, 6],
      },
      {
         title: "Customary measurement system",
         slides: [7, 8, 9],
      },
      {
         title: "International system of units",
         slides: [10, 11, 12, 13],
      },
      {
         title: "Imperial system of units",
         slides: [14, 15, 16, 17],
      },
   ];

   const darkBgIndices = [0, 3, 5, 7, 10, 14, 17, 18];
   return (
      <>
         <Script
            src="https://geogebra.org/apps/deployggb.js"
            strategy="lazyOnload"
         ></Script>
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navigationSections}
            darkBgIndices={darkBgIndices}
         />
      </>
   );
};
UnitsToMeasureCapacity.title =
   "Units to measure Capacity: Definition, Formula, Examples - BYJU'S";
UnitsToMeasureCapacity.meta =
   "Gain a deep understanding of units to measure capacity with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default UnitsToMeasureCapacity;
