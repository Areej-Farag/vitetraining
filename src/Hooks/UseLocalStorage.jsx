import React, {  useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const StoredValue = localStorage.getItem(key);
      return StoredValue ? JSON.parse(StoredValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [value, key]);

  return initialValue ? [initialValue, setValue] : [value, setValue];
}

export default useLocalStorage;
