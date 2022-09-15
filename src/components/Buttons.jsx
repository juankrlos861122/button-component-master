import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

import '../stylesheets/buttons.scss';

export const Buttons = (props) => {
  return(
    <section>
      <h1>Buttons</h1>
      <div className="div-button">
        <p className="label">&#60;Button /&#62;</p>
        <button className="button default">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button variant=”outline” /&#62;</p>
        <button className="button outline">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button variant=”text” /&#62;</p>
        <button className="button text">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button disableShadow /&#62;</p>
        <button className="button disabled-shadow">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button disabled /&#62;</p>
        <button className="button disabled" disabled>Disabled</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button variant=”text” disabled /&#62;</p>
        <button className="button text" disabled>Disabled</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button startIcon=”local_grocery_store” /&#62;</p>
        <button className="button start-icon"><span><FaCartArrowDown /></span> Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button endIcon=”local_grocery_store” /&#62;</p>
        <button className="button end-icon">Default <span><FaCartArrowDown /></span></button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button size=”sm” /&#62;</p>
        <button className="button sm">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button size=”md” /&#62;</p>
        <button className="button md">Default</button>
      </div>

      <div className="div-button">
        <p className="label">&#60;Button size=”lg” /&#62;</p>
        <button className="button lg">Default</button>
      </div>
      
      <div className="div-button">
        <p className="label">&#60;Button color=”Primary” /&#62;</p>
        <button className="button primary">Default</button>
      </div>
      
      <div className="div-button">
        <p className="label">&#60;Button color=”Secondary” /&#62;</p>
        <button className="button secondary">Secondary</button>
      </div>
      
      <div className="div-button">
        <p className="label">&#60;Button color=Danger /&#62;</p>
        <button className="button danger">Default</button>
      </div>
    </section>
  );
}