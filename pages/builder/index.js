import { useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import { toast } from "react-toastify";
// import jsonData from "components/dynamic-page/structure.json";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";
import { TOAST_COMMON_CONFIG } from "utils/constants";
const PreviewContainer = dynamic(() =>
   import("../../components/builder/PreviewContainer")
);
const Editor = dynamic(() => import("../../components/builder/Editor"));

const LinkText = styled.a`
   color: #3366bb;
   text-decoration: underline;
   cursor: pointer;
`;

const Builder = () => {
   const [pageDetails, setPageDetails] = useState({});
   const [slides, setSlides] = useState([]);
   const [tabIndex, setTabIndex] = useState(0);
   const [isCreatePageLoading, setIsCreatePageLoading] = useState(false);
   const [showToast, setShowToast] = useState(false);

   const onSlidesChange = (idx, data) => {
      const tempSlides = [...slides];
      tempSlides[idx] = data;
      setSlides(tempSlides);
   };

   const selectSlideForm = (e) => {
      setTabIndex(Number(e.currentTarget.id) + 1);
   };

   const addNewSlide = () => {
      setSlides([...slides, { template: "TEXT_AND_DIAGRAM" }]);
      setTabIndex(tabIndex + 1);
   };

   const deleteSlide = (idx) => {
      const tempSlides = [...slides];
      tempSlides.splice(idx, 1);
      setSlides(tempSlides);
      setTabIndex(idx - 1);
   };

   const onSubmit = (e) => {
      const fullJSON = {
         ...pageDetails,
         slides,
      };

      console.log(fullJSON);
      setIsCreatePageLoading(true);
      setShowToast(true);
      /*  Replicating delay in the response */
      // setTimeout(() => {
      //    setIsCreatePageLoading(false);
      //    const newPageUrl = `/us/math/study/concept/${fullJSON.url}?page_id=${fullJSON.pageId}`;
      //    toast(
      //       <p>
      //          Page created successfully.{" "}
      //          <LinkText href={newPageUrl} target="_blank">
      //             Link
      //          </LinkText>
      //       </p>,
      //       { ...TOAST_COMMON_CONFIG, type: toast.TYPE.SUCCESS }
      //    );
      // }, 3000);

      fetch("https://math-api-stg.byjusweb.com/api/page", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(fullJSON),
      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res);

            if (res.status.isError) {
               throw new Error(res.status.message);
            }

            const newPageUrl = `/us/math/study/concept/${fullJSON.url}?page_id=${fullJSON.pageId}`;
            toast(
               <p>
                  Page created successfully.{" "}
                  <LinkText href={newPageUrl} target="_blank">
                     Link
                  </LinkText>
               </p>,
               { ...TOAST_COMMON_CONFIG, type: toast.TYPE.SUCCESS }
            );
            setIsCreatePageLoading(false);
         })
         .catch((err) => {
            console.error(err);
            toast(<p>Something went wrong.</p>, {
               ...TOAST_COMMON_CONFIG,
               type: toast.TYPE.ERROR,
            });
            setIsCreatePageLoading(false);
         });
   };

   return (
      <>
         <Script
            src="https://accounts.google.com/gsi/client"
            strategy="lazyOnLoad"
         ></Script>
         <Flex
            bgColor={colors.WHITE}
            color={colors.BLACK}
            height="100%"
            width="100%"
         >
            <PreviewContainer
               json={{ ...pageDetails, slides }}
               tabIndex={tabIndex}
               addNewSlide={addNewSlide}
               onPreviewClick={selectSlideForm}
            />
            <Editor
               slides={slides}
               deleteSlide={deleteSlide}
               pageDetails={pageDetails}
               addNewSlide={addNewSlide}
               setPageDetails={setPageDetails}
               setSlides={onSlidesChange}
               onSubmit={onSubmit}
               tabIndex={tabIndex}
               setTabIndex={setTabIndex}
               isCreatePageLoading={isCreatePageLoading}
            />
         </Flex>
      </>
   );
};

export default Builder;
