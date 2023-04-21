import TextLine from "./TextLine";
import TextSpan from "./TextSpan";

const NumberedList = ({ items, color }) => {
   return items.map((item, idx) => (
      <TextLine color={color} key={idx}>
         <TextSpan color="inherit">{idx + 1}&#41;</TextSpan>
         &nbsp;{item}
      </TextLine>
   ));
};

export default NumberedList;
