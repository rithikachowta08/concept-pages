import dynamic from "next/dynamic";

import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import PageLastSlide from "components/slides/PageLastSlide";
import { SLIDE_TYPES } from "utils/constants";
import Script from "next/script";

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

const VolumeOfRectangularPrism = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide4 key={3} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.MULTIPLE_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={12}
         currentPageTitle={"Volume of a Rectangular Prism"}
         nextPageTitle="Relationship between Diameter and Circumference"
         nextPageLink="/us/math/study/concept/diameter-and-circumference"
      />,
   ];
   const navigationSections = [
      { title: "What is a rectangular prism?", slides: [1] },
      { title: "Volume by counting the unit cubes", slides: [2, 3, 4] },
      { title: "General Formula", slides: [5, 6] },
      {
         title: "Types of rectangular prisms",
         slides: [7, 8, 9, 10],
      },
   ];

   const darkBgIndices = [0, 2, 3, 5, 7, 11];
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

VolumeOfRectangularPrism.title =
   "Volume of Rectangular Prism: Definition, Formula, Examples - BYJU'S";
VolumeOfRectangularPrism.meta =
   "Gain a thorough understanding of the volume of rectangular prism with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default VolumeOfRectangularPrism;
