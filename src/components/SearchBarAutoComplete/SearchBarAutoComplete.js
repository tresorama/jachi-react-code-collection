import React from "react";
import useSearch from "./hooks/useSearch";

// atoms components used in this file...
const InputText = ({ value, onChange, icon, style, ...rest }) => {
  const styles = {
    wrapper: {
      backgroundColor: "white",
      padding: "4px 8px",
      borderRadius: "5px",
      border: "1px solid grey",
    },
    input: {
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      color: "black",
      fontFamily: "inherit",
      lineHeight: "2.5em",
    },
  };
  return (
    <div style={{ ...styles.wrapper, ...(style || {}) }}>
      {icon && icon}
      <input {...rest} type="text" value={value} onChange={(e) => onChange(e.currentTarget.value)} style={styles.input} />
    </div>
  );
};

// css
const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  resultsPanel: {
    display: "flex",
    flexDirection: "column",

    overflow: "hidden",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    borderRadius: "8px",
    // transform: "translateY(-5px)",
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    // border: "1px solid grey",
  },
  resultsItem: {
    backgroundColor: "lightgrey",
    border: 0,
    borderRadius: 0,
  },
};

// styled components
const Wrapper = (props) => <div style={styles.wrapper} {...props} />;
const ResultsPanel = (props) => <div style={styles.resultsPanel} {...props} />;
const ResultsItem = (props) => <InputText readOnly style={styles.resultsItem} {...props} />;

// main component

const SearchBarAutoComplete = ({ itemsStore, itemMatchSearch, placeholder }) => {
  const { searchText, searchResults, runAutoComplete } = useSearch(itemsStore, itemMatchSearch);

  return (
    <Wrapper>
      <InputText placeholder={placeholder} value={searchText} onChange={(text) => runAutoComplete({ searchText: text })} />
      <ResultsPanel>
        {searchResults.map((item, i) => (
          <ResultsItem key={i} value={item.name} />
        ))}
      </ResultsPanel>
    </Wrapper>
  );
};

export default SearchBarAutoComplete;
