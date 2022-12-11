"use strict";
exports.id = 5592;
exports.ids = [5592];
exports.modules = {

/***/ 5592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ContentList": () => (/* reexport */ ContentList),
  "Paragraph": () => (/* reexport */ text_Paragraph),
  "TextSpan": () => (/* reexport */ text_TextSpan),
  "TextSpanBg": () => (/* reexport */ text_TextSpanBg),
  "Title": () => (/* reexport */ text_Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/fontStyles.js
var fontStyles = __webpack_require__(7605);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/text/ContentList.js




const bullet = "assets/bullet.svg";
const UnorderedList = (external_styled_components_default()).ul`
   color: ${props => props.color ? props.color : "white"};
   font-size: ${fontStyles/* fontSizes.H1 */.C.H1};
   margin: 0;
   padding-inline-start: 3%;
   list-style-image: url(${bullet});

   @media (min-width: 200px) and (max-width: 400px) {
      padding-inline-start: 6%;
   }

   @media (min-width: 401px) and (max-width: 768px) {
      padding-inline-start: 4%;
   }

   @media (min-width: 768px) and (max-width: 992px) {
      padding-inline-start: 4%;
   }
`;
const ListItem = (external_styled_components_default()).li`
   font-size: ${fontStyles/* fontSizes.MEDIUM */.C.MEDIUM};
   margin-bottom: 4%;
   padding-left: 1%;
   &:hover {
      color: #fec429;
      text-decoration: underline;
      cursor: pointer;
   }

   @media (min-width: 200px) and (max-width: 768px) {
      margin-bottom: 8%;
   }

   @media (min-width: 768px) and (max-width: 992px) {
      margin-bottom: 6%;
   }
`;

const Title = ({
  items,
  moveTo,
  anchorIdxes
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(UnorderedList, {
    children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
      onClick: () => moveTo(anchorIdxes[index]),
      children: item
    }, index))
  });
};

/* harmony default export */ const ContentList = (Title);
// EXTERNAL MODULE: ./utils/colors.js
var colors = __webpack_require__(9717);
;// CONCATENATED MODULE: ./components/text/Paragraph.js





const Para = (external_styled_components_default()).p`
   color: ${props => props.color || colors/* colors.DARK_GREY */.O.DARK_GREY};
   text-align: ${props => props.textAlign};
   max-width: ${props => props.maxWidth};
   font-size: ${props => props.fontSize || fontStyles/* fontSizes.H3 */.C.H3};
   font-weight: ${props => props.fontWeight || 400};
   margin: ${props => props.margin};
   margin-bottom: ${props => props.marginBottom || 0};
   margin-right: ${props => props.marginRight || 0};
   padding: ${props => props.padding || 0};
`;

const Paragraph = ({
  children,
  fontSize,
  fontWeight,
  marginBottom,
  marginTop,
  maxWidth,
  textAlign,
  marginRight,
  margin,
  padding,
  color
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Para, {
    marginBottom: marginBottom,
    marginTop: marginTop,
    marginRight: marginRight,
    maxWidth: maxWidth,
    textAlign: textAlign,
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: padding,
    color: color,
    margin: margin,
    children: children
  });
};

/* harmony default export */ const text_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./components/text/TextSpan.js





const StyledSpan = (external_styled_components_default()).span`
	color: ${props => props.color || colors/* colors.DARK_GREY */.O.DARK_GREY};
	font-weight: ${props => props.fontWeight || fontStyles/* fontWeights.NORMAL */.v.NORMAL};
	font-size: ${props => props.fontSize || fontStyles/* fontSizes.MEDIUM */.C.MEDIUM};
	text-decoration: ${props => props.textDecoration || "none"};
	margin-bottom: ${props => props.marginBottom || 0};
	margin-left: ${props => props.marginLeft || 0};
	margin: ${props => props.margin};
	transform: ${props => props.transform};
	cursor: ${props => props.cursor || "default"};
	background: ${props => props.bgColor || "transparent"};
	text-align: ${props => props.textAlign || "left"};
	&:hover {
		color: ${props => props.hoverColor};
		background: ${props => props.hoverBgColor || "transparent"};
	}
`;

const TextSpan = ({
  children,
  fontSize,
  transform,
  cursor,
  id,
  hoverColor,
  color,
  textDecoration,
  marginBottom,
  marginLeft,
  margin,
  onHover,
  onHoverOut,
  onClick,
  fontWeight,
  bgColor,
  hoverBgColor,
  textAlign
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledSpan, {
    fontSize: fontSize,
    textDecoration: textDecoration,
    transform: transform,
    fontWeight: fontWeight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    margin: margin,
    cursor: cursor,
    id: id,
    hoverColor: hoverColor,
    color: color,
    onClick: onClick,
    onMouseLeave: onHoverOut,
    onMouseEnter: onHover,
    bgColor: bgColor,
    hoverBgColor: hoverBgColor,
    textAlign: textAlign,
    children: children
  });
};

