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
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const VolumeOfCompositeSolids = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide3 key={2} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={4} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.APPLET_ONLY} />,
      <PageLastSlide
         key={8}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Volume of Composite Solids"}
         nextPageLink={
            "/us/math/study/concept/coordinate-plane-and-coordinates"
         }
         nextPageTitle="Coordinate Plane and Coordinates"
      />,
   ];
   const navigationSections = [
      {
         title: "What are composite solids?",
         slides: [1, 2],
      },
      {
         title: "Volume of composite solids using unit cubes",
         slides: [3, 4],
      },
      {
         title: "Volume of composite solids using formula",
         slides: [5, 6, 7],
      },
   ];

   const darkBgIndices = [0, 3, 5, 7];
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
VolumeOfCompositeSolids.title =
   "Volume of Composite Solids: Definition, Formula, Examples - BYJU'S";
VolumeOfCompositeSolids.meta =
   "Discover the concept of volume of composite solids, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default VolumeOfCompositeSolids;
