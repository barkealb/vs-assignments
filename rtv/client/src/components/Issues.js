import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import IssueForm from './IssueForm'
import { IssuesContext } from '../context/IssuesProvider';

function Issues(props) {

  const { issues } = useContext(IssuesContext)
  
 
  const {title, description, _id, deleteIssue, editIssue, btnText} = props
 
  const initState = {
    title: title || "",
    description: description || ""
  }

  const [likes, setLikes] = useState(0)
  
  const [issuesInputs, setIssuesInputs] = useState(initState)
  

  const [isEditing, setIsEditing] = useState(false)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
    setIsEditing(!isEditing)
  };

  function handleEdit() {
    setIsEditing(!isEditing)
    handleShow()
  }

  function handleDelete() {
    deleteIssue(_id);
  }

  function handleSave(e) {
    e.preventDefault()
    editIssue(_id, issuesInputs)
    setIsEditing(false)
    handleClose()
  }

  function handleLike(){
    setLikes(likes + 1);
  }

  return (
    <div className='issues-wrapper'>
      <div className='issue-cont'>
      <Dropdown 
      drop="start"
      >
      <Dropdown.Toggle 
      className='text-dark bg-transparent border-0'
      id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
        <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleLike}>UpVote</button>
        <button onClick={() => handleLike(likes - 1)}>DownVote</button>
        <p>{likes} likes</p>
      </div> 
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <input
        className="popup-input"
                  value={issuesInputs.title}
                  onChange={e => setIssuesInputs({ ...issuesInputs, title: e.target.value })}
                  placeholder="title" />
        <input
                className="popup-textarea"

                  value={issuesInputs.description}
                  onChange={e => setIssuesInputs({ ...issuesInputs, description: e.target.value })}
                  placeholder="Description" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>  
    </div>
  )
}

export default Issues