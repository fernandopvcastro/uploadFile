import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questionario from "./pages/Questionario";
import Aplicacao from "./pages/Aplicacao";

const Routes = () => (
    // <BrowserRouter> // Localhost
    <BrowserRouter basename="/projects/ouronova">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Questionario} />
            <Route exact path="/app" component={Aplicacao} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
