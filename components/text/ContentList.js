import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { fontSizes } from "utils/fontStyles";
const bullet = "assets/bullet.svg";

const UnorderedList = styled.ul`
   color: ${(props) => (props.color ? props.color : "white")};
   font-size: ${fontSizes.H1};
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

const ListItem = styled.li`
   font-size: ${fontSizes.MEDIUM};
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

const Title = ({ items, moveTo, anchorIdxes }) => {
   return (
      <UnorderedList>
         {items.map((item, index) => (
            <ListItem onClick={() => moveTo(anchorIdxes[index])} key={index}>
               {item}
            </ListItem>
         ))}
      </UnorderedList>
   );
};

Title.propTypes = {
   items: PropTypes.array.isRequired,
   color: PropTypes.string,
   moveTo: PropTypes.func,
   anchorIdxes: PropTypes.array,
};

export default Title;
