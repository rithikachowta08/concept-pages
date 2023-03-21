import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TextParamComponent = dynamic(() => import("./TextParamComponent"));
const BulletPointItem = dynamic(() => import("components/text/BulletPoint"));
const NumberedList = dynamic(() => import("components/text/NumberedList"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);

const COMPONENT_TYPES = {
   TEXT: "text",
   IMAGE: "image",
   PILL: "pill",
   EQUATION_TABLE: "equation_table",
   BULLETED_LIST: "bulleted_list",
   NUMBERED_LIST: "numbered_list",
};

const BodyComponent = ({
   item,
   theme,
   isModal,
   onClick,
   onHover,
   onHoverOut,
}) => {
   if (item.type === COMPONENT_TYPES.TEXT) {
      const modifiedContent = item.content.split(/(%.*?% )/g);
      let color = theme === "LIGHT" ? colors.BLACK : colors.WHITE;
      if (isModal) {
         color = theme === "LIGHT" ? colors.WHITE : colors.BLACK;
      }
      return (
         <Paragraph color={color}>
            {modifiedContent.map((child, idx) => {
               const str = child.trim();
               const isTextParam = str.startsWith("%") && str.endsWith("%");
               return isTextParam ? (
                  <TextParamComponent
                     type={str.substring(1, str.length - 1)}
                     idx={idx}
                     key={idx}
                     theme={theme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     values={item.textParams}
                  />
               ) : (
                  str
               );
            })}
         </Paragraph>
      );
   }
   if (item.type === COMPONENT_TYPES.BULLETED_LIST) {
      return item.content.map((bulletPoint, idx) => (
         <Paragraph key={idx}>
            <BulletPointItem>{bulletPoint}</BulletPointItem>
         </Paragraph>
      ));
   }
   if (item.type === COMPONENT_TYPES.NUMBERED_LIST) {
      return <NumberedList items={item.content} />;
   }
   if (item.type === COMPONENT_TYPES.IMAGE) {
      return isModal ? (
         <ModalImg src={item.url} alt={item.alt} />
      ) : (
         <StyledImg src={item.url} alt={item.alt} />
      );
   }
};

export default BodyComponent;
