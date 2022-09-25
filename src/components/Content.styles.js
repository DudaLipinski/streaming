import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.img};);
  background-position: top center;
  background-size: cover;
`;

export const Centralizer = styled.div`
  padding: ${(props) => props.theme.centralizer.medium};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 0;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 80px;
  margin: 0;
  letter-spacing: -4px;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 50px;
  margin: 0;
  letter-spacing: -2px;
  word-spacing: 8px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.white};
  width: 50%;

  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.17em;
`;

export const Rating = styled.div`
  display: flex;
`;

export const Star = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

export const WrapperButtons = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Trailer = styled(Link)`
  color: ${(props) => props.theme.colors.blue};
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
  }
  &:active {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Watch = styled.button`
  margin-right: 30px;
  display: inline-block;
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 14px 54px;

  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  text-shadow: 0px 1px 0px ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
  }

  :active {
    position: relative;
    top: 1px;
  }
`;

export const Heart = styled.img`
  width: 23px;
  height: auto;
  padding: 0 0 0 40px;
`;
