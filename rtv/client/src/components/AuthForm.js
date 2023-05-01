import React from 'react'

function AuthForm(props) {
    const { input: {username, password}, handleChange, handleSubmit, btnTxt } = props
  return (
    <form onSubmit={handleSubmit} className='form-wrapper'>
        <input 
        type='text'
        value={username}
        name='username' 
        onChange={handleChange}
        placeholder='username'
        />
        <input 
        type='text'
        value={password}
        name='password'
        onChange={handleChange} 
        placeholder='password'
        />
        <button>{ btnTxt }</button>
    </form>
  )
}

export default AuthForm