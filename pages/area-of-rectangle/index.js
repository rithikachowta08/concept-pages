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
// const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));

const AreaOfRectangle = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      // <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      <Slide9 key={8} />,
      <Slide10 key={9} />,
      // <Slide11 key={10} />,
      // <Slide12 key={11} />,
      // <Slide13 key={12} />
   ];

   const navigationSections = [
      { title: "What is the area of a rectangle?", slides: [1, 2, 3] },
      { title: "Area by counting unit squares", slides: [4] },
      { title: "General formula", slides: [5, 6] },
      { title: "Area using diagonal", slides: [7, 8] },
   ];

   const darkBgIndices = [0, 3, 4, 5, 7];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfRectangle.title =
   "Area of Rectangle: Definition, Formula, Examples - BYJU'S";

AreaOfRectangle.meta =
   "Discover the concept of area of rectangle, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default AreaOfRectangle;
