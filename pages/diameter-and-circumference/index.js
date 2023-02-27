import dynamic from "next/dynamic";
import React from "react";
import { SLIDE_TYPES } from "utils/constants";
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
const Slide9 = dynamic(() => import("./Slide9"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const RelationshipBetweenDiameterAndCircumference = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide9 key={8} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={9}
         currentPageTitle={"Relationship between Diameter and Circumference"}
         nextPageTitle="Volume of a Cylinder"
         nextPageLink="/us/math/study/concept/volume-of-cylinder"
      />,
   ];

   const navigationSections = [
      { title: "Circumference of a circle", slides: [1] },
      { title: "Ratio of circumference to diameter", slides: [2, 3] },
      {
         title: "Relation between circumference and diameter",
         slides: [4, 5, 6, 7],
      },
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

RelationshipBetweenDiameterAndCircumference.title =
   "Relationship between Diameter and Circumference - BYJU'S";
RelationshipBetweenDiameterAndCircumference.meta =
   "Gain a deep understanding of relationship between diameter and circumference of circle. Use our interactive activities to master it.";

export default RelationshipBetweenDiameterAndCircumference;
