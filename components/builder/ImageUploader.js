import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const uploadFileToS3 = async (fileBlob, fileName) => {
   const bucketName = "byju-prd-qna-search-math-ui-store-us-east-1";
   const region = "us-east-1";
   const s3Client = new S3Client({
      region,
   });

   const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileBlob,
   };

   const command = new PutObjectCommand(uploadParams);

   try {
      const response = await s3Client.send(command);
      console.log("Successfully uploaded file to S3", response);
   } catch (error) {
      console.error("Error uploading file to S3", error);
   }
};

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
   // uploadFileToS3("Hello S3", "new-file");
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
            if (data.action === "cancel") {
               console.log("User clicked cancel/close button");
            }
            if (data.action === "picked") {
               // TODO: Need to fetch accessToken from API
               const accessToken =
                  "ya29.a0Ael9sCOTbHlAt9--r3KijDqQRBZg05Bz-3ZmzF-4diGqBAWYPxOVcTLPPBeXRMwsumPqAXv9of0LO8eZgrIRxC85WoUAlhMKy2X_nQciHUKeUOrl-H2zyW5AbvZhFXVG_GygERLluwspoJ_0ayTGluEeRGwJaCgYKAYESARASFQF4udJhLhDkHYzRyYh9tNiBBeR8Ow0163";
               const fileId = data.docs[0].id;
               console.log(data);
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
                  .then(function (response) {
                     if (response.status === 200) {
                        return response.blob();
                     } else {
                        console.log(
                           "Error downloading from Google Drive: " +
                              response.statusText
                        );
                     }
                  })
                  .then(function (blob) {
                     // Upload the downloaded file to S3 bucket
                     const fileName = `image-${uuidv4()}`;
                     const formData = new FormData();
                     formData.append("file", blob, fileName);
                     fetch(
                        "https://math-api-stg.byjusweb.com/api/upload-image",
                        {
                           method: "POST",
                           body: formData,
                        }
                     )
                        .then((res) => res.json())
                        .then((res) => console.log(res))
                        .catch((err) => console.error(err));
                     // setImageUrl(file name from AWS)
                     // onChange(file name from AWS)
                  })
                  .catch((err) =>
                     console.error(
                        "Error in downloading Google Drive File:",
                        err
                     )
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
