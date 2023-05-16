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
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);
import { SLIDE_TYPES } from "utils/constants";

const VolumeOfSphere = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={7} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide8 key={8} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         key={9}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Volume of Sphere"}
         nextPageLink={"volume-of-composite-solids"}
         nextPageTitle={"Volume of composite solids"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is  a sphere?",
         slides: [1],
      },
      { title: "What is the volume of a sphere?", slides: [2, 3] },
      {
         title: "General formula",
         slides: [4, 5, 6, 7],
      },
   ];

   const darkBgIndices = [0, 2, 4, 7, 8];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};
VolumeOfSphere.title =
   "Volume of Sphere: Definition, Formula, Examples - BYJU'S";
VolumeOfSphere.meta =
   "Learn about the volume of sphere, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default VolumeOfSphere;
