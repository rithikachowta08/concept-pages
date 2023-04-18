import { useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
// import jsonData from "components/dynamic-page/structure.json";
const PreviewContainer = dynamic(() =>
   import("../../components/builder/PreviewContainer")
);
const Editor = dynamic(() => import("../../components/builder/Editor"));

const Builder = () => {
   const [pageDetails, setPageDetails] = useState({});
   const [slides, setSlides] = useState([]);
   const [tabIndex, setTabIndex] = useState(0);

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
      fetch("https://math-api-stg.byjusweb.com/api/page", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(fullJSON),
      })
         .then((res) => res.json())
         .then((res) => console.log(res))
         .catch((err) => console.error(err));
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
            />
         </Flex>
      </>
   );
};

export default Builder;
