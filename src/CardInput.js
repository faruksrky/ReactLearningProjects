import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CardInput({words, setWords}) {
    const [input, setInput] = useState({id:null, turkish: "", english: "", example: ""});

    const changeTr = (e) => {
        setInput({ ...input, turkish: e.target.value.toLowerCase() });
    };

    const changeEn = (e) => {
        setInput({ ...input, english: e.target.value.toLowerCase() });
    };

    const changeEx = (e) => {
        setInput({ ...input, id: words.length + 1, example: e.target.value.toLowerCase()});
    };

    const handleClick = () => {
        setWords([...words, input]);
        setInput({id:null, turkish: "", english: "", example: ""});
    }


    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ width: "100%" }}
            label="English"
            variant="outlined"
            value={input.english}
            onChange={changeEn}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ width: "100%" }}
            label="Turkce"
            variant="outlined"
            value={input.turkish}
            onChange={changeTr}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            style={{ width: "100%" }}
            label="Example"
            variant="outlined"
            value={input.example}
            onChange={changeEx}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Ekle
        </Button>
      </div>
    );
}

export default CardInput;