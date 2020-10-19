import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NovoProduto from '../pages/NovoProduto';
import NovoUsuario from '../pages/NovoUsuario';
import Produtos from '../pages/Produtos';
import Menu from '../pages/Menu';
import Editar from '../pages/Editar';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={NovoUsuario} />
            <Route path="/Login" component={Login} />
            <Route path="/NovoProduto" component={NovoProduto} />
            <Route path="/Produtos" component={Produtos} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Editar" component={Editar}/>
        </Switch>
    );
}
 export default Routes;