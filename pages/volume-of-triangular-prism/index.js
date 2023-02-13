import dynamic from "next/dynamic";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide0 = dynamic(() => import("./Slide0"));
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
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);
import { SLIDE_TYPES } from "utils/constants";

const VolumeOfTriangularPrism = () => {
   const SlideArray = [
      <Slide0 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide1 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide2 key={2} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide3 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={5} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide6 key={6} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide7 key={7} type={SLIDE_TYPES.MULTIPLE_DIAGRAM} />,
      <Slide8 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         key={12}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Volume of Triangular Prism"}
         nextPageLink={"/us/math/study/area-of-parallelogram"}
         nextPageTitle={"Area of a Parallelogram"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is the volume of a triangular prism?",
         slides: [1, 2, 3],
      },
      { title: "General formula", slides: [4, 5, 6] },
      {
         title: "Volume of different types of triangular prisms",
         slides: [7, 8, 9, 10, 11, 12],
      },
   ];

   const darkBgIndices = [0, 4, 6, 7, 12];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};
VolumeOfTriangularPrism.title =
   "Volume of a Triangular prism: Definition, Formula, Examples - BYJU'S";
VolumeOfTriangularPrism.meta =
   "Discover the concept of volume of triangular prism, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default VolumeOfTriangularPrism;
