import React, { useState } from 'react';
import BestScore from '../BestScore/BestScore';
import PlayArea from '../PlayArea/PlayArea';
import Score from '../Score/Score';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memCardArray, setMemCardArray] = useState([
    {
      img: "", 
      imgAlt: "Chewbacca",
      title: "Member Chewbacca?"
    },
    {
      img: "", 
      imgAlt: "Reagan",
      title: "Member Reagan?"
    },
    {
      img: "", 
      imgAlt: "Jurassic Park",
      title: "Member Jurassic Park?"
    },
    {
      img: "", 
      imgAlt: "Ghostbusters",
      title: "Member Ghostbusters?"
    },
    {
      img: "", 
      imgAlt: "Spock",
      title: "Member Spock?"
    },
    {
      img: "", 
      imgAlt: "Jeff Goldblum",
      title: "Member Jeff Goldblum"
    },
    {
      img: "", 
      imgAlt: "TIE Fighters",
      title: "Member TIE Fighters?"
    },
    {
      img: "", 
      imgAlt: "Goonies",
      title: "Member Goonies?"
    },
    {
      img: "", 
      imgAlt: "Yoda",
      title: "Member Yoda?"
    },
    {
      img: "", 
      imgAlt: "the 80's",
      title: "Member the 80's?"
    },
    {
      img: "", 
      imgAlt: "the 90's",
      title: "Member the 90's?"
    },
    {
      img: "", 
      imgAlt: "Bionic Man",
      title: "Member Bionic Man?"
    },
  ]);

  const handleCardClick = () => {
    // console.log(e.target.parentNode);
    randomizeCardArray();
  }

  const randomizeCardArray = () => {
    let tmpArray = [...memCardArray];
    tmpArray = shuffleArray(tmpArray);
    setMemCardArray(tmpArray);
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="App">
      <h1>Memba Berries... ReMemba!</h1> 
      <p>Memba the berry! Don't memba the same berry!</p>
      <Score score={ score } />
      <BestScore bestScore={ bestScore } />
      <PlayArea cardsArray={ memCardArray } handleCardClick={ handleCardClick } />
    </div>
  );
}

export default App;
