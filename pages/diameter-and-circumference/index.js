import dynamic from "next/dynamic";
import React, { useState} from 'react';
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
// const Slide10 = dynamic(() => import("./Slide10"));
// const Slide11 = dynamic(() => import("./Slide11"));
// const Slide12 = dynamic(() => import("./Slide12"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));



const RelationshipBetweenDiameterAndCircumference = () => {
  const SlideArray =[
    <Slide1 key={0} />,
    <Slide2 key={1} />,
    <Slide3 key={2} />,
    <Slide4 key={3} />,
    <Slide5 key={4} />,
    <Slide6 key={5} />,
    <Slide7 key={6} />,
    <Slide8 key={7} />,
    // <Slide9 key={8} />,
    // <Slide10 key={9} />,
    // <Slide11 key={10} />,
    // <Slide12 key={11} />,
    <PageLastSlide
      key={8}
      currentPageTitle={"Relationship between Diameter and Circumference"}
      nextPageTitle="Area of Square"
      nextPageLink="/us/math/study/area-of-square"
    />,
  ];

  const navigationSections = [
    { title: "Circumference of a circle", slides: [1] },
    { title: "Ratio of circumference to diameter", slides: [2, 3] },
    { title: "Relation between circumference and diameter", slides: [4, 5, 6, 7] },
  ];

  const darkBgIndices = [0, 2, 4, 7, 8];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};

RelationshipBetweenDiameterAndCircumference.title="Relationship between Diameter and Circumference - BYJU'S"
RelationshipBetweenDiameterAndCircumference.meta="Gain a deep understanding of relationship between diameter and circumference of circle. Use our interactive activities to master it."

export default RelationshipBetweenDiameterAndCircumference;
