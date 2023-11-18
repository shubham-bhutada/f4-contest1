import React, { useState } from "react";

const Calculator = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0.0);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (!number1 || number1 === '') {
      setError(true);
      setErrorMsg("Num 1 can not be empty");
    } else if (isNaN(number1)) {
      setError(true);
      setErrorMsg("Num 1 is not an Integer");
    } else if (!number2 || number2 === '') {
      setError(true);
      setErrorMsg("Num 2 can not be empty");
    } else if (isNaN(number2)) {
      setError(true);
      setErrorMsg("Num 2 is not an Integer");
    } else if (e.target.classList.contains("divide") && +number2 === 0) {
      setError(true);
      setErrorMsg("Num 2 can`t be Zero");
    } else {
      setError(false);
      setErrorMsg('');
      if (e.target.classList.contains("plus")) {
        setResult(parseFloat(number1) + parseFloat(number2));
      } else if (e.target.classList.contains("minus")) {
        setResult(parseFloat(number1) - parseFloat(number2));
      } else if (e.target.classList.contains("multiply")) {
        setResult(parseFloat(number1) * parseFloat(number2));
      } else if (e.target.classList.contains("divide")) {
        setResult(parseFloat(number1) / parseFloat(number2));
      }
    }
    setShow(true);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        id="number1"
        name="number1"
        placeholder="Num 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="text"
        id="number2"
        name="number2"
        placeholder="Num 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <div className="buttons">
        <button className="btn plus" onClick={(e) => handleClick(e)}>
          {" "}
          +{" "}
        </button>
        <button className="btn minus" onClick={(e) => handleClick(e)}>
          {" "}
          -{" "}
        </button>
        <button className="btn multiply" onClick={(e) => handleClick(e)}>
          {" "}
          *{" "}
        </button>
        <button className="btn divide" onClick={(e) => handleClick(e)}>
          {" "}
          /{" "}
        </button>
      </div>
      {show && (
        <div className="Msg">
          <h3 className={`status ${error ? "error" : ''}`}>{`${
            error ? "Error!!" : "Success!!"
          }`}</h3>
          <p className="result">{error ? errorMsg : `Result = ${result}`}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
