import { useState, useEffect } from "react";
import * as Styled from "./Content.styles";
import Carousel from "./Carousel";
import { getMostPopularMovies, getMostPopularTvSeries } from "../services";

import emptyStar from "../assets/emptyStar.png";
import starImage from "../assets/star.png";
import heart from "../assets/heart.png";
import { useParams } from "react-router-dom";

const Content = () => {
  const { type } = useParams();

  const [items, setItems] = useState();
  const [highlightedItem, setHighlightedItem] = useState();
  const [isHighlightedItem, setIsHighlightedItem] = useState();

  const loadMostPopularItems = async () => {
    const getMostPopularItems =
      type === "movies" ? getMostPopularMovies : getMostPopularTvSeries;
    const res = await getMostPopularItems();

    setItems(res);
    setHighlightedItem(res[0]);
  };

  useEffect(() => {
    loadMostPopularItems();
  }, [type]);

  if (!highlightedItem) {
    return <Styled.Title>Loading...</Styled.Title>;
  }

  const handleHighlightItem = (index) => {
    setHighlightedItem(items[index]);
  };

  const { title, year } = highlightedItem.title;
  const img = highlightedItem.title.image.url;
  const description = highlightedItem.plotOutline.text;
  const rating = highlightedItem.ratings.rating;

  const handleWatchNow = () => {
    const params = new URLSearchParams({ q: `watch ${title} ${type} ${year}` });
    const googleUrl = `https://www.google.com/search?${params.toString()}`;
    window.open(googleUrl, "__blank");
  };

  const handleTrailer = () => {
    const params = new URLSearchParams({
      search_query: `trailer ${title} ${type} ${year}`,
    });
    const youtubeUrl = `https://www.youtube.com/results?${params.toString()}`;
    window.open(youtubeUrl, "__blank");
  };

  return (
    <Styled.Container img={img}>
      <Styled.Centralizer>
        <Styled.Wrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.SubTitle></Styled.SubTitle>
          <Styled.Description>{description}</Styled.Description>
          {rating ? (
            <Styled.Rating>
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
            </Styled.Rating>
          ) : null}
          <Styled.WrapperButtons>
            <Styled.Watch onClick={handleWatchNow}>Watch Now</Styled.Watch>
            <Styled.Trailer onClick={handleTrailer}>Trailler</Styled.Trailer>
            <Styled.Heart src={heart} alt="" />
          </Styled.WrapperButtons>
        </Styled.Wrapper>
      </Styled.Centralizer>
      <Carousel items={items} onToggle={handleHighlightItem} />
    </Styled.Container>
  );
};

export default Content;
