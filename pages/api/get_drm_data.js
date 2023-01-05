import {
   tllms_mediaPackager_clientId,
   tllms_mediaPackager_clientKey,
   tllms_mediaPackager_endPoint,
} from "utils/constants";

export default async function getDrmData(req, res) {
   const jwt = require("jsonwebtoken");
   var tllms_mediaPackager_token = jwt.sign(
      {
         data: "foobar",
      },
      tllms_mediaPackager_clientKey,
      { expiresIn: "60s" }
   );
   const result = await fetch(
      tllms_mediaPackager_endPoint + "/api/v1/packager/drm_configs",
      {
         method: "GET",
         headers: {
            X_mpkg_api_token: tllms_mediaPackager_token,
            X_mpkg_client_id: tllms_mediaPackager_clientId,
         },
      }
   );
   const resultData = await result.json();
   res.json(resultData);
}
