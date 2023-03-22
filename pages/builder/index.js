import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
import { colors } from "utils/colors";
import jsonData from "../[dynamic-page]/structure.json";
const PreviewContainer = dynamic(() => import("./PreviewContainer"));
const Editor = dynamic(() => import("./Editor"));

const Builder = () => {
   const [json, setJson] = useState(jsonData);

   return (
      <Flex
         bgColor={colors.WHITE}
         color={colors.BLACK}
         height="100%"
         width="100%"
      >
         <PreviewContainer json={json} />
         <Editor />
      </Flex>
   );
};

export default Builder;
