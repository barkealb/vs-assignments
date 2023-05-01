import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import AuthForm from './AuthForm'
import { useState } from 'react'


function Auth() {
    const initState = {
        username: '',
        password: ''
    }
    
    const { signup, login } = useContext(UserContext)

    const [input, setInput] = useState(initState) 

    const [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(prevToggle => !prevToggle)
    }
    
    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSignUp(e){
        e.preventDefault()
        //signUp
        signup(input)
    }

    function handleLogin(e){
        e.preventDefault()
        //Login
        login(input)
    }

      
  return (
    <div className='form-container'>
        <h1>Rock The Vote</h1>
        {!toggle ?
        <>
        <AuthForm
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSignUp}
        btnTxt = "Sign Up"
        />
        <p onClick={handleToggle}>Already a Member!</p>
        </>
        :
        <>
        <AuthForm
        input={input}
        handleChange={handleChange}
        handleSubmit={handleLogin}
        btnTxt = "Login"
        />
        <p onClick={handleToggle}>Become a Member?</p>
        </>
}
    </div>
  )
}

export default Auth