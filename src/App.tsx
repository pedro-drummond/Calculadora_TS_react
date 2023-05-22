import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string>('');

  const handleNumberClick = (number: number) => {
    setDisplayValue(prevValue => (prevValue === '0' ? String(number) : prevValue + number));
  };

  const handleOperatorClick = (operator: string) => {
    if (firstOperand === null) {
      setFirstOperand(Number(displayValue));
      setDisplayValue('0');
      setOperator(operator);
    } else {
      calculateResult();
      setOperator(operator);
    }
  };

  const calculateResult = () => {
    const secondOperand = Number(displayValue);
    let result: number;

    switch (operator) {
      case '+':
        result = firstOperand! + secondOperand;
        break;
      case '-':
        result = firstOperand! - secondOperand;
        break;
      case '*':
        result = firstOperand! * secondOperand;
        break;
      case '/':
        result = firstOperand! / secondOperand;
        break;
      default:
        return;
    }

    setDisplayValue(String(result));
    setFirstOperand(result);
  };

  const handleEqualClick = () => {
    if (firstOperand !== null && operator !== '') {
      calculateResult();
      setOperator('');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleEqualClick()}>=</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClearClick()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default App;
