import React, { Children } from 'react'
import styled from 'styled-components'
const EquationParent=styled.div`
display: flex;
flex-direction: ${(props) => props.direction || "row"};
width: ${(props) => props.width};
height: ${(props) => props.height};
gap: ${(props) => props.gap};
flex: ${(props) => props.flex};
padding: ${(props) => props.padding};
color: ${(props) => props.color};
background-color: ${(props) => props.bgColor};
border-radius: ${(props) => props.borderRadius};
position: ${(props) => props.position};
left: ${(props) => props.left};
bottom: ${(props) => props.bottom};
transform: ${(props) => props.transform};
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
align-self: ${(props) => props.alignSelf};
flex-flow: ${(props) => props.flexFlow};
cursor: ${(props) => props.cursor};
margin: ${(props) => props.margin};
margin-bottom: ${(props) => props.marginBottom};
margin-right: ${(props) => props.marginRight};
align-items:baseline;
`

function SingleLHSMathEquationContainer(props) {
  return (
    <EquationParent>
        {props.children}
    </EquationParent>
  )
}

export default SingleLHSMathEquationContainer