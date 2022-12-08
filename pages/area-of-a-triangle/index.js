import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import React from "react";
import Slide1 from "./slides/Slide1";
import Slide9_0 from "./slides/Slide9_0";
import Slide11 from "./slides/Slide11";
import Slide10 from "./slides/Slide10";
import Slide13 from "./slides/Slide9_2";
import Slide14 from "./slides/Slide14";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide3_0 from "./slides/Slide3_0";
import Slide3_1 from "./slides/Slide3_1";
import Slide3_2 from "./slides/Slide3_2";
import Slide4 from "./slides/Slide4";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide10_2 from "./slides/Slide10_2";
import Slide9_2 from "./slides/Slide9_2";
import Slide9_3 from "./slides/Slide9_3";
import Slide10_3 from "./slides/Slide10_3";
import Slide12 from "./slides/Slide12";
import Slide12_1 from "./slides/Sldie12_1";
import Slide15 from "./slides/Slide15";

const AreaOfATriangle = () => {
  const SlideArray = [
    <Slide1 key={0} />,
    <Slide2 key={1} />,
    <Slide3 key={"2"} />,
    <Slide3_0 key={3} />,
    <Slide3_1 key={"3_1"} />,
    <Slide3_2 key={"3_2"} />,
    <Slide4 key={3} />,
    <Slide6 key={5} />,
    <Slide7 key={6} />,
    <Slide9_0 key={8} />,
    <Slide9_2 key={9.2} />,
    <Slide9_3 key={9.3} />,
    <Slide10 key={9} />,
    <Slide10_2 key={"11.1"} />,
    <Slide10_3 key={"11.2"} />,
    <Slide11 key={10} />,
    <Slide12 key={11} />,
    <Slide12_1 key={"11.3"} />,
    // <Slide13 key={12} />,
    <Slide14 key={13} />,
    <Slide15 key={14} />,
  ];

  const navigationSections = [
    { title: "Definition", slides: [1, 2] },
    { title: "General Formula", slides: [3, 4, 5, 6, 7] },
    { title: "Heron's Formula", slides: [8] },
    {
      title: "Area of different types of triangle",
      slides: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
  ];

  const darkBgIndices = [0, 3, 5, 8, 9, 18];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};

export default AreaOfATriangle;
