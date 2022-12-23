import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper.js";
import Slide2 from "./Slide2";

const VolumeOfCube = ({}) => {
   const SlideArray = [<Slide2 key={1} />];

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
   return <Slide2></Slide2>;
};

VolumeOfCube.title = "Volume of a Cube: Definition, Formula, Examples - BYJU'S";
VolumeOfCube.meta =
   "Learn about the volume of a cube, including its definition, formula, and examples. Master volume of a cube concept with BYJU'S interactive activities.";

export default VolumeOfCube;
