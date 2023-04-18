import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Page = dynamic(() => import("components/dynamic-page/Page"));

const DynamicPage = () => {
   const router = useRouter();
   const isPreview = router.query.preview === "true";
   const [json, setJson] = useState(null);
   const [loading, setLoading] = useState(!isPreview);
   const [error, setError] = useState(false);
   useEffect(() => {
      if (router.query.page_id) {
         fetch(
            `http://127.0.0.1:8000/api/page?page_id=${router.query.page_id}`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            }
         )
            .then((res) => res.json())
            .then((res) => {
               setLoading(false);
               setJson(res.data);
            })
            .catch((err) => {
               console.error(err);
               setLoading(false);
               setError(true);
            });
      }
   }, [router.query.page_id]);
   if (isPreview && router.query.data) {
      return <Page json={JSON.parse(router.query.data)}></Page>;
   }
   if (error || !json) {
      return <div>Something went wrong!</div>;
   }
   return loading ? <div>Loading...</div> : <Page json={json}></Page>;
};

export default DynamicPage;
