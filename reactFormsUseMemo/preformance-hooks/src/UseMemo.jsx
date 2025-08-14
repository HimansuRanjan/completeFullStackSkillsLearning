import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Memoized Value: {memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Increment Other</button>
    </div>
  );
}

export default UseMemo;
