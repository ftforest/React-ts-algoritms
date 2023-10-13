import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReadLong from "./Components/algorithm/ReadLong";
import WriteLong from "./Components/algorithm/WriteLong";
import ReadLongF from "./functions/long_numbers/read_long";
import JustView from "./Components/HelpComponents/JustView";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import PersonalAccountPage from "./Components/Pages/PersonalAccountPage/PersonalAccountPage";

function App() {
  return (
    <PersonalAccountPage />
  );
}

export default App;
