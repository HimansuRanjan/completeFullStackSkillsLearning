import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  alert("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function UseCallback() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default UseCallback;
