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
const Slide15 = dynamic(() => import("./Slide15"));
const PageLastSlide = dynamic(() =>
  import("../../components/slides/PageLastSlide")
);

const SurfaceAreaofCone = () => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide3 key={2} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide5 key={4} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
    <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide12 key={11} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide13 key={12} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide14 key={13} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
    <Slide15 key={14} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <PageLastSlide
      key={15}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Volume of Pyramids"}
      nextPageLink={"/us/math/study/concept/area-of-rectangle"}
      nextPageTitle={"Area of Rectangle"}
    />,
  ];
  const navigationSections = [
    {
      title: "What is the volume of a pyramid?",
      slides: [1, 2, 3],
    },
    {
      title: "General formula",
      slides: [4, 5],
    },
    {
      title: "Volume of different types of pyramids",
      slides: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      title: "Relationship between volume of a prism and pyramid",
      slides: [13, 14],
    },
  ];

  const darkBgIndices = [0, 2, 4, 6, 13, 15];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};
SurfaceAreaofCone.title =
  "Volume of Pyramids: Definition, Formula, Examples - BYJU'S";
SurfaceAreaofCone.meta =
  "Gain a thorough understanding of the volume of pyramids with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default SurfaceAreaofCone;
