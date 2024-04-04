import React from 'react';

export const Keyboard = ({ checkLetter }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    return (
        <div className='flexContainer'>
          <div className='lettersContainer'>
            {alphabet.map(letter => (
                <button 
                    key={letter} 
                    onClick={() => checkLetter(letter)} 
                    className="letter-button" // Ajout de la classe "letter-button"
                >
                    {letter}
                </button>
            ))}
            </div>
        </div>
    );
};
