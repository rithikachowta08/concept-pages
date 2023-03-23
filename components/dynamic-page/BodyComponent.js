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
   if (item.componentType === COMPONENT_TYPES.TEXT && item.textContent) {
      const lines = item.textContent.split("\n");
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
                  const isTextParam = str.startsWith("%") && str.endsWith("%");
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
         <ModalImg src={item.url} alt={item.alt} />
      ) : (
         <StyledImg src={item.url} alt={item.alt} />
      );
   }
   if (item.componentType === COMPONENT_TYPES.PILL) {
      const modifiedContent = item.content.split(/(%.*?%)/g);
      return (
         <div>
            <Pill>
               {modifiedContent.map((child, idx) => {
                  const str = child.trim();
                  const isTextParam = str.startsWith("%") && str.endsWith("%");
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
                           item.textParams?.find((param) => param.id === id) ||
                           id
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
   return null;
};

export default BodyComponent;
