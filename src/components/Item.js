import React from "react";
import styled from "styled-components";
import Palette from "./palette";

const Card = styled.div`
  height: 200px;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
  margin: 10px auto;
  padding: 5px;
  background-color: ${Palette("Grey", 600)};
  color: ${Palette("White")};
  :hover {
    box-shadow: 0 0 0.75rem ${Palette("White")};
  }
`;

const CardText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
  <Card>
    <div>{kind}</div>
    <CardText>{artistName}</CardText>
    <CardText>{trackName}</CardText>
    <div>
      <img src={artworkUrl100} />
    </div>
  </Card>
);

export default Item;
