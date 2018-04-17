import React from 'react';
import {connect} from 'react-redux';
import './email-list.css';
import {Link} from 'react-router-dom';

export function EmailList(props) {
    const emails = props.emailList.map(email =>
        <li className="email-list-email" key={email.id}>
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
                <Link to={`/${props.folderId}/${email.id}`}> {email.title} </Link>
            </div>
        </li>
    );

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}
//match is a prop provided by react router
//this will be key, and actual word will be the value 
const mapStateToProps = (state, props) => {
    const folderId = props.match.params.folderId;
    const folder = state[folderId]; //looking for state.inbox or state.spam. 
    //selects property from object where name is a variable
    return {
        folderId,
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(
            emailId => folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
