export const getMediaSummary = (mediaData) => {
  const { id, title, image, year } = mediaData.title;
  const description = mediaData.plotOutline.text;
  const rating = mediaData.ratings.rating;

  return {
    id,
    title,
    description,
    year,
    image,
    rating,
  };
};
