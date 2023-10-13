import React from 'react';
import PropTypes from 'prop-types';
import logo from "../../../logo.svg";
import ReadLong from "../../algorithm/ReadLong";
import WriteLong from "../../algorithm/WriteLong";
import JustView from "../../HelpComponents/JustView";
import "./LoginPage.css"

LoginPage.propTypes = {

};

function LoginPage(props:any) {
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
                <a
                    className="App-link"
                    href="/algoritms"
                >
                    Algoritms
                </a>
            </header>
        </div>
    );
}

export default LoginPage;