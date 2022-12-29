import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const MathElement = dynamic(() => import("components/MathElement"));
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const Pill = dynamic(() => import("components/Pill"));

const Slide7 = ({ downIcon }) => {
  let latex = [];
  latex.push(`d\\scriptscriptstyle 1`);
  latex.push(`\\dfrac{d\\scriptscriptstyle 2}{2}`);
  latex.push(
    `= \\dfrac{1}{2}({d\\scriptscriptstyle 1} \\times {d\\scriptscriptstyle 2})`
  );
  let mathjaxCounter = 0;
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: ["Volume of Cube"],
        type: "text",
      },
      rhsLatex: {
        value: ["Area of Rectangle AO,O,,B"],
        type: "text",
      },
      // ﹐﹐
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: [""],
        type: "text",
      },
      rhsLatex: {
        value: [
          "{d\\scriptscriptstyle 1} \\times \\dfrac{{d\\scriptscriptstyle 2}}{2}",
        ],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
  ];
  let latexEquationContainer = [];
  latexEquationContainer.push(EquationLatex0);
  let latexEquationCounter = 0;
  return (
    <TextAndAppletSlide
      secondaryTitle="Area of a Rhombus"
      title="Derivation"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>
        The diagonals of a rhombus bisect each other perpendicularly.
      </Paragraph>
      <Paragraph>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <div>
        <Paragraph>
          Here, the length of the rectangle is{" "}
          <MathElement htmlString={latex[mathjaxCounter++]} /> and its width is{" "}
          <MathElement htmlString={latex[mathjaxCounter++]} />.
        </Paragraph>
      </div>
      <Pill>
        Area of the rhombus <MathElement htmlString={latex[mathjaxCounter++]} />
      </Pill>
    </TextAndAppletSlide>
  );
};

export default Slide7;
