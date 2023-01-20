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
const Slide11 = dynamic(() => import("./Slide11"));
const Slide12 = dynamic(() => import("./Slide12"));
const Slide13 = dynamic(() => import("./Slide13"));
const Slide14 = dynamic(() => import("./Slide14"));
const Slide15 = dynamic(() => import("./Slide15"));
const PageLastSlide = dynamic(() =>
  import("../../components/slides/PageLastSlide")
);
// const Slide10 = dynamic(() => import("./Slide10"));
// const Slide11 = dynamic(() => import("./Slide11"));
// const Slide12 = dynamic(() => import("./Slide12"));
// const Slide13 = dynamic(() => import("./Slide13"));

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
    <Slide11 key={10} />,
    <Slide12 key={11} />,
    <Slide13 key={12} />,
    <Slide14 key={13} />,
    <Slide15 key={14} />,
    // <PageLastSlide
    //   key={9}
    //   currentPageTitle={"Surface Area of Cube"}
    //   nextPageLink={"/us/math/study/units-to-measure-capacity"}
    //   nextPageTitle={"Units to measure Capacity"}
    // />,
    // <Slide10 key={8} />,
    // <Slide11 key={10} />,
    // <Slide12 key={11} />,
    // <Slide13 key={12} />,
  ];
  const navigationSections = [
    {
      title: "What is the volume of a pyramid?",
      slides: [1],
    },
    {
      title: "General formula",
      slides: [2, 3],
    },
    { title: "Volume of different types of pyramids", slides: [4, 5] },
    {
      title: "Relationship between volume of a prism and pyramid",
      slides: [6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
  ];

  const darkBgIndices = [0, 2, 4, 6, 8, 9];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};
SurfaceAreaofCone.title =
  "Surface Area of Cube: Definition, Formula, Examples - BYJU'S";
SurfaceAreaofCone.meta =
  "Learn about the surface area of cube, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default SurfaceAreaofCone;
