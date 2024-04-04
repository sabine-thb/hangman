import React from 'react';




export const WordDisplay = ({ word, correctLetters, className }) => {
    const displayedWord = word
      .split('')
      .map(letter => (correctLetters.includes(letter) || !/[a-zA-Z]/.test(letter) ? letter : '_'))
      .join(' ');
  
    return <p className={className}>{displayedWord}</p>;
  };
  