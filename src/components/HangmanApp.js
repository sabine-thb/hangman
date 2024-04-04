'use client';
import React from 'react';
import { HangmanImage } from './HangmanImage';
import { WordDisplay } from './WordDisplay';
import { Keyboard } from './Keyboard';
import { WrongLetters } from './WrongLetters';


export const HangmanApp = () => {
    const [word, setWord] = React.useState('');
    const [correctLetters, setCorrectLetters] = React.useState([]);
    const [wrongLetters, setWrongLetters] = React.useState([]);
    const [tries, setTries] = React.useState(0);
    const maxTries = 8;
  
    // Fonction pour choisir un mot aléatoire
    const chooseRandomWord = async () => {
      try {
        const response = await fetch('https://node-hangman-api-production.up.railway.app/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            'locale': 'fr-FR'
          })
        });
        const data = await response.json();
        setWord(data.word.toLowerCase()); // Assurez-vous de mettre le mot en minuscules pour la comparaison
        // Réinitialiser les lettres correctes et incorrectes
        setCorrectLetters([]);
        setWrongLetters([]);
        // Réinitialiser le nombre d'essais
        setTries(0);
      } catch (error) {
        console.error('Erreur lors de la récupération du mot:', error);
      }
    };
  
    // Fonction pour vérifier si la lettre proposée est correcte
    const checkLetter = letter => {
      if (word.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setWrongLetters([...wrongLetters, letter]);
        setTries(tries + 1);
      }
    };
  
    // Fonction pour redémarrer le jeu
    const restartGame = () => {
      chooseRandomWord();
    };
  
    // Vérifie si le joueur a gagné
    const won = word.split('').every(letter => correctLetters.includes(letter));
  
    // Vérifie si le joueur a perdu
    const lost = tries >= maxTries-1;
  
    // Effectuer le choix initial du mot au chargement
    React.useEffect(() => {
      chooseRandomWord();
    }, []);
  
    // Rendu de l'application
    return (
      <div>
        <h1>Le jeu du Pendu</h1>     
        <p className='explication'>Essayes de deviner le mot caché ! Tu as le droit à 6 erreurs.</p>
        {!won && !lost && <button onClick={restartGame} className='button'>Changer de mot</button>}
        <div className='flex'>
          <div>
            <HangmanImage tries={tries} />
          </div>
          <div>
            <WordDisplay word={word} correctLetters={correctLetters} className="wordDisplay" />
            <Keyboard checkLetter={checkLetter} />
            <WrongLetters wrongLetters={wrongLetters} className="wrongLetters" />
          </div>
        </div>  
        {won && <p className='msg'>Bravo, vous avez gagné !</p>}
        {lost && <p className='msg'>T'es nul, t'as perdu. Le mot était: {word}.</p>}

        {(won || lost) && <button onClick={restartGame} className='button'>Rejouer</button>}
      </div>
      
    );
  };
  