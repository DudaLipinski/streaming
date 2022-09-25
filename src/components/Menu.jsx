import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Menu.styles";

import heart from "../assets/heart.png";
import search from "../assets/search.png";

const Menu = () => {
  return (
    <Styled.Container>
      <Styled.Centralizer>
        <nav>
          <Styled.MenuList>
            <Styled.MenuItem>
              <Link to="">Movies</Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="">Tv Shows</Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="">Directories</Link>
            </Styled.MenuItem>
          </Styled.MenuList>
        </nav>
        <nav>
          <Styled.MenuList>
            <Link to="">
              <Styled.Icon src={search} alt="" />
            </Link>
            <Link to="">
              <Styled.Icon src={heart} alt="" />
            </Link>
          </Styled.MenuList>
        </nav>
      </Styled.Centralizer>
    </Styled.Container>
  );
};

export default Menu;
