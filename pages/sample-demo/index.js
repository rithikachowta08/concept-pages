import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper.js";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";

const VolumeOfCube = ({}) => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
   ];

   const navigationSections = [
      { title: "What is the volume of a cube?", slides: [1, 2, 3, 4] },
      { title: "Formula", slides: [5, 6, 7, 8, 9] },
      {
         title: "Volume of a cube using diagonal",
         slides: [10, 11, 12, 13, 14, 15],
      },
      {
         title: "Rectangular prism vs cube",
         slides: [16],
      },
   ];

   const darkBgIndices = [0, 4, 5, 10, 16];
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
