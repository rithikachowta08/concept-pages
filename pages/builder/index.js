import { useState } from "react";
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

   const addNewSlide = () => {
      setSlides([...slides, { template: "TEXT_AND_DIAGRAM" }]);
      setTabIndex(tabIndex + 1);
   };

   const onSubmit = () => {
      const sections = Array.from(
         new Set(slides.map((slide) => slide.section))
      );
      const navSections = sections.map((section) => ({
         name: section,
         startingSlideIndex:
            slides.findIndex((slide) => slide.section === section) + 1,
      }));
      const fullJSON = {
         ...pageDetails,
         slides,
         navSections,
      };
      console.log("fullJSON", fullJSON);
   };

   return (
      <Flex
         bgColor={colors.WHITE}
         color={colors.BLACK}
         height="100%"
         width="100%"
      >
         <PreviewContainer
            json={{ ...pageDetails, slides }}
            addNewSlide={addNewSlide}
         />
         <Editor
            slides={slides}
            pageDetails={pageDetails}
            addNewSlide={addNewSlide}
            setPageDetails={setPageDetails}
            setSlides={onSlidesChange}
            onSubmit={onSubmit}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
         />
      </Flex>
   );
};

export default Builder;
