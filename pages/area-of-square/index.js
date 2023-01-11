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
const Slide11 = dynamic(() => import("./Slide11"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));


const AreaOfSquare= ({}) => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      // <Slide6 key={5} />,
      <Slide7 key={5} />,
      <Slide8 key={6} />,
      <Slide9 key={7} />,
      <Slide10 key={8} />,
      <Slide11 key={9} />,
      <PageLastSlide
      key={10}
      currentPageTitle={"Area of a Square"}
      nextPageTitle="Area of Sector a Circle"
      nextPageLink="/us/math/study/area-of-sector-of-a-circle"
    />,
   ];

   const navigationSections = [
      { title: "What is the area of a square?", slides: [1,2] },
      { title: "Area by counting unit squares", slides: [3,4] },
      {
         title: "General formula",
         slides: [5,6],
      },
      {
         title: "Area using diagonal",
         slides: [7,8,9],
      },
   ];

   const darkBgIndices = [0,3,5,9,10];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfSquare.title = "Area of Square: Definition, Formula, Examples - BYJU'S";
AreaOfSquare.meta =
   "Learn about the area of a square, including its definition, formula, and examples. Master area of asquare concept with BYJU'S interactive activities.";

export default AreaOfSquare;
