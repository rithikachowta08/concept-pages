import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { SLIDE_TYPES } from "utils/constants";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const Slide = dynamic(() => import("./Slide"));
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

import json from "./structure.json";

export default function Page() {
   const router = useRouter();
   console.log("Path", router.asPath);

   const SlideArray = json.slides.map((slide, idx) => (
      <Slide key={idx} data={slide} json={json} />
   ));

   SlideArray.push(
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={json.slides.length}
         currentPageTitle={json.title}
         nextPageTitle={json.nextPageTitle}
         nextPageLink={json.nextPageUrl}
      />
   );

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
