import dynamic from "next/dynamic";
import React, { useState} from 'react';
const FullPageCustomWrapper = dynamic(() =>
  import("components/full-page-wrapper/FullPageCustomWrapper").then(
    (mod) => mod.FullPageCustomWrapper
  )
);
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));
const Slide3 = dynamic(() => import("./Slide3"));
const Slide4 = dynamic(() => import("./Slide4"));
const Slide5 = dynamic(() => import("./Slide5"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
// const Slide12 = dynamic(() => import("./Slide12"));



const AreaOfTrapezoid = () => {
  const SlideArray =[
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
    // <Slide12 key={11} />,
    <PageLastSlide
         key={11}
         currentPageTitle={"Area of Trapezoid"}
         nextPageTitle="Volume of a Triangular prism"
         nextPageLink="/study/volume-of-triangular-prism"
      />,
  ];

  const navigationSections = [
    { title: "What is the area of a trapezoid?", slides: [1] },
    { title: "General formula", slides: [2] },
    { title: "Derivation of the formula", slides: [3,4,5] },
    { title: "Area of a trapezoid with 4 given sides", slides:[6]}
  ];

  const darkBgIndices = [0, 2, 3, 4, 6, 11];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};

AreaOfTrapezoid.title="Area of Trapezoid: Definition, Formula, Examples - BYJU'S"
AreaOfTrapezoid.meta="Gain a thorough understanding of the area of trapezoid with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities."

export default AreaOfTrapezoid;
