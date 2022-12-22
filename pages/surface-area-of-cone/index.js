import dynamic from "next/dynamic";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));

const VolumeOfCube = ({}) => {
   const SlideArray = [<Slide1 key={0} />, <Slide2 key={0} />];

   const navigationSections = [
      { title: "What is the surface area of a cone?", slides: [1, 2, 3, 4] },
      { title: "Curved surface area", slides: [5, 6, 7, 8, 9] },
      {
         title: "Total surface area",
         slides: [10, 11, 12, 13, 14, 15],
      },
   ];

   const darkBgIndices = [0, 4, 5, 10, 16];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

export default VolumeOfCube;
