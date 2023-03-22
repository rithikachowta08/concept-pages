import Paragraph from "./Paragraph";
import TextSpan from "./TextSpan";

const NumberedList = ({ items }) => {
   return items.map((item, idx) => (
      <Paragraph key={idx}>
         <TextSpan>{idx + 1}&#41;</TextSpan>
         &nbsp;{item}
      </Paragraph>
   ));
};

export default NumberedList;
