import React from "react";
import styled from "styled-components";
import Palette from "./palette";

const Content = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${Palette("Grey", 800)};
  color: ${Palette("White")};
`;

const Title = styled.div`
  margin: 5px 0 0;
  text-align: center;
`;

const ItunesForm = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${Palette("Grey")};
  color: ${Palette("White")};
  border-radius: 2em;
  height: 28px;
  :hover {
    cursor: pointer;
    background-color: ${Palette("Grey", 300)};
  }
  :focus {
    outline-color: ${Palette("Grey", 300)};
  }
`;

const Input = styled.input`
  width: 50%;
  height: 25px;
  margin: 0 1em;
  padding: 0 1em;
  background-color: ${Palette("Grey")};
  border-radius: 1em;
  color: ${Palette("White")};
  font-size: 16px;
  ::placeholder {
    color: ${Palette("White", "transparent_50")};
  }
  :focus {
    outline-color: ${Palette("Grey", 300)};
  }
`;

const Select = styled.select`
  height: 25px;
  margin: 0 1em 0 0;
  background-color: ${Palette("Grey")};
  color: ${Palette("White")};
  font-size: 16px;
  :focus {
    outline-color: ${Palette("Grey", 300)};
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchMedia: "all",
    };
  }

  handleSearchTextChange = (event) =>
    this.setState({ searchText: event.target.value });

  handleSearchMediaChange = (event) =>
    this.setState({ searchMedia: event.target.value });

  render() {
    const { mediaTypes, startSearch } = this.props;
    const { searchText, searchMedia } = this.state;
    const mediaOptions = mediaTypes.map((media) => (
      <option value={media} label={media} key={media} />
    ));
    return (
      <Content>
        <ItunesForm>
          <Title>
            <i className="material-icons">library_music</i>
          </Title>
          <Input
            type="text"
            value={searchText}
            placeholder="Search..."
            onChange={this.handleSearchTextChange}
            onKeyDown={(event) =>
              event.key === "Enter"
                ? startSearch(searchText, searchMedia)
                : null
            }
          />
          <Select value={searchMedia} onChange={this.handleSearchMediaChange}>
            {mediaOptions}
          </Select>
          <Button onClick={() => startSearch(searchText, searchMedia)}>
            <i className="material-icons">search</i>
          </Button>
        </ItunesForm>
      </Content>
    );
  }
}

export default Header;
