import React from "react";
import styled from "styled-components";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

const EquationParentDiv = styled.div`
   font-family: "Nunito-Medium";
`;

const StyledTable = styled.table`
   border-spacing: 0 10px;
   @media (min-width: 200px) and (max-width: 820px) {
      border-spacing: 0 5px;
   }
`;
const LHSLatex = styled.td`
   text-align: right;
   vertical-align: ${(props) => props.align};
   line-height: ${(props) => props.lineHeight || "inherit"};
`;
const EqualsTo = styled.td`
   vertical-align: ${(props) => props.align};
   line-height: ${(props) => props.lineHeight || "inherit"};
`;
const RHSLatex = styled.td`
   vertical-align: ${(props) => props.align};
   line-height: ${(props) => props.lineHeight || "inherit"};
`;
const RHSHint = styled.td`
   vertical-align: ${(props) => props.align};
   text-align: right;
   white-space: nowrap;
`;
const Span = styled.span``;

const EquationTable = ({
   equationLatex: eqLatex,
   align = "top",
   lineHeight,
}) => {
   if (!eqLatex) {
      return <></>;
   }
   return (
      <EquationParentDiv>
         <StyledTable>
            {eqLatex.map((latex, index) => {
               return (
                  <tr key={index}>
                     <LHSLatex align={align} lineHeight={lineHeight}>
                        {latex.lhsLatex.value.map((val, i) => {
                           if (latex.lhsLatex.type == "latex") {
                              return (
                                 <TeX
                                    key={i}
                                    settings={{ trust: true, strict: false }}
                                 >
                                    {val}
                                 </TeX>
                              );
                           } else {
                              return <Span key={i}>{val}</Span>;
                           }
                        })}
                     </LHSLatex>
                     <EqualsTo align={align} lineHeight={lineHeight}>
                        <TeX>{"="}</TeX>
                     </EqualsTo>
                     <RHSLatex align={align} lineHeight={lineHeight}>
                        {latex.rhsLatex.value.map((val, i) => {
                           if (latex.rhsLatex.type == "latex") {
                              return (
                                 <TeX
                                    key={i}
                                    settings={{ trust: true, strict: false }}
                                 >
                                    {val}
                                 </TeX>
                              );
                           } else {
                              return <Span key={i}>{val}</Span>;
                           }
                        })}
                     </RHSLatex>
                     {/* <RHSHint align={align}>{latex.rhsHint.type=="latex"?<TeX settings={{trust:true,strict:false}}>{latex.rhsHint.value}</TeX>:<span>{latex.rhsHint.value}</span>}</RHSHint> */}
                  </tr>
               );
            })}
         </StyledTable>
      </EquationParentDiv>
   );
};

export default EquationTable;
