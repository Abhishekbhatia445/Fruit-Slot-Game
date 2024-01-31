import React, { useState } from "react";
import './Slot.css'
const SlotMachine = () => {
  const symbols = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"];
  const [slots, setSlots] = useState(["🍒", "🍒", "🍒"]);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    // Simulate spinning effect
    setTimeout(() => {
      const newSlots = slots.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
      setSlots(newSlots);
      checkResult(newSlots);
      setSpinning(false);
    },);
  };

  const checkResult = (newSlots) => {
    if (newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
      setResult("You Win!");
      alert("you win")
    } else {
      setResult("Try Again!");
    }
  };

  return (
    <div className="slot-machine">
      <div className="slots">
        {slots.map((symbol, index) => (
          <div key={index} className="slot">
            {symbol}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={spin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
      <div className="result">{result}</div>
    </div>
  );
};

export default SlotMachine;
