import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  background-color: rgb(0 0 255 / 0%);
  position: fixed;
  z-index: 1;
`;

export const Centralizer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: ${(props) => props.theme.centralizer.medium};
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
  }

  a:visited {
    text-decoration: none;
  }

  a:link:active,
  a:visited:active {
    font-weight: 600;
  }
`;

export const Icon = styled.img`
  width: 23px;
  height: auto;
  padding: 0 0 0 40px;
`;
