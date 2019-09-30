import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Rotas
import Main from './pages/main';
import Product from './pages/product';

// import { Container } from './styles';

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

// BrowserRouter, define que a troca de páginas será feita através do navegador
// Switch, nesse contexto, define que apenas uma rota seja chamada ao mesmo tempo
// path = "/", define a página a ser chamada quando a URL for somente o endereço da aplicação