import dynamic from "next/dynamic";
import { useEffect } from "react";
const PracticeSlide = dynamic(() => import("components/slides/PracticeSlide"));

const overlay = "assets/pencil.json";

const Slide2 = ({ downIcon, currentPageIdx }) => {
   useEffect(() => {
      if (currentPageIdx === 1) {
         setTimeout(() => {
            document.getElementById("lottie-overlay").style.height = "0px";
         }, 2000);
      }
   }, [currentPageIdx]);
   return (
      <PracticeSlide title="Solve the problem" downIcon={downIcon}>
         {currentPageIdx === 1 && (
            <lottie-player
               id="lottie-overlay"
               src={overlay}
               speed="1"
               loop
               autoplay
            ></lottie-player>
         )}
         <algebra-practice
            latex="2x+1=5"
            hints="on"
            drag-eq="fast"
            style={{
               height: "inherit",
               width: "inherit",
               border: "1px solid silver",
            }}
         ></algebra-practice>
      </PracticeSlide>
   );
};

export default Slide2;
