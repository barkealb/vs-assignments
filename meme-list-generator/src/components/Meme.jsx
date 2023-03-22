import React from "react";
import axios from "axios";
import MemeList from "./MemeList";
import { v4 as uuidv4 } from "uuid";

export default function Meme(props) {
  // Initial state for the meme being created
  const initState = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    id: "",
  };

  // State to manage the current meme being created
  const [meme, setMeme] = React.useState(initState);

  // State to store all memes retrieved from the API
  const [allMemes, setAllMemes] = React.useState([]);

  // State to store all the memes created by the user
  const [memesArray, setMemesArray] = React.useState([]);

  // State to track whether the user is currently editing a meme
  const [isEdit, setIsEdit] = React.useState(false);

  // Make a GET request to the API to retrieve all memes
  React.useEffect(() => {
    async function getMemes() {
      const res = await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => setAllMemes(res.data.data.memes));
    }
    getMemes();
  }, []);

  // Function to get a random meme image from the API
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Function to handle input changes and update the current meme state
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // Function to handle the submission of a new meme or the editing of an existing meme
  function handleSubmit(event) {
    event.preventDefault();
    if (isEdit === false) {
      // If creating a new meme, add a unique ID and add to the memes array
      const newMeme = { ...meme, id: uuidv4() };
      setMemesArray((prevMemesArray) => [...prevMemesArray, newMeme]);
    } else if (isEdit === true) {
      // If editing a meme, update the specific meme in the memes array
      setIsEdit(false);
      setMemesArray((prevMeme) => {
        return prevMeme.map((item) => {
          return item.id === meme.id ? { ...meme } : { ...item };
        });
      });
    }

    // Reset the input fields for the current meme
    setMeme(initState);
  }

  /*This section maps over the created memes and renders each one in the component MemeList. It also passes down 
   the deleteMeme and editMeme functions, as well as the entire memesArray to the component MemeList for use.*/
  const memes = memesArray.map((meme, index) => {
    return (
      <MemeList
        key={index}
        {...meme}
        deleteMeme={deleteMeme}
        editMeme={editMeme}
        memesArray={memesArray}
      />
    );
  });

  /*This function is called when the user clicks the delete button on a specific meme. It filters through the 
    memesArray and removes the meme with the matching id.*/
  function deleteMeme(id) {
    console.log("deleted meme", id);
    setMemesArray((prevMemesArray) =>
      prevMemesArray.filter((meme) => meme.id !== id)
    );
  }

  /*This function is called when the user clicks the edit button on a specific meme. It sets the isEdit state to
     true, and sets the state of the meme variable to the meme that the user wants to edit.*/
  function editMeme(id) {
    setIsEdit(true);
    console.log("edit meme", id);
    setMeme(memesArray.find((meme) => meme.id === id));
  }

  // The return statement is where the JSX code is rendered to the DOM
  return (
    <main className={props.darkMode ? "dark" : ""} >
      <h1 className="hero-description">
        The Fastest Meme Generator on the Planet. Easily add text to memes.
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-btn" onClick={getMemeImage} type="button">
          Get a new meme image <i className="fa-solid fa-shuffle"></i>
        </button>
        <button className="submit-btn" type="submit">
          Submit <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
      <div className="meme-wrapper">
        <img className="random-image image" src={meme.randomImage} alt="" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      {/* This div used to display all of the created memes using the map function and the MemeList component */}
      <div className="memes-container">{memes}</div>
    </main>
  );
}
