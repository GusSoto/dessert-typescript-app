import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import AddDessert from './components/Dessert/AddDessert';


export const routes = <Switch>
    <Route exact path='/' component={ App } />
    <Route exact path="/addDessert" component={AddDessert} />
</Switch>;