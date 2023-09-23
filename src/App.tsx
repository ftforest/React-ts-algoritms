import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReadLong from "./Components/algorithm/ReadLong";
import WriteLong from "./Components/algorithm/WriteLong";
import ReadLongF from "./functions/long_numbers/read_long";

function App() {
    const stringDefaultNamber = "12034567899";
    let [numInArray,setNumInArray] = useState<number[]>([]);
    let handleCallback = (childData:number[]) => {
        setNumInArray(childData );
        console.log(childData,'childData')
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <h1> </h1>
      <ReadLong parentCallback={handleCallback} stringNumber={stringDefaultNamber}/>
      <WriteLong longNumber={numInArray}/>
    </div>
  );
}

export default App;
