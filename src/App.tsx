import { useState, useEffect } from "react";
import { NavLinks } from "./interfaces";
// import Timer from "./components/timer";

const App = () => {
  // const [isTimerOn, setIsTimerOn] = useState(true);
  const [count, setCount] = useState(0);
  const [links, setLinks] = useState<NavLinks[]>([]);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/independent");
    console.log("data :>> ", data);
    return data;
  };

  // fetchData();

  useEffect(() => {
    fetchData()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res :>> ", res);
        setLinks(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }, [count]);

  return (
    <>
      {/* {isTimerOn && <Timer />}
      <button
        className="bg-gray-500 rounded px-4 py-2 text-white cursor-pointer"
        onClick={() => setIsTimerOn(!isTimerOn)}
      >
        {isTimerOn ? "Stop Timer" : "Start Timer"}
      </button> */}
      <h1 className="text-4xl font-bold">Hello</h1>
      <button
        className="bg-gray-500 rounded px-4 py-2 text-white cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
