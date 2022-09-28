import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ArrowContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  @media screen and (max-width: 1024px) {
    width: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

export const ArrowIcon = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 42px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const Item = styled.article`
  cursor: pointer;
  padding: 16px 20px;
  box-sizing: border-box;
  display: flex;
`;

export const HighlightedItem = styled.article`
  border: 2px solid ${(props) => props.theme.colors.blue};
  cursor: pointer;
  padding: 0;
  box-sizing: none;
  display: flex;
`;

export const Cover = styled.img`
  height: 100%;
  width: ${(props) => props.width}px;
  object-fit: fill;
`;

export const HighlightedCover = styled.img`
  height: 100%;
  width: ${(props) => props.width + 25}px;
  object-fit: fill;
`;

export const WrapperHeart = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;

  display: flex;
`;

export const Heart = styled.img`
  width: 23px;
  height: auto;
  position: absolute;
  margin: 20px 25px;
`;

export const ItemsWrapper = styled.div`
  height: 410px;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  flex-grow: 1;
  overflow: hidden;

  @media screen and (max-width: 1920px) {
    height: 410px;
  }

  @media screen and (max-width: 1680px) {
    height: 380px;
  }

  @media screen and (max-width: 1024px) {
    height: 340px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 600px) {
    height: 250px;
  }

  @media screen and (max-width: 400px) {
    height: 220px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  position: relative;
  height: inherit;
  width: inherit;

  left: ${({ leftOffset }) => leftOffset}px;
  transition: left 0.5s;

  ${Item} {
    width: ${({ itemWidth }) => itemWidth}px;
  }
`;
