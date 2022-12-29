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
// const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));
const Slide13 = dynamic(() => import("./Slide13"));
const Slide14 = dynamic(() => import("./Slide14"));
const Slide15 = dynamic(() => import("./Slide15"));
const Slide16 = dynamic(() => import("./Slide16"));
const Slide17 = dynamic(() => import("./Slide17"));

const VolumeOfCube = ({}) => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      // <Slide9 key={8} />,
      <Slide10 key={8} />,
      <Slide11 key={9} />,
      <Slide12 key={10} />,
      <Slide13 key={11} />,
      <Slide14 key={12} />,
      <Slide15 key={13} />,
      <Slide16 key={14} />,
      <Slide17 key={15} />,
   ];

   const navigationSections = [
      { title: "What is the volume of a cube?", slides: [1, 2, 3, 4] },
      { title: "General Formula", slides: [5, 6, 7, 8] },
      {
         title: "Volume of a cube using diagonal",
         slides: [9,10,11,12,13,14],
      },
      {
         title: "Rectangular prism vs cube",
         slides: [15],
      },
   ];

   const darkBgIndices = [0, 4, 5, 9, 15];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

VolumeOfCube.title = "Volume of a Cube: Definition, Formula, Examples - BYJU'S";
VolumeOfCube.meta =
   "Learn about the volume of a cube, including its definition, formula, and examples. Master volume of a cube concept with BYJU'S interactive activities.";

export default VolumeOfCube;
