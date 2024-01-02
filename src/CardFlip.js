import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from "@material-ui/core/Button";

function CardFlip({word,queueUp,queueDown,queue,words}  ) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div onClick={handleClick}
          style={{
            backgroundColor: "darkgoldenrod",
            borderRadius: "30px",
            width: '300px', 
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <h1>{word.english}</h1>
          <h3>{word.example}</h3>
        </div>
        <div onClick={handleClick}
          style={{
            backgroundColor: "turquoise",
            borderRadius: "30px",
            width: '300px', 
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          
        >
          <h1>{word.turkish} </h1>
        </div>
      </ReactCardFlip>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" color="primary" onClick={queueUp} 
        disabled= {queue === words.length}>
          Next Card
        </Button>
        <Button variant="contained" color="secondary" onClick={queueDown}
        disabled= {queue === 1}>
          Previous Card
        </Button> 
      </div>
    </div>
  );
}

export default CardFlip;
