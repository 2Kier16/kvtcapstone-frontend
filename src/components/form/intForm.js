import React, { useState } from "react";
import axios from "axios";

export default function addInterest(props) {
  const [interest, setInterest] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const postInterest = (event) => {
    axios
      .post(
        "https://kcapstone-backend.herokuapp.com/interest/add",

        {
          interest: interest,
          zodiac: zodiac,
          book: book,
          author: author,
          description: description,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => {
        console.log(response);
        setBook("");
        setZodiac("");
        setInterest("");
        setAuthor("");
        setDescription("");
        props.handleUpdateInterests();
      })
      .catch((error) => console.error(error));

    event.preventDefault();
  };

  return (
    <div className="add-interest">
      <h1 className="add-interest-title">Visitor Form</h1>
      <h3>
        Thank you for stopping by. Please, fill out the form & then click
        submit.
      </h3>

      <form className="add-interest-form" onSubmit={postInterest}>
        <input
          className="add-interest-form-input"
          onChange={(event) => setInterest(event.target.value)}
          type="text"
          placeholder="An Interest"
          value={interest}
        />
        <input
          className="add-interest-form-input"
          onChange={(event) => setZodiac(event.target.value)}
          type="text"
          placeholder="Your Zodiac Sign"
          value={zodiac}
        />
        <input
          className="add-interest-form-input"
          onChange={(event) => setBook(event.target.value)}
          type="text"
          placeholder="Book You've Read"
          value={book}
        />
        <input
          className="add-interest-form-input"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="Your Name"
          value={author}
        />
        <textarea
          className="add-interest-form-textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description of Self"
        />

        <button className="add-interest-form-button">Submit</button>
      </form>
    </div>
  );
}
