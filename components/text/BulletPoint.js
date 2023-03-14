import { Flex } from "components/StyledElements";
import Paragraph from "./Paragraph";
import TextSpan from "./TextSpan";

const BulletPointItem = ({ children }) => {
   return (
      <Paragraph>
         <Flex>
            <TextSpan margin="0 16px 0 0">&bull;</TextSpan>
            {/* <span style={{ marginRight: "4px" }}>&bull;</span> */}
            <TextSpan>{children}</TextSpan>
         </Flex>
      </Paragraph>
   );
};

export default BulletPointItem;
