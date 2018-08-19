import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

import App from './components/app';
// import Welcome from './components/welcome';
/*
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Register from './components/auth/register';
import Posts from './components/posts/posts';
import AuthCheck from './components/auth/auth_check';
import AddPost from './components/posts/add_post';
import PostsShow from './components/posts/posts_show';
import EditPost from './components/posts/edit_post';
*/


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    ,document.getElementById('root'));

