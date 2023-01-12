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
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));


const SurfaceAreaOfCylinder= ({}) => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide7 key={5} />,
      <Slide8 key={6} />,
      <Slide9 key={7} />,
      <Slide10 key={8} />,
      <Slide11 key={9} />,
      <PageLastSlide
      key={10}
      currentPageTitle={"Surface Area of Cylinder"}
      nextPageTitle="Surface Area of Sphere"
      nextPageLink="/us/math/study/surface-area-of-sphere"
    />,
   ];

   const navigationSections = [
      { title: "What is the surface area of a cylinder?", slides: [1,2] },
      { title: "Curved surface area", slides: [3,4] },
      {
         title: "Total surface area",
         slides: [5,6],
      },
   ];

   const darkBgIndices = [0,3];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

SurfaceAreaOfCylinder.title = "Surface Area of Cylinder: Definition, Formula, Examples - BYJU'S";
SurfaceAreaOfCylinder.meta =
   "Learn about the surface area of a cylinder, including its definition, formula, and examples. Master surface area of a cylinder concept with BYJU'S interactive activities.";

export default SurfaceAreaOfCylinder;
