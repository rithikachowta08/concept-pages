import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
import Script from "next/script";
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
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));

const NetsOfSolidFigures = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={11}
         currentPageTitle={"Nets of Solid Figures"}
         nextPageTitle="Coordinate plane and quadrants"
         nextPageLink="/us/math/study/concept/coordinate-plane-and-quadrants"
      />,
   ];

   const navigationSections = [
      {
         title: "What is net of a solid? ",
         slides: [1],
      },
      { title: "Net of a prism", slides: [2, 3, 4, 5, 6] },
      {
         title: "Net of a pyramid",
         slides: [7, 8, 9],
      },
      {
         title: "Properties of a net",
         slides: [10],
      },
   ];

   const darkBgIndices = [0, 2, 7, 10, 11];
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

NetsOfSolidFigures.title = "Nets of solid figures - BYJU'S";

NetsOfSolidFigures.meta =
   "Gain a thorough understanding of the nets of solid figures with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default NetsOfSolidFigures;
