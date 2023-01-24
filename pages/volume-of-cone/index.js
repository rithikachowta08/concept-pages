import dynamic from "next/dynamic";
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
const PageLastSlide = dynamic(() =>
  import("../../components/slides/PageLastSlide")
);

const SurfaceAreaofCone = () => {
  const SlideArray = [
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
    <PageLastSlide
      key={10}
      currentPageTitle={"Volume of a Cone"}
      nextPageLink={"/us/math/study/the-surface-area-of-a-pyramids"}
      nextPageTitle={"Surface Area of Pyramids"}
    />,
  ];
  const navigationSections = [
    { title: "Introduction to a cone", slides: [1, 2, 3, 4] },
    { title: "Volume of a cone", slides: [5, 6] },
    {
      title: "General formula",
      slides: [7, 8],
    },
    {
      title: "Relation between volume of cone and cylinder",
      slides: [9],
    },
  ];

  const darkBgIndices = [0, 4, 5, 7, 9, 10];
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
