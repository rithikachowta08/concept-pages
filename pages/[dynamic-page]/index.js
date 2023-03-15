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

   const darkBgIndices = [0, 3, 5, 6, 13];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={json.navSections}
         darkBgIndices={darkBgIndices}
      />
   );
}

/* Common elements:
Multiline paragrpahs
Paragraphs/textlines with math elements
Modal 
Pill
BulletList/NumberedList
ModalTriggerText - DONE
TextSpanBg - DONE
Textspanbg with math 
ModalTriggerText with Math
EquationTable 
Title - DONE
SecondaryTitle - DONE
*/
