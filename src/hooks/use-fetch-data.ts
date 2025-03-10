import { AxiosPromise, CanceledError } from "axios";

interface Data {
  data: AxiosPromise
}
import { useEffect, useState } from "react";

const useFetchData = (apiCallFn: () => AxiosPromise<Data>, deps: []) => {
  const [data, setData] = useState<Data[] | Data>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      setLoading(true);
      const request = apiCallFn();
      request
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error: Error) => {
          if (error instanceof CanceledError) return;
          setError(error);
          setLoading(false);
        });

    }, [apiCallFn, deps]);

  return { data, loading, error };
};

export default useFetchData;