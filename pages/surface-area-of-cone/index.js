import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
import Script from "next/script";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));
const Slide3 = dynamic(() => import("./Slide3"));
const Slide4 = dynamic(() => import("./Slide4"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));
const Slide13 = dynamic(() => import("./Slide13"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);

const SurfaceAreaofCone = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide7 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide10 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide12 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide13 key={11} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         key={12}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Surface Area of a Cone"}
         nextPageLink={"/us/math/study/concept/volume-of-cube"}
         nextPageTitle={"Volume of a Cube"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is the surface area of a cone?",
         slides: [1, 2, 3, 4, 5],
      },
      { title: "Curved surface area", slides: [6, 7] },
      {
         title: "Total surface area",
         slides: [8, 9, 10, 11],
      },
   ];

   const darkBgIndices = [0, 4, 6, 8, 11, 12];
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
SurfaceAreaofCone.title =
   "Surface area of Cone: Definition, Formula, Examples - BYJU'S";
SurfaceAreaofCone.meta =
   "Discover the concept of surface area of cone, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default SurfaceAreaofCone;
