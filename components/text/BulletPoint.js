import { Flex } from "components/StyledElements";
import Paragraph from "./Paragraph";
import TextSpan from "./TextSpan";

const BulletPointItem = ({ children, color }) => {
   return (
      <Paragraph>
         <Flex>
            <TextSpan color={color || "inherit"} margin="0 16px 0 0">
               &bull;
            </TextSpan>
            {/* <span style={{ marginRight: "4px" }}>&bull;</span> */}
            <TextSpan color={color || "inherit"}>{children}</TextSpan>
         </Flex>
      </Paragraph>
   );
};

export default BulletPointItem;
