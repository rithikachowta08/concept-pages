import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide = dynamic(() => import("./Slide"));
import json from "./structure.json";

export default function Home() {
   const router = useRouter();
   console.log("Path", router.asPath);

   const SlideArray = json.slides.map((slide, idx) => (
      <Slide key={idx} data={slide} json={json} />
   ));

   let darkBgIndices = [];
   json.slides.forEach((slide, idx) => {
      if (slide.theme === "DARK") {
         darkBgIndices.push(idx);
      }
   });
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={json.navSections}
         darkBgIndices={darkBgIndices}
      />
   );
}

/* Common elements:
Textspanbg with math 
ModalTriggerText with Math
EquationTable 
*/
