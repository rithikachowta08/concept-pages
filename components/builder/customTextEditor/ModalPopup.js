import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import SlateTextEditor from "./SlateTextEditor";
import { SLATE_CONTENT_TYPES } from "utils/constants";
import { ImageContainer } from "./ImageLinkPopup";
import { googleDriveUploader } from "utils/services";
import useDrivePicker from "react-google-drive-picker/dist";

const Wrapper = styled.div`
   width: 600px;
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
   opacity: ${(props) => (props.loading ? 0.5 : 1)};
   pointer-events: ${(props) => (props.loading ? "none" : "unset")};

   &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
   }
`;

const ModalPopup = ({ data, onCancel, onSubmit }) => {
   const [title, setTitle] = useState(data.modalTitle || "");
   const [content, setContent] = useState(
      data.modalContent.body
         ? JSON.parse(JSON.stringify(data.modalContent.body))
         : ""
   );
   const [openPicker] = useDrivePicker();
   const [altTextValue, setAltTextValue] = useState(
      data.modalContent.image?.altText || ""
   );
   const [imageUrl, setImageUrl] = useState(data.modalContent.image?.url || "");
   const [uploading, setUploading] = useState(false);

   const submitHandler = () => {
      const modalData = {
         modalTitle: title,
         modalContent: {
            body: content,
         },
      };

      if (imageUrl) {
         modalData.modalContent.image = {
            url: imageUrl,
            altText: altTextValue,
         };
      }
      console.log(modalData);
      onSubmit(modalData);
   };

   const imageDeleteHandler = () => {
      setImageUrl("");
      setAltTextValue("");
   };

   return (
      <Wrapper>
         <Flex direction="column" marginBottom="8px">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
         </Flex>
         <Flex direction="column" marginBottom="8px">
            <Label>Content</Label>
            <SlateTextEditor
               onValueChange={(value) => {
                  setContent(value);
               }}
               initialValue={content}
               allowedInputs={[SLATE_CONTENT_TYPES.MATH_EXPRESSION]}
            />
         </Flex>
         <Flex direction="column" marginBottom="8px">
            <Label>Image</Label>
            {imageUrl && !uploading && (
               <ImageContainer
                  imageUrl={imageUrl}
                  altText={altTextValue}
                  onDelete={imageDeleteHandler}
               />
            )}
            <StyledButton
               onClick={() =>
                  googleDriveUploader(
                     openPicker,
                     setUploading,
                     setImageUrl,
                     (value) => {
                        console.log("drive returned on change", value);
                        setImageUrl(value);
                     }
                  )
               }
               loading={uploading}
            >
               {uploading
                  ? "Uploading..."
                  : imageUrl
                  ? "Change image"
                  : "Upload image"}
            </StyledButton>
         </Flex>
         {imageUrl && (
            <Flex direction="column" marginBottom="8px">
               <Label>Image alt text</Label>
               <Input
                  value={altTextValue}
                  onChange={(e) => setAltTextValue(e.target.value)}
               />
            </Flex>
         )}
         <Flex justifyContent="end" marginTop={"8px"}>
            <StyledButton onClick={onCancel}>Close</StyledButton>
            <StyledButton onClick={submitHandler}>Submit</StyledButton>
         </Flex>
      </Wrapper>
   );
};

ModalPopup.propTypes = {
   data: PropTypes.shape({
      modalTitle: PropTypes.string,
      modalContent: PropTypes.any,
   }),
   onCancel: PropTypes.func,
   onSubmit: PropTypes.func,
};

export default ModalPopup;
