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
  font-size: 42px;
  line-height: 42px;
  color: ${(props) => props.theme.colors.white};
`;

export const CentralizerTitle = styled.div`
  padding: ${(props) => props.theme.centralizer.medium};
`;

export const WrapperHeart = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;

  width: 23px;
  height: auto;
  display: flex;
`;

export const Heart = styled.img``;

export const Item = styled.div`
  cursor: pointer;
  padding: 16px 20px;
  box-sizing: border-box;
  display: flex;

  img {
    height: 100%;
    width: min-content;
    object-fit: cover;
    flex-grow: 1;
  }

  ${Heart} {
    position: absolute;
    width: inherit;
    height: auto;
    padding: 10px 15px;
  }
`;

export const ItemsWrapper = styled.div`
  height: 230px;
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
