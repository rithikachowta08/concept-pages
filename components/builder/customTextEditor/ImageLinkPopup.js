import { Flex } from "components/StyledElements";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "utils/colors";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 400px;
   height: 200px;
   border: 1px solid black;
   background-color: white;
   padding: 16px;
   border-radius: 16px;
   box-shadow: 0 0 10px grey;
`;

const Input = styled.input`
   background-color: white;
   color: black;
   border: 1px solid grey;
   border-radius: 4px;
   padding: 4px;
   height: 36px;
   outline: none;
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

const ImageLinkPopup = ({ onCancel, onSubmit, value }) => {
   const [inputValue, setInputValue] = useState(value.url || "");

   const submitHandler = () => {
      onSubmit({ ...value, url: inputValue });
   };

   return (
      <Wrapper>
         <Flex direction="column">
            <label>Enter Image link: </label>
            <Input
               value={inputValue}
               onChange={({ target }) => setInputValue(target.value)}
            />
         </Flex>
         <Flex justifyContent="end">
            <StyledButton
               className="border-[1px] mr-4 border-black"
               onClick={onCancel}
            >
               Close
            </StyledButton>
            <StyledButton
               className="border-[1px] mr-4 border-black"
               onClick={submitHandler}
            >
               Submit
            </StyledButton>
         </Flex>
      </Wrapper>
   );
};

export default ImageLinkPopup;
