import { useState } from "react";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import jsonData from "../[dynamic-page]/structure.json";
const PreviewContainer = dynamic(() => import("./PreviewContainer"), {
   ssr: false,
});
const Editor = dynamic(() => import("./Editor"), {
   ssr: false,
});

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
