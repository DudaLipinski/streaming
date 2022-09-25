import React from "react";
import styled from "styled-components";
import * as Styled from "./Content.styles";
import Carousel from "./Carousel";

import Godzilla from "../assets/godzilla.png";
import starImage from "../assets/star.png";
import heart from "../assets/heart.png";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100vh;
  background-image: url(${Godzilla});
  background-position: top center;
  background-size: cover;
`;

const Content = () => {
  return (
    <Container>
      <Styled.Centralizer>
        <Styled.Wrapper>
          <Styled.Title>GODZILLA</Styled.Title>
          <Styled.SubTitle>KINGS OF THE MONSTER</Styled.SubTitle>
          <Styled.Description>
            consectetur adipiscing elit. Diam quis maecenas fermentum mattis
            eget lacus. Turpis urna nunc odio vel. Pharetra scelerisque turpis
          </Styled.Description>
          <Styled.Rating>
            <Styled.Star src={starImage}></Styled.Star>
            <Styled.Star src={starImage}></Styled.Star>
            <Styled.Star src={starImage}></Styled.Star>
            <Styled.Star src={starImage}></Styled.Star>
            <Styled.Star src={starImage}></Styled.Star>
          </Styled.Rating>
          <Styled.WrapperButtons>
            <Styled.Watch>Watch Now</Styled.Watch>
            <Styled.Trailer to="">Trailler</Styled.Trailer>
            <Styled.Heart src={heart} alt="" />
          </Styled.WrapperButtons>
        </Styled.Wrapper>
      </Styled.Centralizer>
      <Carousel />
    </Container>
  );
};

export default Content;
