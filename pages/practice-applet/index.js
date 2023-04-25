import dynamic from "next/dynamic";
import Script from "next/script";
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

const UnitsOfTime = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
   ];
   const navigationSections = [
      {
         title: "What is time?",
         slides: [1],
      },
      {
         title: "How do we measure time?",
         slides: [2, 3],
      },
      {
         title: "Units of time",
         slides: [4, 5, 6, 7, 8],
      },
      {
         title: "Relationship between units of time",
         slides: [9, 10, 11, 12],
      },
   ];

   const darkBgIndices = [0, 4, 9, 11, 12, 13];
   return (
      <>
         <Script
            id="practice-app"
            src="https://ggb-assets.s3.eu-west-1.amazonaws.com/algebra-practice/algebra-practice.umd.js"
         ></Script>
         <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navigationSections}
            darkBgIndices={darkBgIndices}
         />
      </>
   );
};
UnitsOfTime.title = "Units of time: Definition, Formula, Examples - BYJU'S";
UnitsOfTime.meta =
   "Gain a thorough understanding of the units of time with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default UnitsOfTime;
