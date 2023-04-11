import dynamic from "next/dynamic";
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
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const VolumeAndCubicUnits = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.MULTIPLE_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         key={8}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Volume and Cubic Units"}
         nextPageLink={"/us/math/study/concept/volume-of-sphere"}
         nextPageTitle="Volume of Sphere"
      />,
   ];
   const navigationSections = [
      {
         title: "What is volume?",
         slides: [1],
      },
      {
         title: "Volume by counting unit cubes",
         slides: [2, 3, 4],
      },
      {
         title: "Volume in cubic units",
         slides: [5, 6],
      },
      {
         title: "Limitations of volume measurement using unit cubes",
         slides: [7, 8],
      },
   ];

   const darkBgIndices = [0, 2, 3, 5, 8];
   return (
      <>
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navigationSections}
            darkBgIndices={darkBgIndices}
         />
      </>
   );
};
VolumeAndCubicUnits.title =
   "Volume And Cubic Units: Definition, Formula, Examples - BYJU'S";
VolumeAndCubicUnits.meta =
   "Gain a deep understanding of volume and cubic units with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default VolumeAndCubicUnits;
