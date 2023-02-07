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
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const PageLastSlide = dynamic(() =>
  import("../../components/slides/PageLastSlide")
);

const SurfaceAreaofCone = () => {
  const SlideArray = [
    <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
    <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
    <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide5 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
    <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide8 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide9 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
    <Slide10 key={8} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
    <PageLastSlide
      key={9}
      type={SLIDE_TYPES.CONCLUSION}
      currentPageTitle={"Volume of a Cone"}
      nextPageLink={"/us/math/study/surface-area-of-pyramids"}
      nextPageTitle={"Surface Area of Pyramids"}
    />,
  ];
  const navigationSections = [
    { title: "Introduction to a cone", slides: [1, 2, 3, 4] },
    { title: "Volume of a cone", slides: [5] },
    {
      title: "General formula",
      slides: [6, 7],
    },
    {
      title: "Relation between volume of cone and cylinder",
      slides: [9],
    },
  ];

  const darkBgIndices = [0, 4, 5, 6, 8, 9];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};
SurfaceAreaofCone.title =
  "Volume of Cone: Definition, Formula, Examples - BYJU'S";
SurfaceAreaofCone.meta =
  "Gain a thorough understanding of the volume of cone with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default SurfaceAreaofCone;
