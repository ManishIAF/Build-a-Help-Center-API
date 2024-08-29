import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HelpCenterCard from "../components/HelpCenterCard";
import TopPanel from "../components/TopPanel";
import useFetch from "../hooks/fetchhook";

const HelpCenterPage = () => {
  
  const [{ apiData,serverError:error }] = useFetch("api/v1/help-centers");

  const navigate = useNavigate();

  const [Data, setData] = useState(null);

  useEffect(() => {
    if (apiData) {
      setData(apiData?.Data);
    }
  }, [apiData]);

  return (
    <div>
      <TopPanel setData={setData} Data={apiData?.Data} />

      <div
        style={{ display: "flex", justifyContent: "center", padding: "80px" }}
      >
        <div className="help-center-card-container">
          {Data?.length > 0 ? (
            Data?.map((option) => (
              <div
                key={option?._id}
                onClick={() =>
                  navigate(`/help-center/${encodeURIComponent(option?.title)}`)
                }
              >
                <HelpCenterCard
                  title={option?.title}
                  description={option?.description}
                />
              </div>
            ))
          ) : (
            <div>
              {!error?.message ? apiData?.Data?.length === 0 ? (
                <div>
                  <h3>haven't created any...</h3>
                  <button
                    className="submit-request-btn"
                    onClick={() => navigate("/help-form")}
                  >
                    Submit a request
                  </button>
                </div>
              ) : (
                <div>
                  <h3>Data not found</h3>
                </div>
              ):<h3>{error?.message}</h3>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
