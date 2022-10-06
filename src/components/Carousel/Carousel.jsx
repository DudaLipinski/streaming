import { useRef, useEffect, useState } from "react";
import * as Styled from "./Carousel.styles";
import Centralizer from "../Centralizer";
import {
  selectors as favoritesSelectors,
  actions as favoritesActions,
} from "../../state/favorites";

import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import heartEmpty from "../../assets/heartEmpty.png";
import heart from "../../assets/heart.png";
import { useDispatch, useSelector } from "react-redux";

const Carousel = ({ title, items, highlightedItemIndex, onItemClick }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelectors.getFavorites);

  const addToFavorites = (id) => dispatch(favoritesActions.addFavorite(id));

  const removeFromFavorites = (id) =>
    dispatch(favoritesActions.removeFavorite(id));

  const itemsContainerRef = useRef();
  const displayedItemsCount = useRef(2);

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
    const containerWidth = itemsContainerRef?.current?.clientWidth;
    if (!containerWidth) {
      return;
    }

    if (containerWidth > 600) {
      displayedItemsCount.current = 3;
    }

    if (containerWidth > 768) {
      displayedItemsCount.current = 4;
    }

    if (containerWidth > 1024) {
      displayedItemsCount.current = 5;
    }

    if (containerWidth > 1680) {
      displayedItemsCount.current = 6;
    }

    if (containerWidth > 1920) {
      displayedItemsCount.current = 7;
    }

    const itemWidth = containerWidth / displayedItemsCount.current;
    setItemWidth(itemWidth);
  }, [items]);

  useEffect(() => {
    setLeftmostItem(0);
  }, [items]);

  return (
    <div>
      <Centralizer>
        <Styled.Title>{title}</Styled.Title>
      </Centralizer>
      <Styled.Container>
        <Styled.ArrowButton
          data-testid="left-button"
          onClick={handleLeftClick}
          disabled={!canSwipeLeft}
        >
          {canSwipeLeft ? <Styled.ArrowIcon src={arrowLeft} alt="" /> : null}
        </Styled.ArrowButton>
        <Styled.ItemsWrapper>
          <Styled.ItemsContainer
            itemWidth={itemWidth}
            leftOffset={leftOffset}
            ref={itemsContainerRef}
          >
            {itemWidth
              ? items.map((item, index) => {
                  const isHighlighted = highlightedItemIndex === index;
                  const isFavorite = favorites.includes(item.id);
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
        <Styled.ArrowButton
          data-testid="right-button"
          onClick={handleRightClick}
          disabled={!canSwipeRight}
        >
          {canSwipeRight ? <Styled.ArrowIcon src={arrowRight} alt="" /> : null}
        </Styled.ArrowButton>
      </Styled.Container>
    </div>
  );
};

export default Carousel;
