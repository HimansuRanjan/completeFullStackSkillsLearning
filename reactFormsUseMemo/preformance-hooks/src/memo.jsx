import React, { useState } from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <div>Child Count: {count}</div>;
});

function Memo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Increment Other</button>
      <Child count={count} />
    </div>
  );
}

export default Memo;
