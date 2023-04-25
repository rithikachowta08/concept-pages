import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Page = dynamic(() => import("components/dynamic-page/Page"));
const spinner = "assets/spinner.gif";

const Spinner = styled.img`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

const Text = styled.div`
   color: black;
   position: absolute;
   font-size: 3rem;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

const DynamicPage = () => {
   const router = useRouter();
   const isPreview = router.query.preview === "true";
   const [json, setJson] = useState(null);
   const [loading, setLoading] = useState(!isPreview);
   const [error, setError] = useState(false);
   useEffect(() => {
      if (router.query["dynamic-page"]) {
         fetch(
            `https://math-api-stg.byjusweb.com/api/page?page_url=${router.query["dynamic-page"]}`,
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
               if (res.data.isDraft) {
                  setError(true);
               } else {
                  setJson(res.data);
               }
            })
            .catch((err) => {
               console.error(err);
               setLoading(false);
               setError(true);
            });
      }
   }, [router]);
   if (isPreview) {
      const json = {
         ...JSON.parse(localStorage.getItem("pageDetails")),
         slides: JSON.parse(localStorage.getItem("slides")),
      };
      return <Page json={json}></Page>;
   }
   if (error || (!loading && !json)) {
      return <Text>Something went wrong!</Text>;
   }
   return loading ? (
      <div>
         <Spinner src={spinner} alt="Loading" height={100} width={100} />
      </div>
   ) : (
      <Page json={json}></Page>
   );
};

export default DynamicPage;
