import { Paragraph } from 'components/text'
import React from 'react'

export function LHSContainer(props) {
  return (
    <Paragraph marginTop="1rem" marginBottom="1rem">{props.children}</Paragraph>

    
  )
}

export function RHSContainer(props){
    return (
        <div>{props.children}</div>
    
        
      )  
}
