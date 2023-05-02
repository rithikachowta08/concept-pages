import { Flex } from "components/StyledElements";
import { useState } from "react";
import useDrivePicker from "react-google-drive-picker/dist";
import styled from "styled-components";
import { colors } from "utils/colors";
import { googleDriveUploader } from "utils/services";
import Image from "next/image";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 600px;
   min-height: 200px;
   background-color: white;
   padding: 16px;
   border-radius: 16px;
   box-shadow: 0 0 10px grey;
`;

const Label = styled.label`
   font-size: 16px;
   margin-top: 4px;
   margin-bottom: 8px;
   color: black;
`;

const Input = styled.input`
   background-color: white;
   color: black;
   border: 1px solid grey;
   border-radius: 8px;
   padding: 4px;
   height: 36px;
   outline: none;
   margin-bottom: 8px;
   font-family: inherit;
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

const ImageWrapper = styled.div`
   position: relative;
   padding: 8px;
   height: 300px;
   width: auto;
   box-shadow: 0 0 12px 2px #bbb;
   border-radius: 8px;
   margin-bottom: 20px;
`;

const CrossIcon = styled.img`
   position: absolute;
   top: 8px;
   right: 8px;
   width: 20px;
   aspect-ratio: 1/1;
   z-index: 10;
   fill: black;
   cursor: pointer;
`;

export const ImageContainer = ({ imageUrl, altText, onDelete }) => {
   return (
      <ImageWrapper>
         <CrossIcon src="assets/cancel_icon.svg" onClick={onDelete} />
         <Image
            src={imageUrl}
            alt={altText}
            objectFit={"contain"}
            layout="fill"
         />
      </ImageWrapper>
   );
};

const ImageLinkPopup = ({ onCancel, onSubmit, value }) => {
   const [openPicker] = useDrivePicker();
   const [altTextValue, setAltTextValue] = useState(value.altText || "");
   const [imageUrl, setImageUrl] = useState(value.url || "");
   const [uploading, setUploading] = useState(false);

   const submitHandler = () => {
      onSubmit({ ...value, url: imageUrl, altText: altTextValue });
   };

   return (
      <Wrapper>
         <Flex direction="column">
            {imageUrl && !uploading && (
               <ImageContainer
                  imageUrl={imageUrl}
                  altText={altTextValue}
                  onDelete={() => setImageUrl("")}
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
         <Flex direction="column">
            <Label>Enter alt text for the image: </Label>
            <Input
               value={altTextValue}
               onChange={({ target }) => setAltTextValue(target.value)}
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
               loading={uploading}
            >
               Submit
            </StyledButton>
         </Flex>
      </Wrapper>
   );
};

export default ImageLinkPopup;
