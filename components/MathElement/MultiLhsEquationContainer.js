
import MathElement from 'components/MathElement'
import React, { Children } from 'react'
import styled from 'styled-components'
// import RHSEqLine from './RHSEqLine'
import { Flex } from 'components/StyledElements'
import MathLine from './MathLine'
import { colors } from "utils/colors";

// import LHSEqContainer from './LHSEqContainer'

// const LHSEqContainer=styled.div`
// flex-grow:0;
// display:flex;
// flex-direction:column;
// align-items:flex-end;`
const RHSEqContainer=styled.div`
flex-grow:1;
display:flex;
flex-direction:column;`

const RHSHint=styled.div`
`

const LHSEqContainer=styled.div`
flex-grow:0;
display:flex;
flex-direction:column;
align-items:flex-end;`
const RhsLine=styled.div`
flex-grow:1;
display:flex;
flex-direction:row;
justify-content:space-between`

function MultiLhsEquationContainer(props) {
if(!props.equationLatex){
    return <></>
}
else{
    let lhsLatex=props.equationLatex.lhsLatex;
    let rhsLatex=props.equationLatex.rhsLatex;
  return (
    <Flex lineHeight={props.lineHeight?props.lineHeight:"1.7"}>
       <LHSEqContainer>
           {lhsLatex.map((lhs)=>{
               return (<MathLine color={props.color?props.color:colors.BLACK} marginTop="0px" marginBottom="0rem"><MathElement htmlString={lhs}></MathElement></MathLine>)
           })}
       </LHSEqContainer>
       <RHSEqContainer>
           {rhsLatex.map((rhs)=>{
               return (
                   <Flex>
                       {/* equals to(=) symbol */}
                       <div><MathLine color={props.color?props.color:colors.BLACK} margin="0px 4px 0px 4px"  marginRight="4px"><MathElement htmlString={'='}></MathElement></MathLine></div>
                       <RhsLine>
                       <MathLine color={props.color?props.color:colors.BLACK}><MathElement htmlString={rhs.eqLatex}></MathElement></MathLine>
                       <MathLine color={props.color?props.color:colors.BLACK}><RHSHint>{rhs.hint}</RHSHint></MathLine>
                   </RhsLine>
                   </Flex>
               )
           })}
       </RHSEqContainer>
    </Flex>
  )
}
}

export default MultiLhsEquationContainer