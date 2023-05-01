import React from 'react'
import { useState, useContext } from 'react'
import { IssuesContext } from '../context/IssuesProvider'

function IssueForm(props) {

    const { addIssues } = props

    const initState = {
        title: props.title || "", 
        description: props.description || ""
    }

    const [input, setInput] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        //Post to the database
        addIssues(input)
        setInput(initState)
    }


  return (
    <form className='issue-container'onSubmit={handleSubmit}>
        <h1>{props.header}</h1>
        <input
        type="text"
        value={input.title}
        name="title"
        onChange={handleChange}
        placeholder='Concerning Issue'
        />
        <input
        type="text"
        value={input.description}
        name="description"
        onChange={handleChange}
        placeholder='Describe Issue'
        />
        <button>{ props.btnText }</button>
    </form>
  )
}

export default IssueForm