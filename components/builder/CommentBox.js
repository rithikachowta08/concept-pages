import React, { useState } from "react";
import { colors } from "utils/colors";
import { Flex } from "components/StyledElements";
import styled from "styled-components";

const StyledTextBox = styled.textarea`
   background: ${colors.WHITE};
   color: ${colors.BLACK};
   flex: 1;
`;

const StyledButton = styled.button`
   background-color: ${colors.WHITE};
   color: ${colors.DARK_LAVENDER};
   padding: 6px 12px;
   border-radius: 2px;
   text-transform: uppercase;
   border: 1px solid ${colors.DARK_LAVENDER};
   width: fit-content;
   align-self: center;
   cursor: pointer;
`;

const CommentBox = ({ value, onChange }) => {
   console.log(value);
   const [input, setInput] = useState(value);
   const onTextChange = (e) => {
      setInput(e.target.value);
   };

   const postComment = () => {
      onChange(input);
      onChange(Date.now(), null, "root_0_timestamp");
   };

   return (
      <Flex direction={value ? "column" : "row"} gap="10px">
         {value ? (
            <>
               <div>{value.text}</div>
            </>
         ) : (
            <>
               <StyledTextBox
                  placeholder="Type your comments..."
                  onChange={onTextChange}
                  value={input}
               ></StyledTextBox>
               <StyledButton onClick={postComment}>Comment</StyledButton>
            </>
         )}
      </Flex>
   );
};

export const TimeStamp = ({ value }) => {
   console.log(value);
   return value ? <div>{value}</div> : null;
};

export default CommentBox;
