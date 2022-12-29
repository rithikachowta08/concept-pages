import dynamic from "next/dynamic";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
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

const CircumferenceOfCircle = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      <Slide9 key={8} />,
      <Slide10 key={9} />,
   ];

   const navigationSections = [
      { title: "What is the circumference of a circle?", slides: [1] },
      { title: "Formula", slides: [2, 3] },
      { title: "Derivation of the formula", slides: [4, 5, 6] },
      { title: "How many revolutions?", slides: [7, 8, 9] },
   ];

   const darkBgIndices = [0, 2, 4, 7, 9];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

CircumferenceOfCircle.title =
   "Circumference of Circle: Definition, Formula, Examples - BYJU'S";

CircumferenceOfCircle.meta =
   "Enhance your understanding of the circumference of circle with BYJU'S interactive activities. Explore the definition, formula, and examples of this important mathematical concept.";

export default CircumferenceOfCircle;
