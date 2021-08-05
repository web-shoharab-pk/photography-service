import React, { useContext } from 'react';
import { Redirect, Route, } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
    const { loggedUser } = useContext(UserContext);
console.log(loggedUser);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRouter;