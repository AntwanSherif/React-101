import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import BasketPage from './pages/BasketPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={ProductsPage} />
            <Route exact path='/basket' component={BasketPage} />
        </Switch>
        
    )
}
