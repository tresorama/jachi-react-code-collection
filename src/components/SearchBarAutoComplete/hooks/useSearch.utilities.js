// Also export an utility function used to build the "itemMatchSearch" function.
// it's common that items are object, and you serach a partial string inside value of the object properties.
// but you want to search only in some of them properties, excluding date for example
const inString = (string, searchText) => {
  if (!searchText) return false;
  return String(string).toLowerCase().indexOf(String(searchText).toLowerCase()) > -1;
};
const searchStringInObjectByKeys = (keysToSearch) => {
  return (obj, searchText) => {
    return keysToSearch.some((key) => inString(obj[key], searchText));
  };
};

export { searchStringInObjectByKeys };
