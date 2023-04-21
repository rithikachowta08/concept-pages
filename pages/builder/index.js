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

const Error = styled.div`
   color: ${colors.RED};
   display: ${(props) => (props.show ? "block" : "none")};
`;

const StyledInput = styled.input`
   background: ${colors.WHITE};
   color: ${(props) => (props.error ? colors.RED : colors.BLACK)};
   border: 1px solid ${(props) => (props.error ? colors.RED : "#aaa")};
   border-radius: 4px;
   box-shadow: none;
   box-sizing: content-box;
   margin: 0;
   padding: 16.5px 14px;

   &:focus,
   &:active {
      outline: none;
   }
`;

const StyledButton = styled.button`
   background-color: ${colors.DARK_LAVENDER};
   color: white;
   height: 36px;
   padding: 10px 16px;
   border-radius: 4px;
   text-transform: uppercase;
   box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
   border: none;
   width: fit-content;
   align-self: center;
   cursor: pointer;

   &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
   }
`;

const Builder = () => {
   const [showEditorView, setShowEditorView] = useState(false);
   const [pageId, setPageId] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [pageDetails, setPageDetails] = useState({});
   const [slides, setSlides] = useState([]);
   const [tabIndex, setTabIndex] = useState(0);
   const [isCreatePageLoading, setIsCreatePageLoading] = useState(false);
   const [showToast, setShowToast] = useState(false);

   const onInputChange = (e) => {
      if (error) {
         setError(false);
      }
      setPageId(e.target.value);
   };

   function onKeyPress(event) {
      if (event.key === "Enter" && pageId) {
         // Submit form
         onEditPage();
      }
   }

   const onCreateNewPage = () => {
      setShowEditorView(true);
   };

   const onEditPage = () => {
      setLoading(true);
      fetch(`https://math-api-stg.byjusweb.com/api/page?page_id=${pageId}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((res) => res.json())
         .then((res) => {
            setLoading(false);
            if (!res.data) {
               setError("Page not found");
            } else {
               setSlides(res.data.slides);
               const pageDetails = { ...res.data };
               delete pageDetails.slides;
               setPageDetails(pageDetails);
               setShowEditorView(true);
            }
         })
         .catch((err) => {
            console.error(err);
            setLoading(false);
            setError("Page not found");
         });
   };

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

   const onSubmit = () => {
      const fullJSON = {
         ...pageDetails,
         slides,
      };
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

            const newPageUrl = `/us/math/study/concept/${fullJSON.url}`;
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
         {showEditorView ? (
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
         ) : (
            <Flex
               direction="column"
               bgColor={colors.WHITE}
               color={colors.BLACK}
               justifyContent="center"
               alignItems="center"
               gap="10px"
               height="100%"
               width="100%"
            >
               <StyledButton onClick={onCreateNewPage}>
                  Create new page
               </StyledButton>
               <Flex gap="10px" justifyContent="center" alignItems="center">
                  <StyledInput
                     placeholder="Page ID"
                     value={pageId}
                     error={error}
                     onChange={onInputChange}
                     onKeyUp={onKeyPress}
                  ></StyledInput>
                  <StyledButton
                     onClick={onEditPage}
                     disabled={!pageId || loading}
                  >
                     {loading ? "Fetching page..." : "Edit existing page"}
                  </StyledButton>
               </Flex>
               <Error show={error}>{error}</Error>
            </Flex>
         )}
      </>
   );
};

export default Builder;
