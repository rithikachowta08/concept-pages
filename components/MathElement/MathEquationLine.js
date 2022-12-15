import { Paragraph } from 'components/text'
import React from 'react'

function MathEquationLine(props) {
  return (
    <Paragraph color={props.color} marginTop="10px" marginBottom="0rem">{props.children}</Paragraph>
  )
}

export default MathEquationLine