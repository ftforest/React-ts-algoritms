import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootPage, { loader as rootLoader,action as rootAction, } from "./Components/Pages/RootPage/RootPage";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import PersonalAccountPage, { loader as contactLoader,action as contactAction,} from "./Components/Pages/PersonalAccountPage/PersonalAccountPage";
import PersonalAccountPageEdit, {action as editAction,} from "./Components/Pages/PersonalAccountPage/PersonalAccountPageEdit/PersonalAccountPageEdit";
import {action as destroyAction} from "./Components/Pages/PersonalAccountPage/PersonalAccountPageDestroy/PersonalAccountPageDestroy";
import Index from "./Components/Pages/Index/Index";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        loader: rootLoader,
        action: rootAction,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Index />
                    },
                    {
                        path: "contacts/:contactId",
                        element: <PersonalAccountPage />,
                        loader: contactLoader,
                        action: contactAction
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <PersonalAccountPageEdit />,
                        loader: contactLoader,
                        action: editAction
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>
                    }
                ],
            }
        ],
    },

]);
// JSX Routes
const router2 = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootPage />}
            loader={rootLoader}
            action={rootAction}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Index />} />
                <Route
                    path="contacts/:contactId"
                    element={<PersonalAccountPage />}
                    loader={contactLoader}
                    action={contactAction}
                />
                <Route
                    path="contacts/:contactId/edit"
                    element={<PersonalAccountPageEdit />}
                    loader={contactLoader}
                    action={editAction}
                />
                <Route
                    path="contacts/:contactId/destroy"
                    action={destroyAction}
                />
            </Route>
        </Route>
    )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
