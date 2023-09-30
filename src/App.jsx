import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "amazon";

const FavS = () => {
  if (favSeries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};

const App = () => (
  <>
    <h1 className="heading_style"> List of Top Netflix Web Series </h1>
    <FavS />
  </>
);

export default App;
