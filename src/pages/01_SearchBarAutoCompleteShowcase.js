import SearchBarAutoComplete, { searchStringInObjectByKeys } from "../components/SearchBarAutoComplete";

// 1 SearchBar Auto Complete => Airports
const Showcase1 = () => {
  const itemsStore = [
    { id: 1, name: "Le Bourget", city: "Paris" },
    { id: 2, name: "Orly", city: "Paris" },
    { id: 3, name: "Charles de Gaulle", city: "Paris" },
    { id: 4, name: "London", city: "London" },
    { id: 5, name: "Rome", city: "Rome" },
    { id: 6, name: "JFK", city: "New York" },
    { id: 7, name: "Madrid", city: "Madrid" },
  ];
  const itemMatchSearch = searchStringInObjectByKeys(["name", "city"]);
  // LONG FORM TO UNDERSANT WHAT IT DOES :
  //const itemMatchSearch = (object, searchText) => searchStringInObjectByKeys(["name", "city"])(object, searchText);

  return (
    <>
      <h3>1 - Airports</h3>
      <SearchBarAutoComplete placeholder="Search Airports ..." itemsStore={itemsStore} itemMatchSearch={itemMatchSearch} />
    </>
  );
};
// 2 SearchBar Auto Complete => Persons
const Showcase2 = () => {
  const itemsStore = [
    { id: 1, name: "Johan Cruiff", country: "NED" },
    { id: 2, name: "Diego Maradona", country: "ARG" },
    { id: 3, name: "Michael Platini", country: "FRA" },
    { id: 4, name: "Ronaldo", country: "BRA" },
    { id: 5, name: "Ronaldinho", country: "BRA" },
    { id: 6, name: "Zidane", country: "FRA" },
    { id: 7, name: "Roberto Baggio", country: "ITA" },
  ];
  const itemMatchSearch = searchStringInObjectByKeys(["name", "country"]);
  // LONG FORM TO UNDERSANT WHAT IT DOES :
  //const itemMatchSearch = (object, searchText) => searchStringInObjectByKeys(["name", "country"])(object, searchText);

  return (
    <>
      <h3>2 - Football Players </h3>
      <SearchBarAutoComplete placeholder="Search Football Players ..." itemsStore={itemsStore} itemMatchSearch={itemMatchSearch} />
    </>
  );
};

function SearchBarAutoCompleteShowcase() {
  return (
    <section className="App-Page">
      <h1>Search Bar Auto Complete</h1>
      <Showcase1 />
      <Showcase2 />
    </section>
  );
}

export default SearchBarAutoCompleteShowcase;
