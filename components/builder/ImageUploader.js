import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
import { googleDriveUploader } from "utils/services";

const StyledButton = styled.button`
   background-color: ${colors.WHITE};
   color: ${colors.DARK_LAVENDER};
   padding: 10px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   border: 1px solid ${colors.DARK_LAVENDER};
   width: fit-content;
   align-self: center;
   cursor: pointer;
   opacity: ${(props) => (props.uploading ? 0.5 : 1)};
   pointer-events: ${(props) => (props.uploading ? "none" : "unset")};
`;

const FieldName = styled.div`
   margin-bottom: 10px;
   color: ${colors.DARK_GREY};
`;

const ImageUploader = ({ value, onChange, name }) => {
   const [openPicker] = useDrivePicker();
   const [imageUrl, setImageUrl] = useState(value);
   const [uploading, setUploading] = useState(false);

   return (
      <div>
         {name === "thumbnail" && <FieldName>Thumbnail</FieldName>}
         {imageUrl ? (
            <Image src={imageUrl} width={100} height={100} alt="alt"></Image>
         ) : (
            <StyledButton
               onClick={() =>
                  googleDriveUploader(
                     openPicker,
                     setUploading,
                     setImageUrl,
                     onChange
                  )
               }
               uploading={uploading}
            >
               {uploading ? "Uploading..." : "Upload"}
            </StyledButton>
         )}
      </div>
   );
};

export default ImageUploader;
