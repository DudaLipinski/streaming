import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Menu.styles";

import heartEmpty from "../assets/heartEmpty.png";
import search from "../assets/search.png";

const Menu = () => {
  const handleSearch = () => {};

  const handleChange = (event) => {};

  return (
    <Styled.Container>
      <Styled.Centralizer>
        <nav>
          <Styled.MenuList>
            <Styled.MenuItem>
              <Link to="/movies">Movies</Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="/tv-series">Tv Series</Link>
            </Styled.MenuItem>
          </Styled.MenuList>
        </nav>
        <nav>
          <Styled.MenuList>
            {/* <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                name="search"
                // value={}
              />
              <Styled.Icon src={search} alt="" />
            </form> */}
            <Link to="/favorites">
              <Styled.Icon src={heartEmpty} alt="" />
            </Link>
          </Styled.MenuList>
        </nav>
      </Styled.Centralizer>
    </Styled.Container>
  );
};

export default Menu;
