import dynamic from "next/dynamic";
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
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));
const Slide13 = dynamic(() => import("./Slide13"));
const Slide14 = dynamic(() => import("./Slide14"));

import PageLastSlide from "components/slides/PageLastSlide";

const VolumeOfCube = ({}) => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
    <Slide5 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide12 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide13 key={12} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide14 key={13} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <PageLastSlide
      key={14}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Area of a Parallelogram"}
      nextPageTitle="Volume of Cone"
      nextPageLink="/us/math/study/volume-of-cone"
    />,
  ];

  const navigationSections = [
    { title: "What is the area of a parallelogram?", slides: [1] },
    { title: "General formula", slides: [2, 3, 4, 5] },
    {
      title: "Area of parallelogram without using height",
      slides: [6, 7],
    },
    {
      title: "Area of a parallelogram using diagonals",
      slides: [8, 9, 10],
    },
    {
      title: "Area of a parallelogram in vector form",
      slides: [11, 12, 13],
    },
  ];

  const darkBgIndices = [0, 2, 4, 6, 8, 11, 14];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};

VolumeOfCube.title =
  "Area of a Parallelogram: Definition, Formula, Examples - BYJU'S";
VolumeOfCube.meta =
  "Enhance your understanding of the area of parallelogram with BYJU'S interactive activities. Explore the definition, formula, and examples of this important mathematical concept.";

export default VolumeOfCube;
