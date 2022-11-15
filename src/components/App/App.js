import React, { useState } from 'react';
import BestScore from '../BestScore/BestScore';
import PlayArea from '../PlayArea/PlayArea';
import Score from '../Score/Score';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardArray, setClickedCardArray] = useState([]);
  const [memCardArray, setMemCardArray] = useState([
    {
      img: "chewbacca.jpg", 
      imgAlt: "Chewbacca",
      title: "Member Chewbacca?"
    },
    {
      img: "reagan.jpg", 
      imgAlt: "Reagan",
      title: "Member Reagan?"
    },
    {
      img: "jpark.jpg", 
      imgAlt: "Jurassic Park",
      title: "Member Jurassic Park?"
    },
    {
      img: "ghost.jpg", 
      imgAlt: "Ghostbusters",
      title: "Member Ghostbusters?"
    },
    {
      img: "spock.jpg", 
      imgAlt: "Spock",
      title: "Member Spock?"
    },
    {
      img: "jgold.jpg", 
      imgAlt: "Jeff Goldblum",
      title: "Member Jeff Goldblum"
    },
    {
      img: "tie.jpg", 
      imgAlt: "TIE Fighters",
      title: "Member TIE Fighters?"
    },
    {
      img: "goon.jpg", 
      imgAlt: "Goonies",
      title: "Member Goonies?"
    },
    {
      img: "yoda.jpg", 
      imgAlt: "Yoda",
      title: "Member Yoda?"
    },
    {
      img: "80.jpg", 
      imgAlt: "the 80's",
      title: "Member the 80's?"
    },
    {
      img: "90.jpg", 
      imgAlt: "the 90's",
      title: "Member the 90's?"
    },
    {
      img: "bman.jpg", 
      imgAlt: "Bionic Man",
      title: "Member Bionic Man?"
    },
  ]);

  const handleCardClick = (e) => {
    const clickedTitle = e.target.parentNode.lastChild.textContent;

    const alreadyClicked = clickedCardArray.find((title) => {
      console.log(title);
      return title === clickedTitle;
    })

    if (alreadyClicked) {
      //Game Over
      setBestScore(score);
      setScore(0);
      setClickedCardArray([]);
    } else {
      setClickedCardArray([...clickedCardArray, clickedTitle])
      // Add to Score
      setScore(score + 1);
    }

    console.log(clickedCardArray);
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
