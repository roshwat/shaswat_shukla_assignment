import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthenticatedRoute = ({ children, ...rest }) => {
    
    const auth = React.useContext(AuthContext);
    if(auth.isLoggedIn){
        console.log("Authenticated")
    }
    console.log("Authenticated Route",auth)
    return (
        <Route
            {...rest}
            render={props =>
            auth.isLoggedIn ? (
                children
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