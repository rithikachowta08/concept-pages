import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
import {
   GOOGLE_API_KEY,
   GOOGLE_CLIENT_ID,
   GOOGLE_SCOPE,
} from "utils/constants";
import { v4 as uuidv4 } from "uuid";

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
   const uploadImage = (access_token) =>
      openPicker({
         // TODO: Need to fetch these from ENV
         clientId: GOOGLE_CLIENT_ID,
         developerKey: GOOGLE_API_KEY,
         viewId: "FOLDERS",
         token: access_token,
         showUploadFolders: true,
         showUploadView: true,
         supportDrives: true,
         viewMimeTypes: "image/png,image/jpeg,image/jpg",
         callbackFunction: (data) => {
            if (data.action === "picked") {
               setUploading(true);
               const fileId = data.docs[0].id;
               console.log("fileId", data);
               // Download the actual file through Google Drive API
               fetch(
                  "https://www.googleapis.com/drive/v3/files/" +
                     fileId +
                     "?alt=media",
                  {
                     headers: {
                        Authorization: "Bearer " + access_token,
                     },
                  }
               )
                  .then((response) => response.blob())
                  .then((blob) => {
                     // Upload the downloaded file to S3 bucket
                     const fileName = `image-${uuidv4()}`;
                     const formData = new FormData();
                     formData.append("file", blob, fileName);
                     formData.append("mimeType", data.docs[0].mimeType);
                     fetch(
                        "http://math-api-stg.byjusweb.com/api/upload-image",
                        {
                           method: "POST",
                           body: formData,
                        }
                     )
                        .then((res) => res.json())
                        .then(() => {
                           setUploading(false);
                           setImageUrl(
                              `https://search-mathstatic.byjusweb.com/${fileName}`
                           );
                           onChange(
                              `https://search-mathstatic.byjusweb.com/${fileName}`
                           );
                        });
                  })
                  .catch((err) => {
                     console.error(
                        "Error in uploading Google Drive File:",
                        err
                     );
                     setUploading(false);
                  });
            }
         },
      });

   const handleOpenPicker = () => {
      // Open Google Drive Picker to support upload from System or Drive
      const tokenFromLocal = JSON.parse(localStorage.getItem("access_token"));
      if (
         window.google &&
         (!tokenFromLocal || new Date(tokenFromLocal.expiry) <= Date.now())
      ) {
         const client = window.google.accounts.oauth2.initTokenClient({
            client_id: GOOGLE_CLIENT_ID,
            scope: GOOGLE_SCOPE,
            callback: (response) => {
               uploadImage(response.access_token);
               localStorage.setItem(
                  "access_token",
                  JSON.stringify({
                     token: response.access_token,
                     expiry: new Date(Date.now() + 59 * 60000),
                  })
               );
            },
         });
         client.requestAccessToken();
      } else if (tokenFromLocal.token) {
         uploadImage(tokenFromLocal.token);
      }
   };
   return (
      <div>
         {name === "thumbnail" && <FieldName>Thumbnail</FieldName>}
         {imageUrl ? (
            <Image src={imageUrl} width={100} height={100} alt="alt"></Image>
         ) : (
            <StyledButton onClick={handleOpenPicker} uploading={uploading}>
               {uploading ? "Uploading..." : "Upload"}
            </StyledButton>
         )}
      </div>
   );
};

export default ImageUploader;
