import { useRef, useEffect, useState } from "react";
import * as Styled from "./Carousel.styles";
import Godzilla from "../assets/godzilla.png";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import heart from "../assets/heart.png";

const items = [
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
  {
    img: Godzilla,
  },
];

const Carousel = () => {
  const itemsContainerRef = useRef();

  const displayedItemsCount = useRef(5);
  const [itemWidth, setItemWidth] = useState(0);
  const [leftmostItem, setLeftmostItem] = useState(0);

  const lastItemIndex = items.length - 1;
  const rightmostItem = leftmostItem + (displayedItemsCount.current - 1);

  const leftOffset = -(leftmostItem * itemWidth);

  const canSwipeLeft = leftmostItem > 0;
  const canSwipeRight = lastItemIndex !== rightmostItem;

  const handleLeftClick = () => {
    if (!canSwipeLeft) {
      return;
    }

    setLeftmostItem((prevLeftmostItem) => prevLeftmostItem - 1);
  };

  const handleRightClick = () => {
    if (!canSwipeRight) {
      return;
    }

    setLeftmostItem((prevLeftmostItem) => prevLeftmostItem + 1);
  };

  useEffect(() => {
    const itemsContainerWidth = itemsContainerRef.current.clientWidth;

    if (itemsContainerWidth / displayedItemsCount.current < 280) {
      displayedItemsCount.current = 4;
    }

    if (itemsContainerWidth / displayedItemsCount.current > 400) {
      displayedItemsCount.current = 6;
    }

    if (itemsContainerWidth / displayedItemsCount.current > 450) {
      displayedItemsCount.current = 7;
    }

    setItemWidth(itemsContainerWidth / displayedItemsCount.current);
    console.log(itemsContainerRef.current.clientWidth);
  }, []);

  return (
    <div>
      <Styled.CentralizerTitle>
        <Styled.Title>Next Movies</Styled.Title>
      </Styled.CentralizerTitle>
      <Styled.Container>
        <Styled.ArrowContainer
          disabled={!canSwipeLeft}
          onClick={handleLeftClick}
        >
          {canSwipeLeft ? <Styled.ArrowIcon src={arrowLeft} alt="" /> : null}
        </Styled.ArrowContainer>
        <Styled.ItemsWrapper>
          <Styled.ItemsContainer
            itemWidth={itemWidth}
            leftOffset={leftOffset}
            ref={itemsContainerRef}
          >
            {itemWidth
              ? items.map((item) => (
                  <Styled.Item>
                    <img src={item.img} alt=""></img>
                    <Styled.WrapperHeart>
                      <Styled.Heart src={heart} alt=""></Styled.Heart>
                    </Styled.WrapperHeart>
                  </Styled.Item>
                ))
              : null}
          </Styled.ItemsContainer>
        </Styled.ItemsWrapper>
        <Styled.ArrowContainer
          disabled={!canSwipeRight}
          onClick={handleRightClick}
        >
          {canSwipeRight ? <Styled.ArrowIcon src={arrowRight} alt="" /> : null}
        </Styled.ArrowContainer>
      </Styled.Container>
    </div>
  );
};
export default Carousel;
