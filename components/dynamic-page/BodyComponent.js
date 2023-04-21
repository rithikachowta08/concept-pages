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

const TextToTextParamComponent = ({
   modifiedContent,
   textParamCount,
   textParams,
   ...rest
}) => {
   return modifiedContent.map((child, idx) => {
      const str = child.trim();
      const isTextParam = str.startsWith("%") && str.endsWith("%");
      const id = str.substring(1, str.length - 1);
      return isTextParam ? (
         <TextParamComponent
            {...rest}
            type={id}
            idx={
               textParamCount +
               textParams?.findIndex((param) => param.id === id) +
               1
            }
            key={idx}
            value={textParams?.find((param) => param.id === id)?.value || id}
         />
      ) : (
         str
      );
   });
};

const BodyComponent = ({
   item,
   theme,
   textParamCount,
   colorTheme,
   isModal,
   onClick,
   onHover,
   onHoverOut,
}) => {
   let color = theme === "LIGHT" ? colors.BLACK : colors.WHITE;
   if (isModal) {
      color = theme === "LIGHT" ? colors.WHITE : colors.BLACK;
   }
   console.log(color);
   if (item.content || item.numberedPoints || item.bulletPoints || item.url) {
      if (item.componentType === COMPONENT_TYPES.TEXT) {
         const lines = item.content.split("\n");
         const textLines = [];
         lines.forEach((line, idx) => {
            const modifiedContent = line.split(/(%.*?%)/g);
            textLines.push(
               <TextLine key={idx}>
                  <TextToTextParamComponent
                     modifiedContent={modifiedContent}
                     theme={theme}
                     colorTheme={colorTheme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     textParams={item.textParams}
                     textParamCount={textParamCount}
                  />
               </TextLine>
            );
         });
         return <Paragraph color={color}>{textLines}</Paragraph>;
      }
      if (item.componentType === COMPONENT_TYPES.BULLETED_LIST) {
         return (
            <Paragraph>
               {item.bulletPoints
                  ?.filter((point) => Boolean(point))
                  .map((bulletPoint, idx) => {
                     const modifiedBulletPoint = bulletPoint.split(/(%.*?%)/g);
                     return bulletPoint ? (
                        <BulletPointItem key={idx} color={color}>
                           <TextToTextParamComponent
                              modifiedContent={modifiedBulletPoint}
                              theme={theme}
                              colorTheme={colorTheme}
                              onHover={onHover}
                              onHoverOut={onHoverOut}
                              onClick={onClick}
                              textParams={item.textParams}
                              textParamCount={textParamCount}
                           />
                        </BulletPointItem>
                     ) : null;
                  })}
            </Paragraph>
         );
      }
      if (item.componentType === COMPONENT_TYPES.NUMBERED_LIST) {
         const numberedListItems = item.numberedPoints
            ?.filter((point) => Boolean(point))
            .map((numberedPoint, idx) => {
               const modifiedBulletPoint = numberedPoint.split(/(%.*?%)/g);
               return (
                  <TextToTextParamComponent
                     key={idx}
                     modifiedContent={modifiedBulletPoint}
                     theme={theme}
                     colorTheme={colorTheme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     textParams={item.textParams}
                     textParamCount={textParamCount}
                  />
               );
            });

         return numberedListItems ? (
            <NumberedList color={color} items={numberedListItems} />
         ) : null;
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
               <Pill darkbg={theme === "LIGHT" ? false : true}>
                  <TextToTextParamComponent
                     modifiedContent={modifiedContent}
                     theme={theme}
                     colorTheme={colorTheme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     textParams={item.textParams}
                     textParamCount={textParamCount}
                  />
               </Pill>
            </div>
         );
      }
   }
   return null;
};

export default BodyComponent;
