import React from "react";
import styled from "styled-components/macro";
import { PropTypes } from "prop-types";
import bullet from "../../assets/bullet.svg";

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

const Title = ({ items }) => {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
};

Title.propTypes = {
  items: PropTypes.array.isRequired,
  color: PropTypes.string
};

export default Title;
