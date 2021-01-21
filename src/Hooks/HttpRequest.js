import { useEffect, useState } from "react";

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
    });
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRequest({
          loading: false,
          data: json,
        });
      });
  }, [url]);

  return request
}
