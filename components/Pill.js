import React from "react";
import { fontSizes } from "utils/fontStyles";
import { Icon, Flex } from "components/StyledElements";
import { TextSpan } from "components/text";
import { PropTypes } from "prop-types";

const Pill = ({
   children,
   icon,
   width,
   position,
   bottom,
   alignSelf,
   marginBottom,
   color,
   bgColor,
   fontSize = fontSizes.SMALL,
}) => {
   return (
      <Flex
         bgColor={bgColor}
         bottom={bottom}
         padding="0.7rem"
         alignItems="center"
         marginBottom={marginBottom}
         alignSelf={alignSelf}
         borderRadius="8px"
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
