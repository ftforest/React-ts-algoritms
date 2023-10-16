import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReadLong from "./Components/algorithm/ReadLong";
import WriteLong from "./Components/algorithm/WriteLong";
import ReadLongF from "./functions/long_numbers/read_long";
import JustView from "./Components/HelpComponents/JustView";
import PortfolioStyle1 from "./Pages/Tailwind/Portfolio/PortfolioStyle1";
import PortfolioStyle2 from "./Pages/Tailwind/Portfolio/PortfolioStyle2";

function App() {
  return (
    <div className="container mx-auto font-">
      <PortfolioStyle1 />
      <PortfolioStyle2 />
    </div>
  );
}

export default App;