TextSpan.defaultProps = {
  fontWeight: fontStyles/* fontWeights.NORMAL */.v.NORMAL,
  fontSize: fontStyles/* fontSizes.MEDIUM */.C.MEDIUM,
  textDecoration: "none",
  cursor: "default",
  onHover: () => {},
  onHoverOut: () => {},
  onClick: () => {}
};
/* harmony default export */ const text_TextSpan = (TextSpan);
;// CONCATENATED MODULE: ./components/text/TextSpanBg.js




const TextSpanBg_StyledSpan = (external_styled_components_default()).span`
   color: white;
   background-color: ${props => props.color || colors/* colors.DARK_GREY */.O.DARK_GREY};
   font-weight: ${props => props.fontWeight || "500"};
   font-size: ${props => props.fontSize || "1.5rem"};
   text-decoration: ${props => props.textDecoration || "none"};
   margin-bottom: ${props => props.marginBottom || 0};
   margin-left: ${props => props.marginLeft || 0};
   margin: ${props => props.margin || "3px 0"};
   display: inline-block;
   transform: ${props => props.transform};
   cursor: ${props => props.cursor || "default"};
   border-radius: 25px;
   padding: 0 10px;
   &:hover {
      background-color: ${props => props.hoverColor};
   }
`; // line-height: ${(props) => props.lineHeight}

const TextSpanBg = ({
  children,
  fontSize,
  transform,
  cursor,
  id,
  hoverColor,
  color,
  textDecoration,
  marginBottom,
  marginLeft,
  margin,
  onHover,
  onHoverOut,
  onClick,
  fontWeight
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(TextSpanBg_StyledSpan, {
    fontSize: fontSize,
    textDecoration: textDecoration,
    transform: transform,
    fontWeight: fontWeight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    margin: margin,
    cursor: cursor,
    id: id,
    hoverColor: hoverColor,
    color: color,
    onClick: onClick,
    onMouseLeave: onHoverOut,
    onMouseEnter: onHover,
    children: children
  });
};

TextSpanBg.defaultProps = {
  fontWeight: 500,
  fontSize: "1.5rem",
  textDecoration: "none",
  cursor: "default",
  onHover: () => {},
  onHoverOut: () => {},
  onClick: () => {}
};
/* harmony default export */ const text_TextSpanBg = (TextSpanBg);
;// CONCATENATED MODULE: ./components/text/Title.js





const H1 = (external_styled_components_default()).h1`
   color: ${props => props.color || "white"};
   font-size: ${props => props.fontSize ? props.fontSize : fontStyles/* fontSizes.H1 */.C.H1};
   margin: 0;
   margin-bottom: ${props => props.marginBottom || 0};
   text-align: ${props => props.textAlign};

   @media (min-width: 200px) and (max-width: 768px) {
      font-size: ${props => props.fontSize ? props.fontSize : fontStyles/* fontSizes.SMALLSCREEN_H1 */.C.SMALLSCREEN_H1};
   }
`;
const H2 = (external_styled_components_default()).h2`
   color: ${props => props.color ? props.color : colors/* colors.DARK_GREY */.O.DARK_GREY};
   font-weight: ${props => props.fontWeight ? props.fontWeight : fontStyles/* fontWeights.NORMAL */.v.NORMAL};
   opacity: ${props => props.opacity ? props.opacity : "1"};
   padding: ${props => props.padding};
   font-size: ${props => props.fontSize ? props.fontSize : fontStyles/* fontSizes.MEDIUM */.C.MEDIUM};
   margin: 0;
   text-align: ${props => props.textAlign};
   margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
`;

const Title_Title = ({
  children,
  marginBottom,
  padding,
  fontSize,
  fontWeight,
  opacity,
  color,
  small,
  textAlign
}) => {
  const HeadingElement = small ? H2 : H1;
  return /*#__PURE__*/jsx_runtime_.jsx(HeadingElement, {
    marginBottom: marginBottom,
    opacity: opacity,
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: padding,
    textAlign: textAlign,
    color: color,
    children: children
  });
};

Title_Title.defaultProps = {
  small: false
};
/* harmony default export */ const text_Title = (Title_Title);
;// CONCATENATED MODULE: ./components/text/index.js







/***/ }),

/***/ 7605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ fontWeights),
/* harmony export */   "C": () => (/* binding */ fontSizes)
/* harmony export */ });
const fontWeights = {
  BOLD: 700,
  NORMAL: 500
};
const fontSizes = {
  SMALL: "1rem",
  MEDIUM: "1.5rem",
  LARGE: "1.8rem",
  H1: "6rem",
  SMALLSCREEN_H1: "4rem",
  H2: "2.5rem",
  H3: "2.2rem"
};

/***/ })

};
;