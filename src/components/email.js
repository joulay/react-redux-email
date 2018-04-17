import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Route} from 'react-router-dom';

export default function Email() {
    return (
        <div className="email">
            <Sidebar />
            
            <main>
                <EmailList folderId="inbox" />
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
                 <Route path="/:folderId" exact component={} />     
              
            </main>
        </div>
    );
}
