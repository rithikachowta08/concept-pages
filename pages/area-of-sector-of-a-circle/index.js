import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import dynamic from "next/dynamic";

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
const Slide12 = dynamic(() => import("./slides/Slide12"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const AreaOfSectorOfCircle = () => {
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
      <Slide11 key={10} />,
      <Slide12 key={11} />,
      <PageLastSlide
         key={12}
         currentPageTitle={"Area of a Sector of a Circle"}
         nextPageTitle={"Surface Area of a Cylinder"}
         nextPageLink={"/us/math/study/surface-area-of-a-cylinder"}
      />,
   ];
   const navigationSections = [
      { title: "What is a sector of a circle?", slides: [1, 2] },
      { title: "Area of a sector of a circle", slides: [3] },
      { title: "General formula", slides: [4, 5, 6, 7, 8] },
      {
         title: "Area of a sector using the length of an arc",
         slides: [9, 10, 11],
      },
   ];

   const darkBgIndices = [0, 3, 4, 7, 9, 12];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfSectorOfCircle.title =
   "Area of Sector of a Circle: Definition, Formula, Examples - BYJU'S";
AreaOfSectorOfCircle.meta =
   "Gain a deep understanding of area of sector of a circle with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default AreaOfSectorOfCircle;
