import dynamic from "next/dynamic";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);

const Slide1 = dynamic(() => import("./Slide1"));

const AreaOfSquare = ({}) => {
   const SlideArray = [<Slide1 key={0} />];

   const navigationSections = [
      { title: "What is the area of a square?", slides: [1, 2] },
      { title: "Area by counting unit squares", slides: [3, 4] },
      {
         title: "General formula",
         slides: [5, 6],
      },
      {
         title: "Area using diagonal",
         slides: [7, 8, 9],
      },
   ];

   const darkBgIndices = [0, 3, 5, 9, 10];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfSquare.title = "Area of Square: Definition, Formula, Examples - BYJU'S";
AreaOfSquare.meta =
   "Gain a deep understanding of area of square with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default AreaOfSquare;
