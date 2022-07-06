import React, { useEffect } from "react";
import "./Header.css";

export default function Header() {
  useEffect(() => {
    const text = document.querySelector("header h2");
    text.innerHTML = text.innerHTML
      .split("")
      .map((letter, idx) => `<p style='--x:${idx}'>${letter}</p>`)
      .join("");
  }, []);

  return (
    <header>
      <div className="text">
        <h1>ntf</h1>
        <span>Portfolio</span>
      </div>
      <h2>nn team</h2>
    </header>
  );
}
