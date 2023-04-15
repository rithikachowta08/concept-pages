import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const Pill = dynamic(() => import("components/Pill"));
const TextParamComponent = dynamic(() => import("./TextParamComponent"));
const BulletPointItem = dynamic(() => import("components/text/BulletPoint"));
const NumberedList = dynamic(() => import("components/text/NumberedList"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);

export const COMPONENT_TYPES = {
   TEXT: "TEXT",
   IMAGE: "IMAGE",
   PILL: "PILL",
   EQUATION_TABLE: "EQUATION_TABLE",
   BULLETED_LIST: "BULLETED_LIST",
   NUMBERED_LIST: "NUMBERED_LIST",
};

const BodyComponent = ({
   item,
   theme,
   colorTheme,
   isModal,
   onClick,
   onHover,
   onHoverOut,
}) => {
   if (item.content) {
      if (item.componentType === COMPONENT_TYPES.TEXT) {
         const lines = item.content.split("\n");
         const textLines = [];
         let color = theme === "LIGHT" ? colors.BLACK : colors.WHITE;
         if (isModal) {
            color = theme === "LIGHT" ? colors.WHITE : colors.BLACK;
         }
         lines.forEach((line, idx) => {
            const modifiedContent = line.split(/(%.*?%)/g);
            textLines.push(
               <TextLine key={idx}>
                  {modifiedContent.map((child, idx) => {
                     const str = child.trim();
                     const isTextParam =
                        str.startsWith("%") && str.endsWith("%");
                     const id = str.substring(1, str.length - 1);
                     return isTextParam ? (
                        <TextParamComponent
                           type={id}
                           idx={idx}
                           key={idx}
                           theme={theme}
                           colorTheme={colorTheme}
                           onHover={onHover}
                           onHoverOut={onHoverOut}
                           onClick={onClick}
                           value={
                              item.textParams?.find((param) => param.id === id)
                                 ?.value || id
                           }
                        />
                     ) : (
                        str
                     );
                  })}
               </TextLine>
            );
         });
         return <Paragraph color={color}>{textLines}</Paragraph>;
      }
      if (item.componentType === COMPONENT_TYPES.BULLETED_LIST) {
         return item.content.map((bulletPoint, idx) => (
            <Paragraph key={idx}>
               <BulletPointItem>{bulletPoint}</BulletPointItem>
            </Paragraph>
         ));
      }
      if (item.componentType === COMPONENT_TYPES.NUMBERED_LIST) {
         return <NumberedList items={item.content} />;
      }
      if (item.componentType === COMPONENT_TYPES.IMAGE) {
         return isModal ? (
            <ModalImg src={item.content} alt={item.alt} />
         ) : (
            <StyledImg src={item.content} alt={item.alt} />
         );
      }
      if (item.componentType === COMPONENT_TYPES.PILL) {
         const modifiedContent = item.content.split(/(%.*?%)/g);
         return (
            <div>
               <Pill darkbg={theme === "LIGHT" ? false : true}>
                  {modifiedContent.map((child, idx) => {
                     const str = child.trim();
                     const isTextParam =
                        str.startsWith("%") && str.endsWith("%");
                     const id = str.substring(1, str.length - 1);
                     return isTextParam ? (
                        <TextParamComponent
                           type={id}
                           idx={idx}
                           key={idx}
                           theme={theme}
                           onHover={onHover}
                           onHoverOut={onHoverOut}
                           onClick={onClick}
                           value={
                              item.textParams?.find((param) => param.id === id)
                                 ?.value || id
                           }
                        />
                     ) : (
                        str
                     );
                  })}
               </Pill>
            </div>
         );
      }
   }
   return null;
};

export default BodyComponent;
