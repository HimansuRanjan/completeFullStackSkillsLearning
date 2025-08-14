import React from "react";
import Memo   from './memo.jsx'
import UseMemo from "./UseMemo.jsx";
import UseCallback from "./UseCallback.jsx";
import UseRef from "./UseRef.jsx";


function App() {
  return (
    <div>
      <h3>React.Memo</h3>
      <Memo/>

      <br/>

      <h3>useMemo</h3>
      <UseMemo/>

      <br/>

      <h3>useCallback</h3>
      <UseCallback/>

      <br/>

      <h3>useRef</h3>
      <UseRef/>

      <br/>
    </div>
  );
}

export default App;
