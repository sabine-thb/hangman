export const HangmanImage = ({ tries }) => {
  const images = [
    './1.svg', 
    './2.svg',
    './3.svg',
    './4.svg',
    './5.svg',
    './6.svg',
    './7.svg',   
    './8.svg',   
  ];
  // Récupérer le chemin de l'image en fonction du nombre d'essais restants
  const imageUrl = tries < images.length ? images[tries] : images[images.length - 1];

  return (
    <div className="hangmanContainer">
      <img  src={imageUrl} className="hangman" alt={`Pendu: ${tries} essais`} />
    </div>
  );
};
