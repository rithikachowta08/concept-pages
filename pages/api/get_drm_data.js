import {
   tllms_mediaPackager_clientId,
   tllms_mediaPackager_clientKey,
   tllms_mediaPackager_endPoint,
} from "utils/constants";

export default async function getDrmData(req, res) {
   try {
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
      console.log("result", result);
      const resultData = await result.json();
      console.log("resultData", resultData);
      res.json(resultData);
   } catch (err) {
      res.json({ msg: "Errored out", error: err });
   }
}
