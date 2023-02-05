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

const SurfaceAreaOfSphere = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={8}
         currentPageTitle={"Surface Area of Sphere"}
         nextPageTitle="Surface Area of Cube"
         nextPageLink="/us/math/study/surface-area-of-cube"
      />,
   ];

   const navigationSections = [
      {
         title: "What is the surface area of a sphere?",
         slides: [1, 2, 3],
      },
      { title: "General Formula", slides: [4] },
      {
         title: (
            <div>Why is the surface area 4 &times; π &times; r&sup2; ?</div>
         ),
         slides: [5, 6, 7],
      },
   ];

   const darkBgIndices = [0, 4, 5, 7, 8];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

SurfaceAreaOfSphere.title =
   "Surface Area of Sphere: Definition, Formula, Examples - BYJU'S";

SurfaceAreaOfSphere.meta =
   "Enhance your understanding of the surface area of sphere with BYJU'S interactive activities. Explore the definition, formula, and examples of this important mathematical concept.";

export default SurfaceAreaOfSphere;
