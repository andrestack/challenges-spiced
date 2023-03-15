import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Our Japan Trip</h2>
      <label id="tag" htmlFor="Our Trip"></label>
      <input id="tag" type="text" htmlFor="" />
      
      <a
        href="https://en.wikipedia.org/wiki/Japan"
        alt="Go to Japan"
        className="article__link"
      >
        クリックミー
      </a>
    </article>
  );
}
