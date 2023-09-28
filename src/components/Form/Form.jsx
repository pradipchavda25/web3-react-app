import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [selectedAsset, setSelectedAsset] = useState("eth");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [displayedAmount, setDisplayedAmount] = useState("");
  const [textInputTimeout, setTextInputTimeout] = useState(null);

  const handleAssetChange = (event) => {
    setSelectedAsset(event.target.value);
  };

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue) && inputValue <= 200) {
      setBorrowAmount(inputValue);
      clearTimeout(textInputTimeout);
      const newTimeout = setTimeout(() => {
        setDisplayedAmount(inputValue);
      }, 1500);
      setTextInputTimeout(newTimeout);
    }
  };

  return (
    <div className="form">
      <div className="left">
        <div className="asset-menu">
          <label className="input-labels" htmlFor="coins">
            Select Assets
          </label>
          <select id="coins" value={selectedAsset} onChange={handleAssetChange}>
            <option value="eth">ETH</option>
            <option value="bitcoin">BITCOIN</option>
            <option value="polkadot">POLKADOT</option>
            <option value="filecoin">FILECOIN</option>
          </select>
        </div>
        <div className="ammount">
          <div className="ammount-label">
            <label className="input-labels" htmlFor="ammont">
              Borrow Ammont
            </label>
            <span className="badge">Max Held Ammont: 200</span>
          </div>
          <input
            type="text"
            id="ammont"
            placeholder="Enter Supply Ammont"
            value={borrowAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="black-box">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="execute-button">
          <button>Execute</button>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <span className="badge2">Entered Ammont Is: {displayedAmount}</span>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
