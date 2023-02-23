import { Flex } from "components/StyledElements";
import TextSpan from "./TextSpan";

const BulletPointItem = ({ children }) => {
   return (
      <Flex>
         <TextSpan margin="0 16px 0 0">&bull;</TextSpan>
         {/* <span style={{ marginRight: "4px" }}>&bull;</span> */}
         <TextSpan>{children}</TextSpan>
      </Flex>
   );
};

export default BulletPointItem;
