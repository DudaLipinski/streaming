export const getMediaSummary = (mediaData) => {
  const { id, title, image, year, titleType } = mediaData.title;
  const description = mediaData.plotOutline.text;
  const rating = mediaData.ratings.rating;

  return {
    id,
    title,
    description,
    year,
    titleType,
    image,
    rating,
  };
};
