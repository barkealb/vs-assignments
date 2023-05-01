import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'

const IssuesContext = createContext()

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function IssuesProvider(props) {

    const initState = {
        issues: [], 
        comments: []
    };


    const [issuesState, setIssuesState] = useState(initState)

    function removeIssues(){
      setIssuesState({
        issues: [],
        comments: []
      })
    }

    function getIssues(){
        userAxios.get('/api/issues/user')
        .then(res => setIssuesState(prevState => {
          return {
            ...prevState,
            issues: res.data
          }
        }))
        .catch(err => console.log(err))
    }

    function addIssues(newIssue){
        userAxios.post('/api/issues', newIssue)
        .then(res => setIssuesState(prevState => {
          return {
            ...prevState, 
            issues: [...prevState.issues, res.data],
            comments: [...prevState.comments, res.data]
          }
        }))
        .catch(err => console.log(err))
    }

    function deleteIssue(issueId){ 
      userAxios.delete(`/api/issues/${issueId}`)
      .then(res => setIssuesState(prevState => {
        return {
          ...prevState, 
          issues: prevState.issues.filter(issues => issues._id !== issueId)
        }
      }))
      .catch(err => console.log(err))
    }

    function editIssue( issueId, updatedIssue) {
      console.log(issueId, updatedIssue)
      userAxios.put(`/api/issues/${issueId}`, updatedIssue)
        .then(res => {
          setIssuesState(prevState => {
            return {
              ...prevState,
            issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
            }
          })
        })
        .catch(err => console.log(err))
  }

  return (
    <IssuesContext.Provider
    value={{...issuesState, addIssues, getIssues, removeIssues, deleteIssue, editIssue}}
    >
        {props.children}
    </IssuesContext.Provider>
  )
}

export  { IssuesContext, IssuesProvider }