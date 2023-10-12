import React from 'react';
import { useSelector } from 'react-redux';
import {Link, redirect} from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/slices/auth';
import { APP_ROUTES } from '../../utils/constants';
import NoMatchPage from "../Pages/NoMatchPage/NoMatchPage";

export const PrivateRoute = ({
  path,
  children:Component
}:{path:string, children:any }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const allRoutes = [...APP_ROUTES];
    const isPathExists = allRoutes.some((route) => route === path);
    if (!isPathExists) {
        return <NoMatchPage/>
    }

    if (isLoggedIn) {
        return (
            <>
                {Component}
            </>
        )
    }
    //redirect("/login")
    return (
        <>
            <Link to='/login' >Login</Link>
        </>
    );
};
