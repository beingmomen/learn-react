import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const data = setInterval(() => {
      console.warn("Hello");
    }, 1000);

    return () => {
      clearInterval(data);
    };
  });

  return (
    <>
      <h1>Timer</h1>
    </>
  );
};

export default Timer;
