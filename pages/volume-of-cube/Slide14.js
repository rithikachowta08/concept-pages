import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState,useEffect,useRef } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide14/1.svg";
const cube_f = "assets/volume-of-cube/slide14/2.svg";
const cube_s = "assets/volume-of-cube/slide14/3.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import EquationTable from "components/MathElement/EquationTable";

const Slide14 = ({ downIcon }) => {
   const trans=[]
   let EquationLatex0=[
      {
         lhsLatex:{
           value: [`Here, \\htmlClass{textSpanBg hoverTransition}{ \\text{length of diagonal(f)}}`],
           type:'latex' 
         },
         rhsLatex:{
            value:["\\sqrt{2} \\times \\htmlClass{textSpanBg hoverTransition}{\\text{length of sides}(s)}"],
            type:'latex'
         },
         rhsHint:
         {
          value:[''],
          type:'text'
         }
      }
   
      ]
            let latexEquationContainer=[]
      latexEquationContainer.push(EquationLatex0)
      let latexEquationCounter=0;
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const addTransition=()=>{
      if(process.browser){
      console.log("add transition")
      let transitionElements=Array.from(document.getElementsByClassName('hoverTransition'))
      console.log("transitionElements",transitionElements)
      transitionElements.forEach(element=>{
         console.log("element",element)
         element.addEventListener('click',(e)=>{
            alert("element clicked")
         })
      })
   }
   }
   useEffect(()=>{
      console.log("slide 14")
      let transitionElements=Array.from(document.getElementsByClassName('hoverTransition'))
      console.log("transitionElementss",transitionElements)
      transitionElements.forEach(element=>{
         console.log("element",element)
         element.addEventListener('click',(e)=>{
            alert("ee")
         })
      })
      
   },[])
   let latex = [];
   latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
   latex.push(`= \\sqrt{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Diagonal of a Face"
         secondaryTitle="Volume of a Cube using Diagonal"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_f, cube_s]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            <TextLine>
               {" "}
               Given the{" "}
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
               >
                  diagonal length
               </TextSpanBg>{" "}
               of a face of a cube:
            </TextLine>
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            Volume of a cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            cubic unit
         </Pill>
         <Paragraph>
         <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>
         
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide14;
