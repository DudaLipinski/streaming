/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors as searchSelectors } from "../state/search";

const useSearchable = (items) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const search = useSelector(searchSelectors.getSearch);

  useEffect(() => {
    const filteredItems = search
      ? items.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        )
      : items;

    setFilteredItems(filteredItems);
  }, [items, search]);

  return filteredItems;
};

export default useSearchable;
