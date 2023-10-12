import React, {ReactNode, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReadLong from "./Components/algorithm/ReadLong";
import WriteLong from "./Components/algorithm/WriteLong";
import ReadLongF from "./functions/long_numbers/read_long";
import JustView from "./Components/HelpComponents/JustView";
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from "./Components/Pages/LoginPage/LoginPage";
import MainBlock from "./Components/MainBlock/MainBlock";
import {PublicRoute} from "./Components/PublicRoute/PublicRoute";
import {PrivateRoute} from "./Components/PrivateRoute/PrivateRoute";

function App() {
    const stringDefaultNamber = "12034567899";
    let [numInArray,setNumInArray] = useState<number[]>([]);
    let handleCallback = (childData:number[]) => {
        setNumInArray(childData );

    }
    const LoginPageNode: (path:string) => ReactNode = (path:string) => {
        return (
            <PublicRoute path={path} >
                <LoginPage/>
            </PublicRoute>
        )
    };
    const MainBlockNode: (path:string) => ReactNode = (path:string) => {
        return (
            <PrivateRoute path={path} >
                <MainBlock/>
            </PrivateRoute>
        )
    };

  return (
    <div className="App">
        <Routes>
            <Route path='/login' element={LoginPageNode('/login')} />
            <Route path='/' element={MainBlockNode('/')} />
        </Routes>
      {/*<ReadLong parentCallback={handleCallback} stringNumber={stringDefaultNamber}/>
      <WriteLong longNumber={numInArray}/>
        <JustView/>*/}
    </div>
  );
}

export default App;
