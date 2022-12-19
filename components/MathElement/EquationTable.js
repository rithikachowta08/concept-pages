import React from 'react'
import styled from 'styled-components'
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
const EquationParentDiv=styled.div`
font-family:Nunito;`
const LHSLatex=styled.td`
text-align:right;
vertical-align:top;`
const EqualsTo=styled.td`
vertical-align:top;`
const RHSLatex=styled.td`
vertical-align:top;
`
const RHSHint=styled.td`
vertical-align:top;
text-align:right;
white-space:nowrap;

`
const Texp=styled.span`
`
function EquationTable(props) {
    if(!props.equationLatex){
        return <></>
    }
let eqLatex=props.equationLatex;
  return (
    <EquationParentDiv>
        <table>
{eqLatex.map((latex,index)=>{
    return( <tr>
        <LHSLatex>{latex.lhsLatex.value.map((val,i)=>{
            if(latex.lhsLatex.type=="latex"){
                return <TeX settings={{trust:true,strict:false}}>{val}</TeX>
            }
            else{
            return (<Texp>{val}</Texp>)
            }
        })}</LHSLatex>
        <EqualsTo><TeX>{'='}</TeX></EqualsTo>
        <RHSLatex><>{latex.rhsLatex.value.map((val,i)=>{
            return (
                <TeX settings={{trust:true,strict:false}}>{val}</TeX>
            )
        })}</></RHSLatex>
        <RHSHint>{latex.rhsHint.type=="latex"?<TeX settings={{trust:true,strict:false}}>{latex.rhsHint.value}</TeX>:<span>{latex.rhsHint.value}</span>}</RHSHint>
    </tr>
    )
})}
        </table>
    </EquationParentDiv>
  )
}

export default EquationTable