import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/fetchhook";

const HelpCenterDetailsPage = () => {
    const { title } = useParams();
    const [{ apiData,serverError:error }] = useFetch(`api/v1/help-centers/${encodeURIComponent(title)}`,{skip: !title});
    console.log('error : ',error)
    const [Data, setData] = useState({});
    // const [error, setError] = useState(null);
    
    console.log(apiData);
    
    useEffect(() => {
        if (apiData) {
            setData(apiData?.Data);
        }
    }, [apiData]);

  return (
    <>
      {error && (
        <div style={{ padding: "10px", minHeight: "50vh", height: "auto" }}>
          <h1>{error?.message}</h1>
        </div>
      )}
      {!error && (
        <div style={{ padding: "10px", minHeight: "50vh", height: "auto" }}>
          <h1>{Data?.title}</h1>
          <p>{Data?.description}</p>
        </div>
      )}
    </>
  );
};

export default HelpCenterDetailsPage;
