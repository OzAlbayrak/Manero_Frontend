import React, { useState, useEffect } from 'react';

const UseFetch = (url) => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw Error("could not fetch the data for that resource");
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
            setError(null);
            console.log(data);
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message);
          });
    }, [url]);

    return { data, loading, error };
};
    
export default UseFetch;

