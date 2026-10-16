import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Digital Clock</h1>

      <h2>{time.toLocaleTimeString()}</h2>
      <br />
      <h2>{time.toDateString()}</h2>
    </>
  );
};

export default Clock;