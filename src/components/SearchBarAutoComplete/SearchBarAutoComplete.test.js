import SearchBarAutoComplete, { searchStringInObjectByKeys, testData } from "./index";

const SearchBarAutoCompleteTest = () => {
  const itemsStore = testData.items;
  const itemMatchSearch = searchStringInObjectByKeys(["name", "city"]);

  return (
    <SearchBarAutoComplete
      placeholder="Search Airports ..."
      itemsStore={itemsStore}
      itemMatchSearch={itemMatchSearch}
    />
  );
};

export default SearchBarAutoCompleteTest;
