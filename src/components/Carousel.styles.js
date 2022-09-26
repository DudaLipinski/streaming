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
`;

export const ArrowIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const CentralizerTitle = styled.div`
  padding: ${(props) => props.theme.centralizer.medium};
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
  object-fit: cover;
  object-position: bottom;
`;

export const HighlightedCover = styled.img`
  height: 100%;
  width: ${(props) => props.width + 25}px;
  object-fit: cover;
  object-position: center;
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
  height: 375px;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  flex-grow: 1;
  overflow: hidden;
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
