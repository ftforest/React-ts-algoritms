import React from 'react';
import PropTypes from 'prop-types';
import { useRouteError } from "react-router-dom";

ErrorPage.propTypes = {
    
};

function ErrorPage(props:any) {
    const error:any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;