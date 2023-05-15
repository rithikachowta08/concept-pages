import dynamic from "next/dynamic";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
const PracticeSlide = dynamic(() => import("components/slides/PracticeSlide"));

const overlay = "assets/pencil.json";
const PracticeElementWrap = styled.div`
   display: ${(props) => (props.isVisible ? "block" : "none")};
   grid-row-start: 1;
   grid-column-start: 1;
   width: 100%;
`;

const PracticeContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   justify-items: center;
   height: 100%;
`;

const Slide2 = ({ downIcon, currentPageIdx }) => {
   const inputs = ["3x+4y-5x+7y", "4x(3x-2x)", "3(4x+2y)+4(3x-6x)", "2x+1=5"];
   const [curInputIndex, setCurInputIndex] = useState(0);
   const curInputIndexRef = useRef(curInputIndex);
   const onSolved = () => {
      if (curInputIndexRef.current !== inputs.length - 1) {
         setTimeout(() => {
            curInputIndexRef.current = curInputIndexRef.current + 1;
            setCurInputIndex(curInputIndexRef.current);
         }, 2000);
      } else {
         setTimeout(() => {
            curInputIndexRef.current = 0;
            setCurInputIndex(0);
         }, 2000);
      }
   };
   useEffect(() => {
      if (currentPageIdx === 1) {
         setTimeout(() => {
            document.getElementById("lottie-overlay").style.height = "0px";
         }, 4500);
         if (document.querySelectorAll(".practice-element")) {
            document
               .querySelectorAll(".practice-element")
               .forEach((elem) => elem.addEventListener("solved", onSolved));
         }
      }
   }, [currentPageIdx]);
   return (
      <PracticeSlide title="Solve the problem" downIcon={downIcon}>
         <lottie-player
            id="lottie-overlay"
            src={overlay}
            speed="1"
            loop
            autoplay
         ></lottie-player>
         <PracticeContainer>
            {inputs.map((input, idx) => (
               <PracticeElementWrap
                  key={`practice-element-${idx}`}
                  isVisible={idx === curInputIndex}
               >
                  <algebra-practice
                     class={`practice-element`}
                     latex={input}
                     hints="on"
                     drag-eq="fast"
                     style={{
                        height: "inherit",
                        width: "inherit",
                        border: "1px solid silver",
                     }}
                  ></algebra-practice>
               </PracticeElementWrap>
            ))}
         </PracticeContainer>
      </PracticeSlide>
   );
};

export default Slide2;
