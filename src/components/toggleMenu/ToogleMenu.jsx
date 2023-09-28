import React from "react";
import "./ToogleMenu.css";

export default function ToogleMenu() {
  return (
    <div className="pricing-toggle">
      <input
        type="radio"
        id="pricing-toggle-Open"
        name="pricing"
        value="Open"
        defaultChecked
      />
      <label className="radio-button" htmlFor="pricing-toggle-Open">
        {" "}
        Open
      </label>

      <input
        type="radio"
        id="pricing-toggle-Close"
        name="pricing"
        value="Close"
      />
      <label className="radio-button" htmlFor="pricing-toggle-Close">
        {" "}
        Close
      </label>

      <input
        type="radio"
        id="pricing-toggle-Boost"
        name="pricing"
        value="Boost"
      />
      <label className="radio-button" htmlFor="pricing-toggle-Boost">
        {" "}
        Boost
      </label>
    </div>
  );
}
