import React from "react";
import Memo   from './memo.jsx'
import UseMemo from "./UseMemo.jsx";


function App() {
  return (
    <div>
      <h3>React.Memo</h3>
      <Memo/>

      <br/>

      <h3>useMemo</h3>
      <UseMemo/>

      <br/>
    </div>
  );
}

export default App;
