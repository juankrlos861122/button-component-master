import React from "react";
import '../stylesheets/menu.scss';

export const Menu = () => {
  return (
    <header>
      <h2>
        <span>Dev</span>Challenges.io
      </h2>
      <nav>
        <ul>
          <li className="item1"><a href="#">Colors</a></li>
          <li className="item2"><a href="#">Typography</a></li>
          <li className="item3"><a href="#">Spaces</a></li>
          <li className="item4"><a href="#">Buttons</a></li>
          <li className="item5"><a href="#">Inputs</a></li>
          <li className="item6"><a href="#">Grid</a></li>
        </ul>
      </nav>
    </header>
  );
}