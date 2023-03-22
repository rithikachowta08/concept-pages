import dynamic from "next/dynamic";
const PracticeSlide = dynamic(() => import("components/slides/PracticeSlide"));

const s2_a = "assets/units-of-time/2_a.svg";

const Slide2 = ({ downIcon }) => {
   return (
      <PracticeSlide title="Solve the problem" downIcon={downIcon}>
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
