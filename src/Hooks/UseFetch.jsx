import React, { useEffect , useState } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
