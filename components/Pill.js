import React from "react";
import { fontSizes } from "utils/fontStyles";
import { Icon, Flex } from "components/StyledElements";
import { TextSpan } from "components/text";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";

const Pill = ({
   math=true,
   darkbg=true,
   children,
   icon,
   width = "fit-content",
   position,
   bottom,
   alignSelf,
   marginBottom,
   color = colors.DARK_GREY,
   bgColor = colors.OCEAN_GREEN,
   fontSize = fontSizes.MEDIUM,
}) => {
   return (
      <Flex
         bgColor={darkbg?colors.PILL_BLUR:colors.PILL_SOLID}
         bottom={bottom}
         padding="0.7rem"
         alignItems="center"
         marginBottom={marginBottom}
         marginTop="1rem"
         alignSelf={alignSelf}
         borderRadius="8px"
         position={position}
         color={darkbg?colors.WHITE:colors.BLACK}
         width={width}
         className={math?"pill-math":""}
      >
         {icon ? <Icon src={icon} marginRight="6px"></Icon> : null}
         <TextSpan color={darkbg?colors.WHITE:colors.BLACK} fontSize={fontSize}>
            {children}
         </TextSpan>
      </Flex>
   );
};

Pill.propTypes = {
   children: PropTypes.node.isRequired,
   bgColor: PropTypes.string,
   icon: PropTypes.string,
   position: PropTypes.string,
   bottom: PropTypes.string,
   alignSelf: PropTypes.string,
   fontSize: PropTypes.string,
   width: PropTypes.string,
   color: PropTypes.string,
   marginBottom: PropTypes.string,
};

export default Pill;
