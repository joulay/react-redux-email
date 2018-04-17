import React from 'react';
import {connect} from 'react-redux';
import './single-email.css';

export function SingleEmail(props) {
    return (
        <div className="single-email">
            <div className="single-email-headers">
                <h2 className="single-email-title">{props.title}</h2>
                <div className="single-email-from"><strong>From: </strong>{props.from}</div>
                <div className="single-email-to"><strong>To: </strong>{props.to}</div>
            </div>
            <div className="single-email-content">
                {props.content}
            </div>
        </div>
    );
}
//state is initial state in redux store (index.js)
//props are from react router dom
const mapStateToProps = (state, props) => {
  const folderId= props.match.params.folderId;//from url or link to anchor tag
  const emailId=props.match.params.emailId;
  const email=state[folderId].emails[emailId]; //dot notation
  return Object.assign({}, email, {
      folderId,
      emailId
  });
};

export default connect(mapStateToProps)(SingleEmail);
//passing what we are declaring as a closure
//passing data from maps to singleEmail