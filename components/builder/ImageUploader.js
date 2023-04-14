import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
import { v4 as uuidv4 } from "uuid";

const bucketName = "byju-prd-qna-search-math-ui-store-us-east-1";
const region = "us-east-1";

const uploadFileREST = (file) => {
   const url = `https://${bucketName}.s3.${region}.amazonaws.com/`;
   const formData = new FormData();
   formData.append("key", file.name);
   formData.append("Content-Type", file.type);
   formData.append("acl", "public-read-write");
   formData.append("bucket", bucketName);
   formData.append("file", file);

   return fetch(url, {
      method: "POST",
      body: formData,
   });
};

async function uploadFileToS3(bucketName, objectKey, filePath) {
   const s3Client = new S3Client({
      region: "us-east-1", // replace with your desired region
      credentials: {
         // use the default credential provider that looks for an instance profile
         async getPromise() {
            return await new Promise((resolve, reject) => {
               // the AWS SDK will automatically use the instance profile to authenticate your requests
               resolve();
            });
         },
      },
   });

   const fileStream = fs.createReadStream(filePath);

   const uploadParams = {
      Bucket: bucketName,
      Key: objectKey,
      Body: fileStream,
      ACL: "public-read", // Replace with your desired ACL
      ContentType: "application/octet-stream", // Replace with your desired content type
   };

   const command = new PutObjectCommand(uploadParams);

   try {
      const response = await s3Client.send(command);
      console.log("Successfully uploaded file to S3", response);
   } catch (error) {
      console.error("Error uploading file to S3", error);
   }

   // the rest of the code is the same as in the previous examples
}

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
   const file = new File(["foo"], "foo-new.txt", {
      type: "text/plain",
   });
   uploadFileToS3(bucketName, "new-file", file);
   const handleOpenPicker = () => {
      openPicker({
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
               const accessToken =
                  "ya29.a0Ael9sCMaDbFTXRdHMQAU_SEa1mR90UtCbvAPkJfHkwPqSTeUBPAFHEzm10YqO4cMt8-vge83F7ibuS6NyfOqau5W_WyWk5GmG2RGTKPMerILxr28MZBadRCNBpquOLl5IrHsyG27IY6ig14Hrr1boTAQbSU0aCgYKATMSARASFQF4udJhoz9Lb7-PyEQJY3t4dGkT4Q0163";
               const fileId = data.docs[0].id;
               console.log(data);
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
                     // Upload to s3
                     const fileName = `image-${uuidv4()}`;
                     const file = new File([blob], fileName);
                     uploadFile(file);
                  });
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
