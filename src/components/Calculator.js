import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";

function Calculator() {
  const [prevValue, setPreValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperation = {
    "/": (num1, num2) => num1 / num2,
    "*": (num1, num2) => num1 * num2,
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "=": (num1, num2) => num2,
  };
  const performOperation = () => {
    let temp = CalculatorOperation[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPreValue(null);
  };
  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };
  const clearData = () => {
    setNextValue("0");
    setPreValue(0);
  };
  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };

  const whenClicked = (value) => {
    // if(value === '7'){
    //   console.log('clearData()')
    // } else {
    //   console.log('Hello')
    // }
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperation) {
      if (op === null) {
        setOp(value);
        setPreValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "DEL") {
      clearData();
    } else if (value === ".") {
      insertDot();
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result">{nextValue}</div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-operators">
          <CalculatorKey className="keys" keyValue={"DEL"} onClick={whenClicked} />
          <CalculatorKey  className="keys" keyValue={"+"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"-"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"*"} onClick={whenClicked} />
        </div>
        <div className="keys-numbers">
          <CalculatorKey  className="keys" keyValue={"9"} onClick={whenClicked} />
          <CalculatorKey  className="keys" keyValue={"8"} onClick={whenClicked} />
          <CalculatorKey  className="keys" keyValue={"7"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"6"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"5"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"4"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"3"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"2"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"1"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"/"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"0"} onClick={whenClicked} />
          <CalculatorKey className="keys" keyValue={"."} onClick={whenClicked} />
        </div>
        <div className="keys-reset">
          <CalculatorKey keyValue={"Reset"} onClick={whenClicked} />
          <CalculatorKey keyValue={"="} onClick={whenClicked} />
        </div>
      </div>
    </div>
  );
}
export default Calculator;
