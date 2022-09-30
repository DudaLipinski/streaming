import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Styled from "./Menu.styles";
import Centralizer from "../Centralizer";

import heartEmpty from "../../assets/heartEmpty.png";
import search from "../../assets/search.png";
import { useDispatch } from "react-redux";
import { actions as searchActions } from "../../state/search";

const Menu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchActions.updateSearch(e.target.search.value));
  };

  return (
    <Styled.Container>
      <Centralizer>
        <Styled.MenuWrapper>
          <nav>
            <Styled.MenuList>
              <Styled.MenuItem>
                <Link to="/movies">Movies</Link>
                {pathname === "/movies" ? <Styled.Line /> : null}
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Link to="/tv-series">Tv Series</Link>
                {pathname === "/tv-series" ? <Styled.Line /> : null}
              </Styled.MenuItem>
            </Styled.MenuList>
          </nav>
          <nav>
            <Styled.MenuList>
              <Styled.Form onSubmit={handleSearch}>
                <Styled.Search type="text" placeholder="Search" name="search" />
                <Styled.IconSearch src={search} alt="" />
              </Styled.Form>
              <Styled.WrapperHeart to="/favorites">
                <Styled.IconHeart src={heartEmpty} alt="" />
              </Styled.WrapperHeart>
            </Styled.MenuList>
          </nav>
        </Styled.MenuWrapper>
      </Centralizer>
    </Styled.Container>
  );
};

export default Menu;
