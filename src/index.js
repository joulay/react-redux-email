import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Email from './components/email';
import './index.css';

//folderid comes from this initial state
//id: 'inbox' or 'spam'
//email id: 0, 1 
// /inbox/0 will be from billg@microsoft
// we're passing these props to our components and email list
//which has map and putting it <li>'s
const initialState = {
    inbox: {
        id: 'inbox',
        name: "Inbox",
        emails: {
            0: {
                id: 0,
                from: "billg@microsoft.com",
                to: "TeamWoz@Woz.org",
                title: "Possible work opportunity",
                content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
            },
            1: {
                id: 1,
                from: "zuck@facebook.com",
                to: "TeamWoz@Woz.org",
                title: "Do you know PHP?",
                content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
            }
        }
    },
    spam: {
        id: 'spam',
        name: "Spam",
        emails: {
            0: {
                id: 0,
                from: "ChEaPFl1ghTZ@hotmail.com",
                to: "TeamWoz@Woz.org",
                title: "WaNt CHEEp FlitZ",
                content: "Theyre CheEp"
            },
            1: {
                id: 1,
                from: "NiKEAIRJordanZ@hotmail.com",
                to: "TeamWoz@Woz.org",
                title: "JorDanz For SAle",
                content: "Theyre REELY CheEp"
            }
        }
    }
};

const store = createStore(state => state, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Email />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root')
);
