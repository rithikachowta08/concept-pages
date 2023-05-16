import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";
import { TOAST_COMMON_CONFIG } from "utils/constants";
import { Checkbox } from "@mui/material";
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

const Branding = styled.div`
   background-color: ${colors.DARK_LAVENDER};
   color: ${colors.WHITE};
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 10rem;
   flex: 1;
`;

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: fit-content;
   align-items: flex-start;
`;

const Subtext = styled.div`
   font-size: 5rem;
`;

const CreatePageSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   border-bottom: 1px solid #aaa;
   width: 90%;
   padding-bottom: 20px;
`;

const Builder = () => {
   const router = useRouter();
   const isEditing =
      router.query.pageId &&
      router.query.pageId !== "NEW" &&
      router.query.pageId !== "IMPORT";
   const isV2 = Boolean(router.query.v2);
   const [showEditorView, setShowEditorView] = useState(
      Boolean(router.query.pageId)
   );
   const [loading, setLoading] = useState(false);
   const [pageId, setPageId] = useState(null);
   const [error, setError] = useState(false);
   const [pageDetails, setPageDetails] = useState({
      version: isV2 ? 2 : 1,
   });
   const [slides, setSlides] = useState([]);
   const [tabIndex, setTabIndex] = useState(0);
   const [isCreatePageLoading, setIsCreatePageLoading] = useState(false);
   const [isSaveDraftLoading, setIsSaveDraftLoading] = useState(false);

   useEffect(() => {
      if (router.query.pageId) {
         if (
            router.query.pageId !== "NEW" &&
            router.query.pageId !== "IMPORT"
         ) {
            onEditPage();
            return;
         }
         if (router.query.pageId === "IMPORT") {
            setPageDetails(
               JSON.parse(localStorage.getItem("pageDetails")) || {}
            );
            setSlides(JSON.parse(localStorage.getItem("slides")) || []);
         }
         setShowEditorView(true);
      } else {
         setShowEditorView(false);
      }
   }, [router.query.pageId]);

   const onCheckboxChange = (e) => {
      if (e.target.checked) {
         router.query.v2 = "true";
         router.push(router);
      } else {
         delete router.query.v2;
         router.push(router);
      }
   };

   const onInputChange = (e) => {
      if (error) {
         setError(false);
      }
      setPageId(e.target.value);
   };

   function onKeyPress(event) {
      if (event.key === "Enter" && pageId) {
         onEditPage();
      }
   }

   const onCreateNewPage = () => {
      router.query.pageId = "NEW";
      router.push(router);
      setSlides([]);
      setPageDetails({});
   };

   const onFileInputChange = (e) => {
      const fileReader = new FileReader();
      const populateState = (content) => {
         const json = { ...JSON.parse(content) };
         setSlides(json.slides);
         delete json.slides;
         setPageDetails(json);
      };
      fileReader.onload = (evt) => {
         populateState(evt.target.result);
      };
      fileReader.readAsText(e.target.files[0]);
   };

   const onClickImport = () => {
      router.query.pageId = "IMPORT";
      localStorage.setItem("pageDetails", JSON.stringify(pageDetails));
      localStorage.setItem("slides", JSON.stringify(slides));
      router.push(router);
   };

   const onBackClick = () => {
      setPageId(null);
      delete router.query.pageId;
      router.push(router);
   };

   const onEditPage = () => {
      setLoading(true);
      fetch(
         `https://math-api-stg.byjusweb.com/api/page?page_id=${
            pageId || router.query.pageId
         }`,
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
            if (!res.data) {
               setError("Page not found");
            } else {
               setSlides(res.data.slides);
               localStorage.setItem("slides", JSON.stringify(res.data.slides));
               const pageDetails = { ...res.data };
               delete pageDetails.slides;
               setPageDetails(pageDetails);
               localStorage.setItem("pageDetails", JSON.stringify(pageDetails));
               if (!router.query.pageId) {
                  router.query.pageId = pageId;
                  router.push(router);
               }
               setShowEditorView(true);
            }
         })
         .catch((err) => {
            console.error(err);
            setLoading(false);
            setError("Page not found");
         });
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

   const onSubmit = (isDraft) => {
      const fullJSON = {
         ...pageDetails,
         slides,
      };
      if (isDraft) {
         setIsSaveDraftLoading(true);
      } else {
         setIsCreatePageLoading(true);
      }
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
         method: isEditing ? "PUT" : "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ ...fullJSON, isDraft }),
      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res);

            if (res.status.isError) {
               throw new Error(res.status.message);
            }

            if (!isDraft) {
               const newPageUrl = `/us/math/study/concept/${fullJSON.url}`;
               toast(
                  <p>
                     Page {isEditing ? "updated" : "created"} successfully.{" "}
                     <LinkText href={newPageUrl} target="_blank">
                        Link
                     </LinkText>
                  </p>,
                  { ...TOAST_COMMON_CONFIG, type: toast.TYPE.SUCCESS }
               );
               setIsCreatePageLoading(false);
            } else {
               toast(<p>Page drafted successfully.</p>, {
                  ...TOAST_COMMON_CONFIG,
                  type: toast.TYPE.SUCCESS,
               });
               setIsSaveDraftLoading(false);
            }
            if (
               router.query.pageId === "NEW" ||
               router.query.pageId === "IMPORT"
            ) {
               // Update new pageId to url
               router.query.pageId = fullJSON.pageId;
               router.push(router);
               setShowEditorView(true);
            }
         })
         .catch((err) => {
            console.error(err);
            toast(<p>Something went wrong.</p>, {
               ...TOAST_COMMON_CONFIG,
               type: toast.TYPE.ERROR,
            });
            setIsCreatePageLoading(false);
            setIsSaveDraftLoading(false);
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
            {showEditorView ? (
               <>
                  <PreviewContainer
                     json={{ ...pageDetails, slides }}
                     tabIndex={tabIndex}
                     addNewSlide={addNewSlide}
                     onPreviewClick={selectSlideForm}
                     onBackClick={onBackClick}
                  />
                  <Editor
                     slides={slides}
                     deleteSlide={deleteSlide}
                     pageDetails={pageDetails}
                     addNewSlide={addNewSlide}
                     setPageDetails={setPageDetails}
                     setSlides={setSlides}
                     onSubmit={onSubmit}
                     tabIndex={tabIndex}
                     setTabIndex={setTabIndex}
                     isCreatePageLoading={isCreatePageLoading}
                     isSaveDraftLoading={isSaveDraftLoading}
                  />
               </>
            ) : (
               <>
                  <Branding>
                     <TextContainer>
                        <div>WebCraft</div>
                        <Subtext>Concept Page Builder</Subtext>
                     </TextContainer>
                  </Branding>
                  <Flex
                     direction="column"
                     bgColor={colors.WHITE}
                     color={colors.BLACK}
                     justifyContent="center"
                     alignItems="center"
                     height="100%"
                     width="100%"
                     flex={1}
                  >
                     <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        gap="20px"
                        flex={1}
                     >
                        <CreatePageSection>
                           <Flex alignItems="center" alignSelf="center">
                              <Checkbox
                                 checked={isV2}
                                 onChange={onCheckboxChange}
                              ></Checkbox>
                              <div>Use Editor 2.0</div>
                           </Flex>
                           <StyledButton onClick={onCreateNewPage}>
                              Create new page
                           </StyledButton>
                        </CreatePageSection>
                        <Flex alignItems="center" gap="10px">
                           <input
                              type="file"
                              id="import-file"
                              style={{ width: "170px" }}
                              onChange={onFileInputChange}
                           ></input>
                           <StyledButton
                              disabled={
                                 !(
                                    typeof document !== "undefined" &&
                                    document.getElementById("import-file")
                                       ?.value
                                 )
                              }
                              onClick={onClickImport}
                           >
                              Import from JSON
                           </StyledButton>
                        </Flex>
                        <Flex
                           gap="10px"
                           justifyContent="center"
                           alignItems="center"
                        >
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
                              {loading
                                 ? "Fetching page..."
                                 : "Edit existing page"}
                           </StyledButton>
                        </Flex>
                        <Error show={error}>{error}</Error>
                     </Flex>
                  </Flex>
               </>
            )}
         </Flex>
      </>
   );
};

export default Builder;
