import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import SlateTextEditor from "./SlateTextEditor";
import { SLATE_CONTENT_TYPES } from "utils/constants";

const Wrapper = styled.div`
   width: 400px;
   background-color: white;
   padding: 16px;
   border-radius: 16px;
   box-shadow: 0 0 10px grey;
   color: black;
`;

const Input = styled.input`
   background-color: white;
   color: black;
   border: 1px solid #bbb;
   border-radius: 4px;
   padding: 16px;
   outline: none;
   margin-bottom: 8px;
   font-family: inherit;
`;

const Label = styled.label`
   font-size: 16px;
   margin-top: 4px;
   margin-bottom: 8px;
`;

const StyledButton = styled.button`
   background-color: ${colors.DARK_LAVENDER};
   color: white;
   height: 36px;
   padding: 10px 16px;
   margin-left: 8px;
   border-radius: 4px;
   text-transform: uppercase;
   box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
   border: none;
   width: fit-content;
   align-self: center;
   cursor: pointer;

   &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
   }
`;

const ModalPopup = ({ value, onCancel, onSubmit }) => {
   const [title, setTitle] = useState(value.modalTitle || "");
   const [content, setContent] = useState(value.modalContent || "");

   const submitHandler = () => {
      onSubmit({ ...value, modalTitle: title, modalContent: content });
   };

   return (
      <Wrapper>
         <Flex direction="column">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
         </Flex>
         <Flex direction="column">
            <Label>Content</Label>
            <SlateTextEditor
               onValueChange={(value) => {
                  setContent(value);
               }}
               initialValue={content}
               allowedInputs={[SLATE_CONTENT_TYPES.MATH_EXPRESSION]}
            />
         </Flex>
         <Flex justifyContent="end" marginTop={"8px"}>
            <StyledButton onClick={onCancel}>Close</StyledButton>
            <StyledButton onClick={submitHandler}>Submit</StyledButton>
         </Flex>
      </Wrapper>
   );
};

ModalPopup.propTypes = {
   value: PropTypes.shape({
      modalTitle: PropTypes.string,
      modalContent: PropTypes.string,
   }),
   onCancel: PropTypes.func,
   onSubmit: PropTypes.func,
};

export default ModalPopup;
