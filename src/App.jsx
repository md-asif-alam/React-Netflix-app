import React from "react";
import Card from "./Crads";
import Sdata from "./Sdata";

const App = () => (
  <>
    <h1 className="heading_style"> List of Top Netflix Web Series </h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;
