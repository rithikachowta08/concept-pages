import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const MultiLhsEquationContainer = dynamic(() => import("components/MathElement/MultiLhsEquationContainer"));
import { TextLine } from "components/text";
// import { Applet00801Ge } from "@assessed/byjus-us-math-applets/008_01_GE";

const Slide5 = ({ downIcon, currentPageIdx }) => {
  let EquationLatex = [
    {
      lhsLatex: [`\\text{Volume}`, "", ""],
      rhsLatex: [
        {
          eqLatex: "A \\times h",
          hint: "",
        },
        {
          eqLatex: "\\pi \\times r^2 \\times h",
          hint: "",
        },
        {
          eqLatex: "\\pi \\times r^2 \\times h\\ \\text{cubic units}",
          hint: "",
        },
      ],
    },
  ];
  return null;
};

export default Slide5;
