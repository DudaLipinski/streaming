/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as Styled from "./MediaList.styles";
import Carousel from "./Carousel";

import emptyStar from "../assets/emptyStar.png";
import starImage from "../assets/star.png";
import heartEmpty from "../assets/heartEmpty.png";
import heart from "../assets/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectors as favoritesSelectors,
  actions as favoritesActions,
} from "../state/favorites";

const HighlightedItem = ({ item }) => {
  const { id, title, description, year, titleType, rating } = item;

  const dispatch = useDispatch();
  const favoriteItems = useSelector(favoritesSelectors.getFavorites);

  const isFavorite = favoriteItems.includes(id);

  const addToFavorites = (id) => dispatch(favoritesActions.addFavorite(id));
  const removeFromFavorites = (id) =>
    dispatch(favoritesActions.removeFavorite(id));

  const handleWatchNow = () => {
    const params = new URLSearchParams({
      q: `watch ${title} ${titleType} ${year}`,
    });
    const googleUrl = `https://www.google.com/search?${params.toString()}`;
    window.open(googleUrl, "__blank");
  };

  const handleTrailer = () => {
    const params = new URLSearchParams({
      search_query: `trailer ${title} ${titleType} ${year}`,
    });
    const youtubeUrl = `https://www.youtube.com/results?${params.toString()}`;
    window.open(youtubeUrl, "__blank");
  };

  return (
    <Styled.Centralizer>
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Rating>
          {rating ? (
            <>
              <Styled.Star src={starImage}></Styled.Star>
              <Styled.Star
                src={rating > 2 ? starImage : emptyStar}
              ></Styled.Star>
              <Styled.Star
                src={rating > 4 ? starImage : emptyStar}
              ></Styled.Star>
              <Styled.Star
                src={rating > 6 ? starImage : emptyStar}
              ></Styled.Star>
              <Styled.Star
                src={rating > 8 ? starImage : emptyStar}
              ></Styled.Star>
            </>
          ) : null}
        </Styled.Rating>
        <Styled.WrapperButtons>
          <Styled.Watch onClick={handleWatchNow}>Watch Now</Styled.Watch>
          <Styled.Trailer onClick={handleTrailer}>Trailler</Styled.Trailer>
          <Styled.Heart
            onClick={() =>
              isFavorite ? removeFromFavorites(id) : addToFavorites(id)
            }
            src={isFavorite ? heart : heartEmpty}
            alt=""
          />
        </Styled.WrapperButtons>
      </Styled.Wrapper>
    </Styled.Centralizer>
  );
};

const MediaList = ({ items, carouselTitle }) => {
  const [highlightedItemIndex, setHighlightedItemIndex] = useState(0);

  const dispatch = useDispatch();
  const favoriteItems = useSelector(favoritesSelectors.getFavorites);

  const highlightedItem = items?.[highlightedItemIndex];
  if (!highlightedItem) {
    return null;
  }

  const highlightItem = (index) => {
    setHighlightedItemIndex(index);
  };

  const addToFavorites = (id) => dispatch(favoritesActions.addFavorite(id));
  const removeFromFavorites = (id) =>
    dispatch(favoritesActions.removeFavorite(id));

  return (
    <Styled.Container img={highlightedItem.image.url}>
      <Styled.Blur>
        <HighlightedItem item={highlightedItem} />
        <Carousel
          title={carouselTitle}
          items={items}
          highlightedItemIndex={highlightedItemIndex}
          onItemClick={highlightItem}
          favoriteItems={favoriteItems}
          removeFromFavorites={removeFromFavorites}
          addToFavorites={addToFavorites}
        />
      </Styled.Blur>
    </Styled.Container>
  );
};

export default MediaList;
