import React from "react";
const { useRef, useEffect, useReducer } = React;

const initialState = {
  itemsStore: [],
  searchText: "",
  searchResults: [],
};

const searchReducer = (state, action) => {
  if (action.type === "search") {
    const { itemsStore } = state;
    const { searchText, itemMatchSearch } = action;
    const searchResults = itemsStore.filter((item) => itemMatchSearch(item, searchText));
    return { ...state, searchText: action.searchText, searchResults };
  }

  if (action.type === "items-store-changed") {
    return { ...initialState, itemsStore: action.itemsStore };
  }

  throw new Error(`Action : ${action.type} is not supported by this reducer. Maybe it's a typo !!`);
};

const useSearch = (itemsStore, itemMatchSearch) => {
  const itemMatchSearchRef = useRef();
  const [{ searchResults, searchText }, dispatch] = useReducer(searchReducer, initialState);

  const runAutoComplete = ({ searchText }) => {
    dispatch({ type: "search", searchText, itemMatchSearch: itemMatchSearchRef.current });
  };

  useEffect(() => {
    dispatch({ type: "items-store-changed", itemsStore });
  }, [itemsStore]);

  useEffect(() => {
    itemMatchSearchRef.current = itemMatchSearch;
  }, [itemMatchSearch]);

  return {
    searchResults,
    searchText,
    runAutoComplete,
  };
};

export default useSearch;
