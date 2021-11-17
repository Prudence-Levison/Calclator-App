import React, { useState, useEffect } from "react";

function Calculator() {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState("0");
  const [op, setOp] = useState("null");

  useEffect(() => {}, [op, secondValue, firstValue]);
  const CalculatorOperations = {
    "/": (num1, num2) => num1 / num2,
    "*": (num1, num2) => num1 * num2,
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "=": (num1, num2) => num2,
  };
  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(firstValue),
      parseFloat(secondValue)
    );
    setOp(null);
    setSecondValue(String(temp));
    setFirstValue(null);
  };
  const handleNum = (number) => {
    setSecondValue(secondValue === "0" ? String(number) : secondValue + number);
  };
  const clearData = () => {
    setSecondValue("0");
    setFirstValue(0);
  };

  const whenClicked = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setFirstValue(secondValue);
        setSecondValue("");
      }
      if (op) {
        setOp(value);
      }
      if (firstValue && op && secondValue) {
        performOperation();
      }
    } else if (value === "DEL") {
      clearData();
    } else if (value === "RESET") {
      clearData();
    }
  };
  return (
    <div className="calculator bg1 flex items-center justify-center  xl:py-20 h-screen w-screen">
      <div className="bg1 max-w-full md:max-w-full xl:max-w-full">
        <header className="flex justify-between mb-6">
          <div className="text-white font-bold  xs:text-xl">Calc</div>
          <div className="toggle  flex flex-col items-end">
            <div className="flex text-white xs:text-xl">
              <p className="px-2">1</p>
              <p className="px-2">2</p>
              <p className="px-2">3</p>
            </div>
            <div className="flex items-center">
              <p className="text-white text-xs mr-3 ">THEME</p>

              <div className="t-bg1 p-2 rounded-3xl text-center flex">
                <button className="w-2 h-2  rounded-full ml-2"></button>
                <button className=" w-2 h-2  rounded-full ml-3 "></button>
                <button className=" w-2 h-2  rounded-full  "></button>
                <div className="t-btn1 p-0 w-3 h-3 rounded-full "></div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className=" flex flex col w-full ">
            <input className="s-bg1 p-2 rounded-md w-full "/>
              
          </div>
          <div className=" grid grid-cols-4 gap-4 my-2 t-bg1 rounded-md py-5 px-3">
            <button
              className="n-btn1 rounded-md "
              onClick={whenClicked}
              value="7"
            >
              7
            </button>
            <button
              className="n-btn1 rounded-md "
              onClick={whenClicked}
              value={8}
            >
              8
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={9}
            >
              9
            </button>
            <button className="r-btn1 rounded-md" onClick={whenClicked}>
              DEL
            </button>
            <button
              className="n-btn1 rounded-md "
              onClick={whenClicked}
              value={4}
            >
              4
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={5}
            >
              5
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={6}
            >
              6
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={"+"}
            >
              +
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={1}
            >
              1
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={2}
            >
              2
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={3}
            >
              3
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={"-"}
            />
              
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={"."}
            >
              .
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={0}
            >
              0
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={"/"}
            >
              /
            </button>
            <button
              className="n-btn1 rounded-md"
              onClick={whenClicked}
              value={"*"}
            >
              *
            </button>
            <button
              className="r-btn1 rounded-md col-span-2"
              onClick={whenClicked}
            >
              Reset
            </button>
            <button
              className="e-btn1 rounded-md col-span-2 "
              onClick={whenClicked}
              value={"="}
            >
              =
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Calculator;
