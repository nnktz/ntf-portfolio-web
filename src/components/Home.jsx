import React from "react";
import "./Home.css";
import bg from "../props/sharp-shape-field-stripes-reflection-3d.jpeg";

export default function Home() {
  return (
    <div className="Home" id="Home">
      <div className="bg">
        <img src={bg} alt="" />
      </div>

      <div className="content">
        <h1>
          <c>eXplore</c> my <d>nft</d> <br />
          collection
        </h1>

        <a href="#collection" className="show-me">
          <span>show me</span>
        </a>
      </div>
    </div>
  );
}
