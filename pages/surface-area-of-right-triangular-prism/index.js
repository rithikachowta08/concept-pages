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
const Slide4 = dynamic(() => import("./Slide4"));
const Slide5 = dynamic(() => import("./Slide5"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));

const SurfaceAreaOfRightTriangularPrism = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         key={9}
         currentPageTitle={"Surface Area of a Right Triangular Prism"}
         nextPageTitle="Surface Area of Rectangular Prism"
         nextPageLink="/us/math/study/concept/surface-area-of-rectangular-prism"
      />,
   ];

   const navigationSections = [
      {
         title: "What is the surface area of a right triangular prism?",
         slides: [1, 2, 3],
      },
      { title: "Lateral surface area", slides: [4, 5, 6] },
      { title: "Total surface area", slides: [7, 8] },
   ];

   const darkBgIndices = [0, 3, 4, 7, 9];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

SurfaceAreaOfRightTriangularPrism.title =
   "Surface area of a Right Triangular Prism: Definition, Formula, Examples - BYJU'S";

SurfaceAreaOfRightTriangularPrism.meta =
   "Gain a thorough understanding of the surface area of a right triangular prism with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default SurfaceAreaOfRightTriangularPrism;
