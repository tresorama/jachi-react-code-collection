import { useState } from "react";

const useFetching = url => {
  const [dataFetched, setDataFetched] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // do fetch async/await
  const doFetchAsync = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const parsed = await response.json();
      setDataFetched(parsed);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  // do fetch Promised
  const doFetchPromised = () => {
    setIsError(false);
    setIsLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(json => {
        setDataFetched(json);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return {
    dataFetched,
    isLoading,
    isError,
    fetchData: doFetchAsync,
  };
};

export default useFetching;
