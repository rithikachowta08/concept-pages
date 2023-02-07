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
const PageLastSlide = dynamic(() =>
  import("../../components/slides/PageLastSlide")
);

const AreaOfRhombus = () => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide3 key={2} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <Slide5 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide6 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide7 key={5} type={SLIDE_TYPES.APPLET_ONLY} />,
    <Slide8 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide9 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide10 key={8} type={SLIDE_TYPES.APPLET_ONLY} />,
    <Slide11 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide12 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide13 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide14 key={12} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <PageLastSlide
      key={13}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Area of a Rhombus"}
      nextPageLink={"/us/math/study/length-of-arc"}
      nextPageTitle={"Length of Arc of a circle"}
    />,
  ];

  const navigationSections = [
    { title: "What is the area of a rhombus?", slides: [1, 2, 3] },
    { title: "Area of rhombus using base and height", slides: [4, 5, 6] },
    { title: "Area of rhombus using diagonals", slides: [7, 8, 9] },
    {
      title: "Area of rhombus using trigonometry",
      slides: [10, 11, 12],
    },
  ];

  const darkBgIndices = [0, 2, 4, 7, 10, 13];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};
AreaOfRhombus.title =
  "Area of a Rhombus: Definition, Formula, Examples - BYJU'S";
AreaOfRhombus.meta =
  "Learn about the area of rhombus, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";
export default AreaOfRhombus;
