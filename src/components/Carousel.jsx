import { useRef, useEffect, useState } from "react";
import * as Styled from "./Carousel.styles";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import heart from "../assets/heart.png";

const Carousel = ({ items, highlightedItemIndex, onItemClick }) => {
  const itemsContainerRef = useRef();
  console.log(highlightedItemIndex);

  const displayedItemsCount = useRef(6);
  const [itemWidth, setItemWidth] = useState(0);
  const [leftmostItem, setLeftmostItem] = useState(0);

  const lastItemIndex = items.length - 1;
  const rightmostItem = leftmostItem + (displayedItemsCount.current - 1);

  const leftOffset = -(leftmostItem * itemWidth);
  const coverWidth = itemWidth - 30;

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
  }, []);

  useEffect(() => {
    setLeftmostItem(0);
  }, [items]);

  return (
    <div>
      <Styled.CentralizerTitle>
        <Styled.Title>Most popular</Styled.Title>
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
              ? items.map((item, index) => {
                  const isHighlighted = highlightedItemIndex === index;

                  return (
                    <>
                      {isHighlighted ? (
                        <Styled.HighlightedItem
                          onClick={() => onItemClick(index)}
                          key={item.title.title}
                        >
                          <Styled.HighlightedCover
                            src={item.title.image.url}
                            alt=""
                            width={coverWidth + 25}
                          ></Styled.HighlightedCover>
                        </Styled.HighlightedItem>
                      ) : (
                        <Styled.Item
                          onClick={() => onItemClick(index)}
                          key={item.title.title}
                        >
                          <Styled.Cover
                            src={item.title.image.url}
                            alt=""
                            width={coverWidth}
                          ></Styled.Cover>
                        </Styled.Item>
                      )}
                      <Styled.WrapperHeart>
                        <Styled.Heart src={heart} alt=""></Styled.Heart>
                      </Styled.WrapperHeart>
                    </>
                  );
                })
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
