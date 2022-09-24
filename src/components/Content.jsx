import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Styled from "./Content.styles";

import Godzilla from "../assets/godzilla.png";
import StarImage from "../assets/star.png";
import Heart from "../assets/heart.png";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Godzilla});
  background-position: top center;
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
            <Styled.Star src={StarImage}></Styled.Star>
            <Styled.Star src={StarImage}></Styled.Star>
            <Styled.Star src={StarImage}></Styled.Star>
            <Styled.Star src={StarImage}></Styled.Star>
            <Styled.Star src={StarImage}></Styled.Star>
          </Styled.Rating>
          <Styled.WrapperButtons>
            <Styled.Watch>Watch Now</Styled.Watch>
            <Styled.Trailer to="">Trailler</Styled.Trailer>
            <Link to="">
              <Styled.Icon src={Heart} alt="" />
            </Link>
          </Styled.WrapperButtons>
        </Styled.Wrapper>
      </Styled.Centralizer>
    </Container>
  );
};

export default Content;
