import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddDessert from './components/Dessert/AddDessert';
import { ApolloProvider } from '@apollo/client';
import {apolloClient} from './Apollo/ApplloClient';


const routing = (<React.StrictMode>
  <ApolloProvider client={apolloClient}>
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/addDessert" component={AddDessert} />
            </Switch>
        </div>
    </Router>
  </ApolloProvider>
</React.StrictMode>); 

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
<React.StrictMode>
    <App />
  </React.StrictMode>

const routing = (<React.StrictMode>
  <Router.Router>
      <div className="page">
          <Router.Switch>
              <Router.Route exact path="/" component={App} />
              <Router.Route exact path="/addDessert" component={AddDessert} />
          </Router.Switch>
      </div>
  </Router.Router>
</React.StrictMode>); */