import React from "react";
import { fontSizes } from "utils/fontStyles";
import { Icon, Flex } from "components/StyledElements";
import { TextSpan } from "components/text";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";

const Pill = ({
   children,
   icon,
   width = "fit-content",
   position,
   bottom,
   alignSelf,
   marginBottom,
   color = colors.DARK_GREY,
   bgColor = colors.OCEAN_GREEN,
   fontSize = fontSizes.LARGE,
}) => {
   return (
      <Flex
         bgColor={bgColor}
         bottom={bottom}
         padding="0.7rem"
         alignItems="center"
         marginBottom={marginBottom}
         marginTop="1rem"
         alignSelf={alignSelf}
         borderRadius="8px"
         maxWidth="90%"
         position={position}
         color={color}
         width={width}
      >
         {icon ? <Icon src={icon} marginRight="6px"></Icon> : null}
         <TextSpan color={color} fontSize={fontSize}>
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
