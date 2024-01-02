import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CardInput from "./CardInput";
import CardFlip from "./CardFlip";

function CardList() {
  const [view, setView] = useState("");

  const handleAddWord = () => {
    setView("addWord");
  };

  const handleCardFlip = () => {
    setView("cardFlip");
  };

  const [words, setWords] = useState([
    {
      id: 1,
      turkish: "merhaba",
      english: "hello",
      example: "Hello, how are you?",
    },
    { id: 2, turkish: "güle güle", english: "goodbye", example: "Good Bye" },
    {
      id: 3,
      turkish: "teşekkür ederim",
      english: "thank you",
      example: "Thanks for your helping",
    },
    {
      id: 4,
      turkish: "lütfen",
      english: "please",
      example: "Please, help me.",
    },
    { id: 5, 
        turkish: "evet", 
        english: "yes", 
        example: "Yes, I am." },
  ]);

  const [queue, setQueue] = useState(2);
  const queueUp = () => {
    setQueue((prevState) => prevState + 1);
  };
  const queueDown = () => {
    setQueue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleAddWord}>
          Add Word
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCardFlip}>
          Card Flip
        </Button>
      </div>
      {view === "addWord" && <CardInput words ={words} setWords={setWords}/>}
      {view === "cardFlip" &&
        words.map((word, index) => {
            if (word.id === queue) {
                return <CardFlip
                key={index}
                word={word}
                queueUp={queueUp}
                queueDown={queueDown}
                queue={queue}
                words={words}
              />
            }  
        })}
    </div>
  );
}

export default CardList;
