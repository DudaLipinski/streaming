import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  background-color: rgb(0 0 255 / 0%);
  position: fixed;
  z-index: 1;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

export const MenuItem = styled.li`
  padding: 0 40px 0 0;

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    font-weight: 500;
    text-shadow: 0px 1px 3px rgb(0 0 0 / 55%);
  }

  a:visited {
    text-decoration: none;
  }

  a:link:active,
  a:visited:active {
    font-weight: 600;
  }
`;

export const WrapperHeart = styled(Link)`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const IconHeart = styled.img`
  width: 23px;
  height: 23px;
  padding: 0 0 0 40px;
`;

export const Form = styled.form`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const IconSearch = styled.img`
  width: 23px;
  height: 23px;
  padding-left: 10px;
`;

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme.colors.blue};
  width: 20px;
  position: absolute;
`;

export const Search = styled.input`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  border-radius: 21px;
  color: rgba(22, 22, 22, 1);
  text-overflow: clip;
  /* background: rgba(252, 252, 252, 0); */
`;
