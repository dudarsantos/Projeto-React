import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NovoUsuario from '../pages/NovoUsuario';
import NovoProduto from '../pages/NovoProduto';
import EditarProduto from '../pages/EditarProduto';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={NovoUsuario} />
            <Route path="/Login" component={Login} />
            <Route path="/NovoProduto" component={NovoProduto} />
            <Route path="/EditarProduto" component={EditarProduto} />
        </Switch>
    );
}
 export default Routes;