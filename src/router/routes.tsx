import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from '../page';
import Login from '../page/login/Login';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;