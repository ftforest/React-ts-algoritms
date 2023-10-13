import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootPage, { loader as rootLoader,action as rootAction, } from "./Components/Pages/RootPage/RootPage";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PersonalAccountPage, {
    loader as contactLoader,
} from "./Components/Pages/PersonalAccountPage/PersonalAccountPage";
import PersonalAccountPageEdit
    from "./Components/Pages/PersonalAccountPage/PersonalAccountPageEdit/PersonalAccountPageEdit";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <PersonalAccountPage />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <PersonalAccountPageEdit />,
                loader: contactLoader,
            },
        ],
    },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
