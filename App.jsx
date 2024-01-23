import "./App.css";
import { useState } from "react";

export function App() {
  const [exp, setExp] = useState("");
  function Calculation(digit) {
    setExp((prevExp) => {
      let newExp = prevExp;

      if (digit === "C") {
        newExp = "";
      } else if (digit === "B") {
        newExp = newExp.slice(0, -1);
      } else if (digit === "=") {
        try {
          newExp = eval(newExp).toString();
        } catch (error) {
          newExp = "Error";
        }
      } else {
        newExp = newExp + digit;
      }
      return newExp;
    });
  }

  const display = [
    "7",
    "8",
    "9",
    "%",
    "C",
    "4",
    "5",
    "6",
    "/",
    "*",
    "1",
    "2",
    "3",
    "+",
    "-",
    "00",
    "0",
    ".",
    "B",
    "=",
  ];
  return (
    <>
      <h1 className="heading">Calsi</h1>
      <div className="base">
        <div className="lblock">
          <h2 className="exp">
            {exp ||
              "You will see your entered value and calculated result here ! ㋡㋡"}
          </h2>
        </div>
        <div className="rblock">
          {display.map((i) => (
            <button
              key={i}
              className="btn btn-outline-secondary btn-lg"
              onClick={() => Calculation(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
