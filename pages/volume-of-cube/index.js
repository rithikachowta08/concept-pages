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
// const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));
const Slide13 = dynamic(() => import("./Slide13"));
const Slide14 = dynamic(() => import("./Slide14"));
const Slide15 = dynamic(() => import("./Slide15"));
const Slide16 = dynamic(() => import("./Slide16"));
const Slide17 = dynamic(() => import("./Slide17"));
import PageLastSlide from "components/slides/PageLastSlide";

const VolumeOfCube = ({}) => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide4 key={3} type={SLIDE_TYPES.APPLET_ONLY} />,
    <Slide5 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide7 key={6} type={SLIDE_TYPES.APPLET_ONLY} />,
    <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    // <Slide9 key={8} />,
    <Slide10 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide11 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide12 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide13 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide14 key={12} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide15 key={13} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide16 key={14} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide17 key={15} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <PageLastSlide
      key={16}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Volume of Cube"}
      nextPageTitle="Area of Triangle"
      nextPageLink="/us/math/study/area-of-a-triangle"
    />,
  ];

  const navigationSections = [
    { title: "What is the volume of a cube?", slides: [1, 2, 3, 4] },
    { title: "General Formula", slides: [5, 6, 7, 8] },
    {
      title: "Volume of a cube using diagonal",
      slides: [9, 10, 11, 12, 13, 14],
    },
    {
      title: "Rectangular prism vs cube",
      slides: [15],
    },
  ];

  const darkBgIndices = [0, 4, 5, 9, 15, 16];
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
