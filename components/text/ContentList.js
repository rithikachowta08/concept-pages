import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
const bullet = "assets/bullet.svg";

const UnorderedList = styled.ul`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 6rem;
  margin: 0;
  list-style-image: url(${bullet});
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 40px;
  padding-left: 22px;
  &:hover {
    color: #fec429;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Title = ({ items, moveTo, anchorIdxes }) => {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem
          onClick={() => moveTo(anchorIdxes[index])}
          key={index}>
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
  anchorIdxes: PropTypes.array
};

export default Title;
