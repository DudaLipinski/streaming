/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as Styled from "./MediaList.styles";
import Carousel from "./Carousel";

import emptyStar from "../assets/emptyStar.png";
import starImage from "../assets/star.png";
import heartEmpty from "../assets/heartEmpty.png";
import heart from "../assets/heart.png";

const HighlightedItem = ({
  item,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { id, title, description, year, rating } = item;

  const handleWatchNow = () => {
    const params = new URLSearchParams({
      q: `watch ${title} ${"movie"} ${year}`,
    });
    const googleUrl = `https://www.google.com/search?${params.toString()}`;
    window.open(googleUrl, "__blank");
  };

  const handleTrailer = () => {
    const params = new URLSearchParams({
      search_query: `trailer ${title} ${"movie"} ${year}`,
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
  const [favoriteItems, setFavoriteItems] = useState([]);

  const highlightedItem = items?.[highlightedItemIndex];
  if (!highlightedItem) {
    return null;
  }

  const isHighlightedFavorite = favoriteItems.includes(highlightedItem.id);

  const highlightItem = (index) => {
    setHighlightedItemIndex(index);
  };

  const addToFavorites = (id) => {
    setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, id]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteItems((prevFavoriteItems) =>
      prevFavoriteItems.filter((itemId) => itemId !== id)
    );
  };

  return (
    <Styled.Container img={highlightedItem.image.url}>
      <Styled.Blur>
        <HighlightedItem
          item={highlightedItem}
          isFavorite={isHighlightedFavorite}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
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
