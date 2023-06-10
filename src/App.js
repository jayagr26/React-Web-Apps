import React, { useEffect, useState } from "react";
import "./App.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function App() {
  const [activeUserIndex, setActiveUserIndex] = useState(0);
  const [usersList, setUsersList] = useState([
    "Taylor",
    "Alexa",
    "Srinivasa",
    "Atlantas",
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [newUser, setNewUser] = useState("");

  const handleOnClick = (e) => {
    let id = e.target.id;
    setActiveUserIndex(id);
  };

  const handleOnDelete = (e) => {
    let id = Number(e.currentTarget.id);
    let newUsersList = [...usersList];
    newUsersList = newUsersList.filter((user, index) => index !== id);
    setUsersList(newUsersList);
  };

  return (
    <div className="app">
      <div className="buttons">
        {usersList.map((user, index) => {
          return (
            <div className="button-row" key={index}>
              <button id={index} onClick={handleOnClick}>
                {user}
              </button>
              <DeleteRoundedIcon id={index} onClick={handleOnDelete} />
            </div>
          );
        })}
        <br />
        <button
          onClick={() => {
            setShowAdd(true);
          }}
        >
          ADD USER
        </button>
        {showAdd && (
          <>
            <input
              onChange={(e) => {
                setNewUser(e.target.value);
              }}
              value={newUser}
            ></input>
            <button
              onClick={() => {
                setNewUser("");
                setUsersList([...usersList, newUser]);
                setShowAdd(false);
              }}
            >
              ADD
            </button>
          </>
        )}
      </div>
      <div className="input">
        <textarea></textarea>
        <button>Send mail to {usersList[activeUserIndex]}</button>
      </div>
    </div>
  );
}

export default App;
