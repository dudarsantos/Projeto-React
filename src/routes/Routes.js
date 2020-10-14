import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NovoProduto from '../pages/NovoProduto';
import NovoUsuario from '../pages/NovoUsuario';
import EditarProduto from '../pages/EditarProduto';
import Menu from '../pages/Menu';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={NovoUsuario} />
            <Route path="/Login" component={Login} />
            <Route path="/NovoProduto" component={NovoProduto} />
            <Route path="/EditarProduto" component={EditarProduto} />
            <Route path="/Menu" component={Menu} />
        </Switch>
    );
}
 export default Routes;