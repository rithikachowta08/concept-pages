import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";

const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide1 = dynamic(() => import("./slides/Slide1"));
const Slide2 = dynamic(() => import("./slides/Slide2"));
const Slide3 = dynamic(() => import("./slides/Slide3"));
const Slide4 = dynamic(() => import("./slides/Slide4"));
const Slide5 = dynamic(() => import("./slides/Slide5"));
const Slide6 = dynamic(() => import("./slides/Slide6"));
const Slide7 = dynamic(() => import("./slides/Slide7"));
const Slide8 = dynamic(() => import("./slides/Slide8"));
const Slide9 = dynamic(() => import("./slides/Slide9"));
const Slide10 = dynamic(() => import("./slides/Slide10"));
const Slide11 = dynamic(() => import("./slides/Slide11"));
const Slide12 = dynamic(() => import("./slides/Slide12"));
const Slide13 = dynamic(() => import("./slides/Slide13"));
const Slide14 = dynamic(() => import("./slides/Slide14"));
const Slide15 = dynamic(() => import("./slides/Slide15"));
const Slide16 = dynamic(() => import("./slides/Slide16"));
const PageLastSlide = dynamic(() =>
   import("../../components/slides/PageLastSlide")
);
const UnitsOfLength = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide4 key={3} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide5 key={4} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide6 key={5} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide7 key={6} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide9 key={8} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide10 key={9} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide11 key={10} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide12 key={11} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide13 key={12} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide14 key={13} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide15 key={14} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide16 key={15} type={SLIDE_TYPES.APPLET_ONLY} />,
      <PageLastSlide
         key={16}
         type={SLIDE_TYPES.CONCLUSION}
         currentPageTitle={"Units of capacity"}
         nextPageLink={"/us/math/study/concept/volume-of-rectangular-prism"}
         nextPageTitle={"Volume of a Rectangular Prism"}
      />,
   ];
   const navigationSections = [
      {
         title: "What is length measurement?",
         slides: [1],
      },
      { title: "Explore length using non-standard units ", slides: [2, 3] },
      {
         title: "Standard units",
         slides: [4, 5, 6],
      },
      {
         title: "Customary measurement system",
         slides: [7, 8],
      },
      {
         title: "International system of units",
         slides: [9, 10, 11, 12],
      },
      {
         title: "Imperial system of units",
         slides: [13, 14, 15],
      },
   ];

   const darkBgIndices = [0, 4, 7, 9, 13, 15, 16];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

export default UnitsOfLength;
