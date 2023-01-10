import React , {useState, useRef, useEffect} from 'react'
import './StateAnim.css'
import { useTransition, animated } from 'react-spring'
import {v4 as uuidv4} from 'uuid'

export default function StateAnim() {

  //on va faire en sorte que quand on refresh la page les elements déjà affiché n'aurons plus l'animation
  const [firstDisplay, setFirstDisplay] = useState(true)

  useEffect(() => {

    //on set in timeout à 1 sec
    setTimeout(() => {
      //on passe le display à false 
      setFirstDisplay(false)
    }, 1000);

  }, []);

  //création d'un tableau avec des objets de base à l'intérieur
  const [inputData, setInputData] = useState([
    {
      id: uuidv4(),
      txt: 'Choppin',
    },
    {
      id: uuidv4(),
      txt: 'Mozart',
    },
    {
      id: uuidv4(),
      txt: 'Bach',
    },
   

  ])

  const inputRef = useRef();

  //on recupère les data 
  const handleData = (e) => {
    //on évite le refresh
    e.preventDefault();

    //on créer un nouvel objet 
    const newObj = {

      //l'id sera créer grace a uuid et le texte sera recupéré dans le input (value)
      id: uuidv4(),
      txt: inputRef.current.value,
    };

    //on copie tous ce qu'il y a déjà dans le tableau, et on rajoute le nouvel objet
    setInputData([...inputData, newObj]);

    //on vide l'input
    inputRef.current.value = '';
  };


  //defini la tramsition
  const listTransitions = useTransition(inputData, {

    // le début opacité 0 
    form:{
      opacity:0,
      transform: 'translateY(10px)'
    },
    // à l'entré opacité 1
    enter:{
      opacity:1,
      transform: 'translateY(0px)'
    },

    //on map tous les id
    keys: inputData.map((item) => item.id)

  });

  return (
    <form onSubmit={handleData}>
      <label htmlFor='piano'>Renseignez vos pianistes favoris.</label>
      <input ref={inputRef} type='text' id='piano' />


      {/* si c'est le firstdisplay alors on affiche la liste sans animation */}
      {firstDisplay ? (

        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>

        // sinon on affiche le nouvel élement avec l'animation
      ): (

        <ul>
            {/* animated.li va créer une liste et une animation qui va avec */}
            {listTransitions((styles, item) => {

              return <animated.li style={styles}>
                        {item.txt}
                      </animated.li>
            })}
        </ul>

      )}

      
    </form>
  )
}
