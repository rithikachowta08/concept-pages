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
const Slide16 = dynamic(() => import("./Slide16"));
const Slide17 = dynamic(() => import("./Slide17"));
const Slide18 = dynamic(() => import("./Slide18"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);

const UnitsToMeasureCapacity = () => {
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
      <Slide16 key={15} />,
      <Slide17 key={16} />,
      <Slide18 key={17} />,
      <PageLastSlide
         key={18}
         currentPageTitle={"Units of capacity"}
         nextPageLink={"/us/math/study/volume-of-cube"}
         nextPageTitle={"Volume of a Cube"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is capacity measurement?",
         slides: [1, 2],
      },
      { title: "Explore capacity using non-standard units ", slides: [3, 4] },
      {
         title: "Standard units",
         slides: [5, 6],
      },
      {
         title: "Customary measurement system",
         slides: [7, 8, 9],
      },
      {
         title: "International system of units",
         slides: [10, 11, 12, 13],
      },
      {
         title: "Imperial system of units",
         slides: [14, 15, 16, 17],
      },
   ];

   const darkBgIndices = [0, 5, 10, 14, 17];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};
UnitsToMeasureCapacity.title =
   "Units to measure Capacity: Definition, Formula, Examples - BYJU'S";
UnitsToMeasureCapacity.meta =
   "Gain a deep understanding of units to measure capacity with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default UnitsToMeasureCapacity;
