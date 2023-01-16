import React from "react";
import styled from "styled-components";
import { Icon } from "components/StyledElements";
import { PropTypes } from "prop-types";
import { fontSizes } from "utils/fontStyles";
import { colors } from "utils/colors";
const bullet = "assets/bullet.svg";

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   font-family: '"Nunito-Medium", sans-serif';
   color: ${(props) => (props.color ? props.color : "white")};
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
   width: fit-content;
   align-items: center;
   font-size: ${fontSizes.MEDIUM};
   gap: 10px;
   &:hover {
      color: ${colors.YELLOW};
      text-decoration: underline;
      cursor: pointer;
   }
`;

const Title = ({ items, moveTo, anchorIdxes }) => {
   return (
      <Flex>
         {items.map((item, index) => (
            <ListItem onClick={() => moveTo(anchorIdxes[index])} key={index}>
               <Icon src={bullet}></Icon>
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
