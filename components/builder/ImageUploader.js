import React, { useState } from "react";
import { colors } from "utils/colors";
import styled from "styled-components";
import Image from "next/image";
import useDrivePicker from "react-google-drive-picker";
import AWS from "aws-sdk";
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

function oauth2SignIn() {
   // Google's OAuth 2.0 endpoint for requesting an access token
   var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

   // Create element to open OAuth 2.0 endpoint in new window.
   var form = document.createElement("form");
   form.setAttribute("method", "GET"); // Send as a GET request.
   form.setAttribute("action", oauth2Endpoint);

   // Parameters to pass to OAuth 2.0 endpoint.
   var params = {
      client_id:
         "1011414005032-htd2md81a41al0sr0rv2sdtdc22vslf8.apps.googleusercontent.com",
      redirect_uri: "http://localhost:3000",
      scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      state: "try_sample_request",
      include_granted_scopes: "true",
      response_type: "token",
   };

   // Add form parameters as hidden input values.
   for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
   }

   // Add form to page and submit it to open the OAuth 2.0 endpoint.
   document.body.appendChild(form);
   form.submit();
}

const ImageUploader = ({ value, onChange }) => {
   const [openPicker, authResponse] = useDrivePicker();
   const [imageUrl, setImageUrl] = useState(value);
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
               oauth2SignIn();
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
