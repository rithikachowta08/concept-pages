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
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const SurfaceAreaOfCylinder = ({}) => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
    <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide8 key={7} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <PageLastSlide
      key={8}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Surface Area of a Cylinder"}
      nextPageTitle="Surface Area of Sphere"
      nextPageLink="/us/math/study/surface-area-of-sphere"
    />,
  ];

  const navigationSections = [
    { title: "What is the surface area of a cylinder?", slides: [1, 2] },
    { title: "Curved surface area", slides: [3, 4] },
    {
      title: "Total surface area",
      slides: [5, 6, 7],
    },
  ];

  const darkBgIndices = [0, 3, 5, 7, 8];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};

SurfaceAreaOfCylinder.title =
  "Surface Area of a Cylinder: Definition, Formula, Examples - BYJU'S";
SurfaceAreaOfCylinder.meta =
  "Discover the concept of surface area of cylinder, including its definition, formula, and examples. Enhance your understanding with BYJU'S interactive activities and examples.";

export default SurfaceAreaOfCylinder;
