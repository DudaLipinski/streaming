import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Menu.styles";

import heartEmpty from "../assets/heartEmpty.png";
import search from "../assets/search.png";

const Menu = () => {
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
            {/* <Link to="">
              <Styled.Icon src={search} alt="" />
            </Link>
            <Link to="">
              <Styled.Icon src={heartEmpty} alt="" />
            </Link> */}
          </Styled.MenuList>
        </nav>
      </Styled.Centralizer>
    </Styled.Container>
  );
};

export default Menu;
