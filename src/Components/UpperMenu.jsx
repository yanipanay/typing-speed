import React, { useState } from "react";
import Timer from "./Timer";

function UpperMenu() {
  const [time, setTime] = useState(15);
  // console.log(time);

  const updateTime = (e) => {
    setTime(Number(e.target.id));
    console.log(e.target.id);
  };

  return (
    <div className="timer-header">
      <Timer countDown={time} />
      <div className="modes">
        <div className="time-mode" id={15} onClick={updateTime}>
          15s
        </div>
        <div className="time-mode" id={30} onClick={updateTime}>
          30s
        </div>
        <div className="time-mode" id={60} onClick={updateTime}>
          60s
        </div>
      </div>
    </div>
  );
}

export default UpperMenu;
