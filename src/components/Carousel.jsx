import { useRef, useEffect, useState } from "react";
import * as Styled from "./Carousel.styles";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import heartEmpty from "../assets/heartEmpty.png";
import heart from "../assets/heart.png";

const Carousel = ({
  title,
  items,
  highlightedItemIndex,
  onItemClick,
  favoriteItems,
  removeFromFavorites,
  addToFavorites,
}) => {
  const itemsContainerRef = useRef();

  const displayedItemsCount = useRef(6);
  const [itemWidth, setItemWidth] = useState(0);
  const [leftmostItem, setLeftmostItem] = useState(0);

  const lastItemIndex = items.length - 1;
  const rightmostItem = leftmostItem + (displayedItemsCount.current - 1);

  const leftOffset = -(leftmostItem * itemWidth);
  const coverWidth = itemWidth - 30;

  const canSwipeLeft = leftmostItem > 0;
  const canSwipeRight =
    lastItemIndex !== rightmostItem &&
    items.length > displayedItemsCount.current;

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
        <Styled.Title>{title}</Styled.Title>
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
                  const isFavorite = favoriteItems.includes(item.id);
                  const { id, title, image } = item;
                  const { url } = image;

                  const IconHeart = () => (
                    <Styled.WrapperHeart>
                      <Styled.Heart
                        onClick={() =>
                          isFavorite
                            ? removeFromFavorites(id)
                            : addToFavorites(id)
                        }
                        src={isFavorite ? heart : heartEmpty}
                        alt=""
                      ></Styled.Heart>
                    </Styled.WrapperHeart>
                  );

                  return isHighlighted ? (
                    <Styled.HighlightedItem key={id}>
                      <Styled.HighlightedCover
                        src={url}
                        alt={title}
                        width={coverWidth}
                        onClick={() => onItemClick(index)}
                      ></Styled.HighlightedCover>
                      <IconHeart />
                    </Styled.HighlightedItem>
                  ) : (
                    <Styled.Item key={id}>
                      <Styled.Cover
                        src={url}
                        alt={title}
                        width={coverWidth}
                        onClick={() => onItemClick(index)}
                      ></Styled.Cover>
                      <IconHeart />
                    </Styled.Item>
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
