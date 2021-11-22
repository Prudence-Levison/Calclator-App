/* eslint no-eval: 0 */

import React, { useState, useEffect } from "react";

function Calculator() {
  // setting the state
  const [op, setOp] = useState("null");
  const [inputValue, setInputValue]=useState("0")
  const [background, setBackground] = useState("1");

  const colourChanger = (i) => {
    setBackground(i);
    localStorage.setItem("backgrounds", i);
  };
  
  useEffect(() => {
    const currentBackground = localStorage.getItem("backgrounds");
    if (currentBackground) {
      setBackground(currentBackground);
    }
  }, []);
  
  function handleInput (value){
    const stringValue = value.toString();
    if (value ==="+" || value === "-" || value === "/" || value === "*") {
      setInputValue((prevState) => prevState + " " + value + " ");
    } else {
      if (op !== null) {
        clearValue();
        setOp(null);
        setInputValue((prevState) => prevState + stringValue);
      } else {
        setInputValue((prevState) => prevState + stringValue);
      }
    }
  }
  const clearValue = () => {
    setInputValue("");
  };

  
  const evaluate = () => {
    const splittedString = inputValue.split(" ");
    let invalid = false;



    const newArray = [];

    splittedString.forEach((value) => {
      if (value.startsWith(0)) {
        value = value.replace(/^0+/, '')
      }
      newArray.push(value);
    });

    const newVal = newArray.toString();
    const newNum = newVal.replace(/,/g, " ");

    if (!invalid) {
      const result = eval(newNum);
      setInputValue(result);
      setOp("=");
    }
  };

  const handleDelete = () => {
    setInputValue((prevState) => {
       return prevState.slice(0, -1)
      
    });
    console.log(inputValue)
  };

  return (
    <div
      className={`${
        background === "1"
          ? "main-bg1"
          : background === "2"
          ? "main-bg2"
          : "main-bg3"
      } flex items-center justify-center  xl:py-20 h-screen w-screen`}
    >
      <div className=" p-5 max-w-full md:max-w-full xl:max-w-full">
        <header className="flex justify-between mb-6">
          <div
            className={`${
              background === "2"
                ? "d-color2"
                : background === "3"
                ? "d-color3"
                : "text-white"
            } font-bold  xs:text-xl`}
          >
            Calc
          </div>
          <div className="toggle  flex flex-col items-end">
            <div
              className={`${
                background === "1"
                  ? "text-white"
                  : background === "2"
                  ? "d-color2"
                  : "d-color3"
              } flex  xs:text-xl`}
            >
              <p className="px-2">1</p>
              <p className="px-2">2</p>
              <p className="px-2">3</p>
            </div>
            <div className="flex items-center">
              <p
                className={`${
                  background === "2"
                    ? "d-color2"
                    : background === "3"
                    ? "d-color3"
                    : "text-white"
                }  text-xs mr-3 `}
              >
                THEME
              </p>

              <div className={`${
                  background === "2"
                    ? "t-bg2"
                    : background === "3"
                    ? "t-bg3"
                    : "t-bg1"
                } p-2 rounded-3xl text-center flex`}>
                 <button
                  onClick={() => colourChanger("1")}
                  className={`${
                    background === "1" && "t-btn1"
                  } w-3 h-3 rounded-full  ml-3`}
                ></button>
                <button
                  onClick={() => colourChanger("2")}
                  className={`${
                    background === "2" && "t-btn2"
                  } w-3 h-3 rounded-full ml-3 mr-2`}
                ></button>
                <button
                  onClick={() => colourChanger("3")}
                  className={`${
                    background === "3" && "t-btn3"
                  } w-3 h-3 rounded-full`}
                ></button>
              </div> 
              
             
            </div>
          </div>
        </header>
        <main>
          <div className=" flex flex col w-full ">
            <input
            value={inputValue}
              className={`${
                background === "3"
                  ? "d-color3 s-bg3"
                  : background === "2"
                  ? "d-color2 s-bg2"
                  : "text-white s-bg1"
              } font-bold h-17 rounded-xl text-right p-4 w-full mb-4 xs:p-6`}
            />
          </div>
          <div
            className={`${
              background === "3"
                ? "t-bg3"
                : background === "2"
                ? "t-bg2"
                : "t-bg1"
            } " grid grid-cols-4 gap-4 my-2  rounded-md py-5 px-3`}
          >
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(7)}
              value={7}
            >
              7
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(8)}
              value={8}
            >
              8
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(9)}
              value={9}
            >
              9
            </button>
            <button className={`${
                background === "3" ? "p-btn3  text-white" : background === "2" ? "p-btn2" : "p-btn1 text-white"
              } rounded-lg` }onClick={handleDelete}>
              DEL
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(4)}
              value={4}
            >
              4
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(5)}
              value={5}
            >
              5
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(6)}
              value={6}
            >
              6
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput("+")}
              value={"+"}
            >
              +
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(1)}
              value={1}
            >
              1
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" :background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(2)}
              value={2}
            >
              2
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(3)}
              value={3}
            >
              3
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput("-")}
              value={"-"}
            >-</button>

            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(".")}
              value={"."}
            >
              .
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput(0)}
              value={0}
            >
              0
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput("/")}
              value={"/"}
            >
              /
            </button>
            <button
              className={`${
                background === "3" ? "n-btn3" : background === "2" ? "n-btn2" : "n-btn1"
              } rounded-lg`}
              onClick={()=>handleInput("*")}
              value={"*"}
            >
              *
            </button>
            <button
              className={`${
               background === "3" ? "p-btn3 text-white" : background === "2" ? "r-btn2" : "r-btn1 text-white"
              }  p-0 rounded-lg col-span-2  xs:text-xl text-base`}
              onClick={()=>clearValue()}
            >
              RESET
            </button>
            <button
              className={`${
                background=== "3" ? "e-btn3" : background === "2" ? "e-btn2" : "e-btn1"
              } p-1 rounded-lg col-span-2 xs:text-xl text-base `}
              onClick={evaluate}
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
