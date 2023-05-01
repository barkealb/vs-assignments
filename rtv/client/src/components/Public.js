import React, { useContext } from 'react'
import IssueForm from './IssueForm';
import IssuesList from './IssuesList';
import { IssuesContext } from '../context/IssuesProvider';
import { UserContext } from '../context/UserProvider';

function Public(props) {
  const { btnText } = props
  const { user: {username}} = useContext(UserContext);
  const { addIssues, issues, deleteIssue, editIssue, getIssues } = useContext(IssuesContext)

  return (
    <div className='public-container'>
        <h1>Welcome {username}</h1>
        <IssueForm 
        addIssues={addIssues}
        btnText='Post'
        />
        <h3>Your Concerns</h3>
        <IssuesList 
        issues={issues}
        deleteIssue={deleteIssue}
        editIssue={editIssue}
        getIssues= {getIssues}
        />
    </div>
  )
}

export default Public