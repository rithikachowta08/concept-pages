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
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));


const SurfaceAreaOfCylinder= ({}) => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      <PageLastSlide
      key={8}
      currentPageTitle={"Surface Area of a Cylinder"}
      nextPageTitle="Surface Area of Sphere"
      nextPageLink="/us/math/study/surface-area-of-sphere"
    />,
   ];

   const navigationSections = [
      { title: "What is the surface area of a cylinder?", slides: [1,2] },
      { title: "Curved surface area", slides: [3,4] },
      {
         title: "Total surface area",
         slides: [5,6,7],
      },
   ];

   const darkBgIndices = [0,3,5,7,8];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

SurfaceAreaOfCylinder.title = "Surface Area of a Cylinder: Definition, Formula, Examples - BYJU'S";
SurfaceAreaOfCylinder.meta =
   "Discover the concept of surface area of cylinder, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default SurfaceAreaOfCylinder;
