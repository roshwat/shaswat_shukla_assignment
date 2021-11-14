import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    
    const auth = React.useContext(AuthContext);
    console.log("Authenticated Route",auth)
    return (
        <Route
            {...rest}
            render={props =>
            auth.isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/"
                }}
                />
            )
            }
        />
    );
}

export default AuthenticatedRoute;