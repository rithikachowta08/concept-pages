import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
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
`;

const ImageUploader = ({ value, onChange }) => {
   const [openPicker, authResponse] = useDrivePicker();
   const [imageUrl, setImageUrl] = useState(value);
   const handleOpenPicker = () => {
      // Open Google Drive Picker to support upload from System or Drive
      openPicker({
         // TODO: Need to fetch these from ENV
         clientId:
            "1011414005032-htd2md81a41al0sr0rv2sdtdc22vslf8.apps.googleusercontent.com",
         developerKey: "AIzaSyAyJRTmrs5h3wga4dGNzbDKXmXt-bQehwc",
         viewId: "FOLDERS",
         //  token: "ya29.a0Ael9sCMaDbFTXRdHMQAU_SEa1mR90UtCbvAPkJfHkwPqSTeUBPAFHEzm10YqO4cMt8-vge83F7ibuS6NyfOqau5W_WyWk5GmG2RGTKPMerILxr28MZBadRCNBpquOLl5IrHsyG27IY6ig14Hrr1boTAQbSU0aCgYKATMSARASFQF4udJhoz9Lb7-PyEQJY3t4dGkT4Q0163",
         showUploadFolders: true,
         showUploadView: true,
         supportDrives: true,
         viewMimeTypes: "image/png,image/jpeg,image/jpg",
         callbackFunction: (data) => {
            if (data.action === "picked") {
               // TODO: Need to fetch accessToken from API
               const accessToken =
                  "ya29.a0Ael9sCP464Tr0pfjzTcCSskIuKxYXmNOjYTBydqNd7Jdr1-gPcPCl40PEACnri0xez3g8QeYbk8OVU5CTDB2-T4l6JTGjz8igNSpN6OvaeIVN1R-pE6DmDMqvQ9DRXD3cp61ccWpfhPHd2IFL2-A-vAVGz-oaCgYKAVMSARASFQF4udJhgCd2WNAeeuDh9qlc-KJHAg0163";
               const fileId = data.docs[0].id;
               // Download the actual file through Google Drive API
               fetch(
                  "https://www.googleapis.com/drive/v3/files/" +
                     fileId +
                     "?alt=media",
                  {
                     headers: {
                        Authorization: "Bearer " + accessToken,
                     },
                  }
               )
                  .then((response) => response.blob())
                  .then((blob) => {
                     // Upload the downloaded file to S3 bucket
                     const fileName = `image-${uuidv4()}`;
                     const formData = new FormData();
                     formData.append("file", blob, fileName);
                     fetch(
                        "http://math-api-stg.byjusweb.com/api/upload-image",
                        {
                           method: "POST",
                           body: formData,
                        }
                     )
                        .then((res) => res.json())
                        .then(() => {
                           setImageUrl(
                              `https://search-mathstatic.byjusweb.com/${fileName}`
                           );
                           onChange(
                              `https://search-mathstatic.byjusweb.com/${fileName}`
                           );
                        });
                  })
                  .catch((err) =>
                     console.error("Error in uploading Google Drive File:", err)
                  );
            }
         },
      });
   };
   return imageUrl ? (
      <Image src={imageUrl} width={100} height={100} alt="alt"></Image>
   ) : (
      <StyledButton onClick={handleOpenPicker}>Upload</StyledButton>
   );
};

export default ImageUploader;
