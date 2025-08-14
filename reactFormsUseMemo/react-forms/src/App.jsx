import './App.css';
import React, { useRef, useState } from 'react'

function App() {
  return (
    <div className="App">
      <ControlledForm />
      <br>
      </br>
      <UnControlledForm/>
    </div>
  );
}

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


function UnControlledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Object Ref: ${nameRef} \n Name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          ref={nameRef}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


export default App;
