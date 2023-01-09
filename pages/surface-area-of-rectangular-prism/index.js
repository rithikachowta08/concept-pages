import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import dynamic from "next/dynamic";

const Slide1 = dynamic(() => import("./slides/Slide1.js"));
const Slide2 = dynamic(() => import("./slides/Slide2.js"));
const Slide3 = dynamic(() => import("./slides/Slide3.js"));
const Slide4 = dynamic(() => import("./slides/Slide4.js"));
const Slide5 = dynamic(() => import("./slides/Slide5.js"));
const Slide6 = dynamic(() => import("./slides/Slide6.js"));
const Slide7 = dynamic(() => import("./slides/Slide7.js"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);

const SurfaceAreaOfRectangularPrism = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      // <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <PageLastSlide
         key={7}
         currentPageTitle={"Surface Area of Rectangular Prism"}
         nextPageLink={"/study/surface-area-of-cone"}
         nextPageTitle={"Surface Area of Cone"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is the surface area of a rectangular prism?",
         slides: [3],
      },
      { title: "Total surface area", slides: [4] },
      { title: "Lateral surface area", slides: [5] },
   ];

   const darkBgIndices = [0, 2, 4, 5, 6];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

SurfaceAreaOfRectangularPrism.title =
   "Surface Area of Rectangular Prism: Definition, Formula, Examples - BYJU'S";
SurfaceAreaOfRectangularPrism.meta =
   "Gain a deep understanding of surface area of rectangular prism with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default SurfaceAreaOfRectangularPrism;
