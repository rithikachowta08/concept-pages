import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { PARAM_TYPES } from "./TextParamComponent";
const Pill = dynamic(() => import("components/Pill"));
const TextParamComponent = dynamic(() => import("./TextParamComponent"));
const BulletPointItem = dynamic(() => import("components/text/BulletPoint"));
const NumberedList = dynamic(() => import("components/text/NumberedList"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
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
   modalCount,
   ...rest
}) => {
   if (!modifiedContent) {
      return null;
   }
   return modifiedContent.map((child, contentIdx) => {
      const str = child.trim();
      const isTextParam = str.startsWith("%") && str.endsWith("%");
      const id = str.substring(1, str.length - 1);
      const isSpaceNeededAfter =
         !modifiedContent[contentIdx + 1]?.match(/^[.,:!?]/);
      let idx = 0;
      if (
         id.includes(PARAM_TYPES.DIAGRAM_INTERACTION) ||
         id.includes(PARAM_TYPES.MATH_WITH_DIAGRAM_INTERACTION)
      ) {
         const filteredTextParams = textParams?.filter(
            (param) =>
               param.id?.includes(PARAM_TYPES.DIAGRAM_INTERACTION) ||
               param.id?.includes(PARAM_TYPES.MATH_WITH_DIAGRAM_INTERACTION)
         );
         idx =
            textParamCount +
            filteredTextParams?.findIndex((param) => param.id === id) +
            1;
      }
      if (id.includes(PARAM_TYPES.MODAL_TRIGGER)) {
         const filteredTextParams = textParams?.filter((param) =>
            param.id?.includes(PARAM_TYPES.MODAL_TRIGGER)
         );
         idx =
            modalCount +
            filteredTextParams?.findIndex((param) => param.id === id);
      }
      return isTextParam ? (
         <>
            &nbsp;
            <TextParamComponent
               {...rest}
               type={id}
               key={`param_${contentIdx}`}
               idx={idx}
               value={textParams?.find((param) => param.id === id)?.value || id}
            />
            {isSpaceNeededAfter && " "}
         </>
      ) : (
         str
      );
   });
};

const BodyComponent = ({
   item,
   theme,
   textParamCount,
   modalCount,
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
   if (item.content || item.numberedPoints || item.bulletPoints || item.url) {
      if (item.componentType === COMPONENT_TYPES.TEXT) {
         const paragraphsContent = item.content.split("\n\n");
         const paragraphs = [];
         paragraphsContent.forEach((para, paraIdx) => {
            const lines = para.split("\n");
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
                        modalCount={modalCount}
                     />
                  </TextLine>
               );
            });
            paragraphs.push(
               <Paragraph key={paraIdx} color={color}>
                  {textLines}
               </Paragraph>
            );
         });
         return paragraphs;
      }
      if (item.componentType === COMPONENT_TYPES.BULLETED_LIST) {
         const lines = item.content.split("\n");
         return (
            <Paragraph>
               {lines
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
         const lines = item.content.split("\n");
         const numberedListItems = lines
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
            <Paragraph>
               <NumberedList color={color} items={numberedListItems} />
            </Paragraph>
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
      if (item.componentType === COMPONENT_TYPES.EQUATION_TABLE) {
         const lines = item.content.split("\n");
         const nonEmptyLines = lines.filter((line) => Boolean(line.trim()));
         const equationLines = [];
         nonEmptyLines.forEach((line) => {
            const delimiter = line.match(/[=≠<>≥≤]+/)?.[0] || "=";
            const [lhs, rhs] = line.split(delimiter).map((text) => text.trim());
            if (lhs || rhs) {
               const modifiedLhs = lhs?.split(/(%.*?%)/g);
               const lhsComponent = (
                  <TextToTextParamComponent
                     modifiedContent={modifiedLhs}
                     theme={theme}
                     colorTheme={colorTheme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     textParams={item.textParams}
                     textParamCount={textParamCount}
                  />
               );
               const modifiedRhs = rhs?.split(/(%.*?%)/g);
               const rhsComponent = (
                  <TextToTextParamComponent
                     modifiedContent={modifiedRhs}
                     theme={theme}
                     colorTheme={colorTheme}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     onClick={onClick}
                     textParams={item.textParams}
                     textParamCount={textParamCount}
                  />
               );
               equationLines.push({
                  lhsLatex: {
                     value: lhs?.startsWith("\\") ? [lhs] : [lhsComponent],
                     type: lhs?.startsWith("\\") ? "latex" : "text",
                  },
                  rhsLatex: {
                     value: rhs?.startsWith("\\") ? [rhs] : [rhsComponent],
                     type: rhs?.startsWith("\\") ? "latex" : "text",
                  },
                  symbol: delimiter,
               });
            }
         });
         return (
            <Paragraph color={color}>
               <EquationTable
                  align="middle"
                  equationLatex={equationLines}
               ></EquationTable>
            </Paragraph>
         );
      }
   }
   return null;
};

export default BodyComponent;
