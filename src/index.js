import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Crads";
import Sdata from "./Sdata";

// function ncard(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of Top Netflix Web Series </h1>
    {Sdata.map(function ncard(val) {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
