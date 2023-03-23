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
   const [json, setJson] = useState({
      title: "",
      url: "",
      slides: [],
      seo: {
         title: "",
         meta: "",
      },
   });
   return (
      <Flex
         bgColor={colors.WHITE}
         color={colors.BLACK}
         height="100%"
         width="100%"
      >
         <PreviewContainer json={json} />
         <Editor json={json} setJson={setJson} />
      </Flex>
   );
};

export default Builder;
