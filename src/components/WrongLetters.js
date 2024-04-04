import React from 'react';

export const WrongLetters = ({ wrongLetters, className }) => {
  return (
    <div >
      <p className={className}>Mauvaises lettres : {wrongLetters.join(', ')}</p>
    </div>
  );
};
