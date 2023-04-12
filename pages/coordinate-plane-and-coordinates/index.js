import dynamic from "next/dynamic";
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
import { SLIDE_TYPES } from "utils/constants";

const CoordinatePlaneAndCoordinates = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={5} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide6 key={6} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide7 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={8} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide9 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide12 key={12} type={SLIDE_TYPES.APPLET_ONLY} />,
      <PageLastSlide
         key={13}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Volume of Sphere"}
         nextPageLink={"nets-of-solid-figures"}
         nextPageTitle={"Nets of solid figures"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is a coordinate plane?",
         slides: [1, 2, 3, 4, 5],
      },
      { title: "What are coordinates?", slides: [6, 7] },
      {
         title: "How to locate points on a coordinate plane?",
         slides: [8, 9],
      },
      {
         title: "How to plot a point on a coordinate plane?",
         slides: [10, 11],
      },
   ];

   const darkBgIndices = [0, 5, 6, 7, 8, 10, 12];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};
CoordinatePlaneAndCoordinates.title =
   "Coordinate plane and coordinates: Definition, Formula, Examples - BYJU'S";
CoordinatePlaneAndCoordinates.meta =
   "Gain a thorough understanding of the coordinate plane and coordinates with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

// Hide page
export function getStaticProps() {
   return {
      // returns the default 404 page with a status code of 404
      notFound: true,
   };
}

export default CoordinatePlaneAndCoordinates;
