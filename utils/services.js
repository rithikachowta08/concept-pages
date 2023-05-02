import {
   GOOGLE_API_KEY,
   GOOGLE_CLIENT_ID,
   GOOGLE_SCOPE,
} from "utils/constants";
import { v4 as uuidv4 } from "uuid";

const uploadImage = (
   access_token,
   openPicker,
   setUploading,
   setImageUrl,
   onChange
) =>
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
                  "?alt=media&supportsAllDrives=true",
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
                  fetch("https://math-api-stg.byjusweb.com/api/upload-image", {
                     method: "POST",
                     body: formData,
                  })
                     .then((res) => res.json())
                     .then(() => {
                        setUploading(false);
                        setImageUrl(
                           `https://search-mathstatic.byjusweb.com/${fileName}`
                        );
                        onChange(
                           `https://search-mathstatic.byjusweb.com/${fileName}`
                        );
                     })
                     .catch((err) => {
                        console.error(
                           "Error in uploading Google Drive File:",
                           err
                        );
                        setUploading(false);
                     });
               })
               .catch((err) => {
                  console.error("Error in uploading Google Drive File:", err);
                  setUploading(false);
               });
         }
      },
   });

export const googleDriveUploader = (
   openPicker,
   setUploading,
   setImageUrl,
   onChange
) => {
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
            uploadImage(
               response.access_token,
               openPicker,
               setUploading,
               setImageUrl,
               onChange
            );
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
      uploadImage(
         tokenFromLocal.token,
         openPicker,
         setUploading,
         setImageUrl,
         onChange
      );
   }
};
