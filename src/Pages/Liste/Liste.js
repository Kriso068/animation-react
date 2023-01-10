import React from 'react'
import './Liste.css'
import { useTrail, animated } from 'react-spring'
import Card from '../../Components/Card/Card'
import { v4 as uuidv4 } from 'uuid'

export default function Liste() {

  //on créer un chemin
  const trail = useTrail(9, {
    //on créer une animation en faisant un objet
    from: {
      opacity: 0,
      x: 20
    },
    to: {
      opacity: 1,
      x: 0

    }
  })



  return (
    <div className='list-container'>

      {/* on parcour l'objet trail qui est un tableau grace a .map */}
      {trail.map((cardStyle, index) => {

        // animated.div va créer une div et une animation qui va avec
        return <animated.div
                  //on créer une clé unique grace a uuidv4
                  key={uuidv4()}
                  style={cardStyle}
                >
                  <Card/>
              </animated.div>
      })}
    </div>
  )
}
