import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const request = await fetch(url);
      const response = await request.json();
      setData(response);
    })();
  }, [url]);

  return data;
}

export function useImageData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const request = await fetch(url);
      const response = await request.json();
      setData(response);
    })();
  }, [url]);

  return data;
}
