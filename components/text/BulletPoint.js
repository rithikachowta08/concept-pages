import { Flex } from "components/StyledElements";
import Paragraph from "./Paragraph";
import TextLine from "./TextLine";
import TextSpan from "./TextSpan";

const BulletPointItem = ({ children, color }) => {
   return (
      <TextLine color={color}>
         <Flex>
            <TextSpan margin="0 16px 0 0" color="inherit">
               &bull;
            </TextSpan>
            {/* <span style={{ marginRight: "4px" }}>&bull;</span> */}
            <TextSpan color="inherit">{children}</TextSpan>
         </Flex>
      </TextLine>
   );
};

export default BulletPointItem;
