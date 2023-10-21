import React, { useEffect, useState } from "react";

function Timer(prop) {
  useEffect(() => {
    setTime(prop.countDown);
  }, [prop]);
  const [time, setTime] = useState(Number(prop.countDown));
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time !== 0) setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return <div>{time} s</div>;
}

export default Timer;
