import React from "react";
import styled from "styled-components";
import { Icon } from "components/StyledElements";
import { PropTypes } from "prop-types";
import { fontSizes } from "utils/fontStyles";
import { colors } from "utils/colors";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
const bullet = "assets/bullet.svg";

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   color: ${(props) => (props.color ? props.color : "white")};
   font-size: ${fontSizes.H1};
   gap: 40px;
   @media (min-width: 200px) and (max-width: 767px) {
      gap: 10px;
   }

   @media (min-width: 768px) and (max-width: 992px) {
      gap: 15px;
   }
`;

const ListItem = styled.div`
   display: flex;
   align-items: center;
   font-size: ${fontSizes.LARGE};
   gap: 10px;
   &:hover {
      color: ${colors.YELLOW};
      text-decoration: underline;
      cursor: pointer;
   }
`;

const Title = ({ items, moveTo, anchorIdxes }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <Flex>
         {items.map((item, index) => (
            <ListItem onClick={() => moveTo(anchorIdxes[index])} key={index}>
               <Icon width={isMobile ? "10px" : "15px"} src={bullet}></Icon>
               {item}
            </ListItem>
         ))}
      </Flex>
   );
};

Title.propTypes = {
   items: PropTypes.array.isRequired,
   color: PropTypes.string,
   moveTo: PropTypes.func,
   anchorIdxes: PropTypes.array,
};

export default Title;
