import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import { Router, Route} from 'react-router-dom';
import history from './history';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import UserDetails from './components/userDetails';
import EditDetails from './components/editDetails';

ReactDOM.render( 
    <Provider  store = {store}>
        <Router history= {history}>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/userdetails' component={UserDetails} />
            <Route path='/editdetails' component={EditDetails} />
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
