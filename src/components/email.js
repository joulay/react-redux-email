import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Switch, Redirect, Route} from 'react-router-dom';

export default function Email() {
    return (
        <div className="email">
            <Sidebar /> 
            <main>
             <Switch>  
                 <Redirect from='/' exact to='/inbox' />
                 <Route path='/:folderId' exact component={EmailList} />     
                 <Route exact path='/:folderId/:emailId' component={SingleEmail} />
            </Switch>     
            </main>
        </div>
    );
}

// /: is a dynamic segment. property on params
// map state to props. also a sub folder, should have email id


// switch only going to get first path ignores everything after 
//switch doesn't look at redirect
