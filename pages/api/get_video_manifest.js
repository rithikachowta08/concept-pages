export default async function get_video_manifest_api(req, res) {
   const parameters = JSON.parse(req.body);
   const result = await fetch(parameters.url, {
      method: "GET",
   });
   const resultData = await result.json();
   res.json(resultData);
}
