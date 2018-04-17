import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Route} from 'react-router-dom';

export default function Email() {
    return (
        <div className="email">
            <Route path="/" exact component={Sidebar} />
            
            <main>
              
      
                 <Route path="/:folderId" exact component={EmailList} />     
                 <Route path="/:folderId/:emailId" exact component={SingleEmail} />
            </main>
        </div>
    );
}
