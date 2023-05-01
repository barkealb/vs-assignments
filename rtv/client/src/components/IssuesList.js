import React from 'react'
import Issues from './Issues'
import { useEffect } from 'react'


function IssuesList(props) {
  const { issues, deleteIssue, editIssue, getIssues } = props
  useEffect(() => {
    getIssues();
  }, []);
  
  return (
    <div className='issues-card'>
        {issues.map(issues => <Issues
        {...issues}
        key={issues._id}
        deleteIssue={deleteIssue}
        editIssue={editIssue}
        />)}
    </div>
  )
}

export default IssuesList