import React, { useContext } from 'react'
import axios from 'axios'
import { createContext, useState } from 'react'
import { IssuesContext } from './IssuesProvider'

const UserContext = createContext()

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function UserProvider(props) {

  const { getIssues, removeIssues } = useContext(IssuesContext)

  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') ||"",
  }

  const [userState, setUserState] = useState(initState)

  function signup(cred){
    axios.post('/auth/signup', cred)
    .then(res => {
      const {user, token} = res.data
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem('token', token)
      setUserState(prevState => {
        return {
          ...prevState, 
          user,
          token
        }
      })
    })
    .catch(err => console.log(err))
  }

  function login(cred){
    axios.post('/auth/login', cred)
    .then(res => {
      const {user, token} = res.data
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem('token', token)
      getIssues()
      setUserState(prevState => {
        return {
          ...prevState, 
          user,
          token
        }
      })
    })
    .catch(err => console.log(err))
  }

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    setUserState({
      user: {},
      token: "",
      issuesState: []
    })
    removeIssues()
  }


  return (
    <UserContext.Provider
    value={{...userState, signup, login, logout}}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }