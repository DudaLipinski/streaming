import styled from "styled-components";

const Centralizer = styled.div`
  padding: ${(props) => props.theme.centralizer.desktopPadding};

  @media screen and (max-width: 1024px) {
    padding: ${(props) => props.theme.centralizer.tabletPadding};
  }

  @media screen and (max-width: 768px) {
    padding: ${(props) => props.theme.centralizer.mobilePadding};
  }
`;

export default Centralizer;
