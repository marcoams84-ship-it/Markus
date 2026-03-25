
import { letters } from './Helpers/letters'; 

import './App.css'
import { HangImage } from './componentes/HangImage';
import { useEffect, useState } from 'react';
import { getRandomWord } from './Helpers/getRandomWord';

function App() {

  const [word, setWord] = useState (getRandomWord); 
  const [hiddenWord, sethiddenword] = useState ('_ '.repeat( word.length ));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );

  useEffect( () => {
    if ( attempts >=9 ) {
      setLose( true )
    }
  }, [attempts] );

  useEffect ( () => {
    
    const currenHiddenWord = hiddenWord.split(' ').join('');
    
    if ( currenHiddenWord === word) {
      setWon( true );
    }

  }, [ hiddenWord ] )

  const checkLetter = ( letter: string ) => {

    if ( lose ) return; 
    
    if ( !word.includes(letter) ) {
      setAttempts( Math.min( attempts + 1, 9 ) );
      return;
    } 
    
    const hiddenWordArray = hiddenWord.split(' ')


    for ( let i = 0; i < word.length; i++) {
      if ( word[i] === letter ) {
      hiddenWordArray[i] = letter;
      }
    }

    sethiddenword(hiddenWordArray.join(' '));

  }

  const newGame = () => {
    const newWord = getRandomWord(); 

    setWord( newWord );
    sethiddenword( '_ '.repeat( newWord.length ) );
    setAttempts(0);
    setLose(false);
    setWon(false);
  }
  
return (
    <div className="hero">
      <img src="/Audry.png" className="watermark" alt="" />
      
      <HangImage imageNumber={ attempts } />

      <h3> { hiddenWord } </h3>

      <h3>Intentos: { attempts }</h3>

      { ( lose ) ? <h2>You Lose! - Palabra: { word } </h2> : '' }
      { ( won ) ? <h2>You Win! Marco siempre es el mejor</h2> : '' }

      {
          letters.map( (letter) => (
            <button 
              onClick={ () => checkLetter(letter) }
              key={letter}
              disabled={lose || won}  
            >
              { letter }
            </button>
          ) )
      }

      <br /><br />
      <button onClick={ newGame } >¿Quieres volver a Jugar?</button>

    </div>
  );
} // <--- ESTA LLAVE ES LA QUE TE FALTA

export default App;

