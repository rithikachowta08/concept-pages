import React from "react";
import dynamic from "next/dynamic";
import { Flex } from "components/StyledElements";
const Title = dynamic(() => import("components/text/Title"));

const Editor = () => {
   return (
      <Flex flex="1">
         <Title level={2}>Editor</Title>
      </Flex>
   );
};

export default Editor;
