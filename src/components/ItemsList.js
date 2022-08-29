import React from "react";
import Item from "./Item";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  padding-top: 80px;
`;

const ItemsList = ({ items }) => {
  const itemsArray = items.map((item, index) => <Item key={index} {...item} />);
  return (
    // <Carousel
    //   NextIcon={<i className="material-icons">navigate_next</i>}
    //   PrevIcon={<i className="material-icons">navigate_before</i>}
    // >
    <List>{itemsArray}</List>

    // </Carousel>
  );
};

export default ItemsList;
