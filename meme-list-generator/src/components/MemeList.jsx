import React from 'react'

export default function MemeList(props) {

  const {
    topText,
    bottomText,
    randomImage,
    id
  } = props

  return (
      <div className='meme-wrapper'>
        <img className="meme-image image" src={randomImage} alt="None" />
        <h2 className='meme-text top'>{topText}</h2>
        <h2 className='meme-text bottom-text'>{bottomText}</h2>
        <div className="buttons-container">
          <button 
            className='btn edit-btn'
            onClick={()=>props.editMeme(id)}
            >
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
          <button 
            className='btn delete-btn' 
            onClick={()=>props.deleteMeme(id)}
            >
            <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
      </div>
  )
}
