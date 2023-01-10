import React, {useState} from 'react'
import './Scroll.css'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

export default function Scroll() {


  //à la base toggleTxt est a false
  const [toggleTxt, setToggleTxt] = useState(false)


  //on créer l'animation 
  const animation = useSpring({
    //si true opacité a 1 sinon 0 et de meme pour le transform
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? 'translateX(0)' : 'translateX(-50%)'
  })



  return (
    <div>
        <p className='scroll-txt'>
          Lorem ipsum dolor sit amet. A optio odio qui voluptas dolor ut eveniet internos in adipisci natus non ullam quam. Et enim ducimus cum facere nesciunt non doloribus consectetur et doloremque atque ex numquam quos ut aperiam omnis. 33 iure quae sed reprehenderit dolorum non dolor ipsam sed quasi nemo. Quo delectus cupiditate et officia libero sit architecto consequuntur aut numquam pariatur id quod veniam aut omnis corrupti aut saepe fugit. Aut blanditiis voluptas 33 modi necessitatibus quo aspernatur optio sit blanditiis esse sit error omnis et galisum ipsam aut blanditiis assumenda. Et reiciendis commodi vel voluptatem animi et aspernatur iusto ad doloremque quidem qui sapiente nisi ut Quis vitae et Quis natus. Sit voluptatem corporis et galisum dicta et officia maxime. Non reiciendis minima et veritatis rerum qui suscipit internos ea aliquam magnam id nihil beatae et similique delectus est impedit quidem! 
          Lorem ipsum dolor sit amet. A optio odio qui voluptas dolor ut eveniet internos in adipisci natus non ullam quam. Et enim ducimus cum facere nesciunt non doloribus consectetur et doloremque atque ex numquam quos ut aperiam omnis. 33 iure quae sed reprehenderit dolorum non dolor ipsam sed quasi nemo. Quo delectus cupiditate et officia libero sit architecto consequuntur aut numquam pariatur id quod veniam aut omnis corrupti aut saepe fugit. Aut blanditiis voluptas 33 modi necessitatibus quo aspernatur optio sit blanditiis esse sit error omnis et galisum ipsam aut blanditiis assumenda. Et reiciendis commodi vel voluptatem animi et aspernatur iusto ad doloremque quidem qui sapiente nisi ut Quis vitae et Quis natus. Sit voluptatem corporis et galisum dicta et officia maxime. Non reiciendis minima et veritatis rerum qui suscipit internos ea aliquam magnam id nihil beatae et similique delectus est impedit quidem! 
        </p>
        <p className='scroll-txt'>
          Rem quibusdam reprehenderit sit adipisci voluptatem et sint similique et inventore dicta est laudantium quisquam ex temporibus enim? Sit consequatur fugit non quasi ipsam sed officiis nihil qui doloremque veritatis. Id cupiditate dolorem et vitae possimus est delectus voluptas et omnis nobis nam nobis iure. Qui doloremque atque hic delectus fugiat ut dolores debitis et exercitationem reprehenderit. Cum iure laborum ex necessitatibus officia vel harum laudantium sit nihil nihil ea voluptatum nobis. Est earum praesentium qui tempore perspiciatis et dolor omnis. Ut provident odio eum blanditiis quis qui architecto reprehenderit ea praesentium mollitia quo quidem quasi ea tenetur sunt eum animi omnis. Sit voluptatum voluptatibus et nobis aliquid in pariatur dolore ea autem nisi. Aut eaque perspiciatis sit galisum ipsam eos eligendi impedit sit ipsam eius et maxime consequatur. Aut exercitationem dolores a rerum nulla non nihil laudantium qui similique enim sed omnis magnam et ratione rerum. Est obcaecati sint qui perspiciatis nesciunt et modi nulla. 
          Rem quibusdam reprehenderit sit adipisci voluptatem et sint similique et inventore dicta est laudantium quisquam ex temporibus enim? Sit consequatur fugit non quasi ipsam sed officiis nihil qui doloremque veritatis. Id cupiditate dolorem et vitae possimus est delectus voluptas et omnis nobis nam nobis iure. Qui doloremque atque hic delectus fugiat ut dolores debitis et exercitationem reprehenderit. Cum iure laborum ex necessitatibus officia vel harum laudantium sit nihil nihil ea voluptatum nobis. Est earum praesentium qui tempore perspiciatis et dolor omnis. Ut provident odio eum blanditiis quis qui architecto reprehenderit ea praesentium mollitia quo quidem quasi ea tenetur sunt eum animi omnis. Sit voluptatum voluptatibus et nobis aliquid in pariatur dolore ea autem nisi. Aut eaque perspiciatis sit galisum ipsam eos eligendi impedit sit ipsam eius et maxime consequatur. Aut exercitationem dolores a rerum nulla non nihil laudantium qui similique enim sed omnis magnam et ratione rerum. Est obcaecati sint qui perspiciatis nesciunt et modi nulla. 
        </p>

        {/* waypoint nous permet de declancher l'animation quand ono atteint se point dans la page */}
        <Waypoint 
          bottomOffset='30%'
          onEnter={() => {
            //si différent de toggleTxt 
            if(!toggleTxt) {
              setToggleTxt(true)
            }
            
          }}/>

          <animated.div style={animation} className='cta-section'>
            <h2>N'en ratez pas une miette !</h2>
            <form>
              <label htmlFor='email'>Inscrivez-vous à la newsletter</label>
              <input type='email' id='eamil'/>
            </form>
          </animated.div>

          <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur a explicabo dolores placeat pariatur suscipit alias nostrum fuga, non id. Sunt soluta quod qui at nisi adipisci, expedita quo eos totam sit dolores ratione! Vero ipsum rem aliquam, libero adipisci nemo quod, ex minima, molestiae impedit doloremque. Similique exercitationem quod id iure reiciendis ullam sapiente! Commodi corrupti cum repudiandae quas incidunt totam quibusdam adipisci tempora quidem voluptas aspernatur facere architecto enim culpa illum error libero, accusamus dolore cumque perferendis pariatur! Neque voluptatum, possimus numquam asperiores itaque voluptatem doloribus doloremque! Adipisci dignissimos sit, nobis dolorem ipsam ducimus iste voluptas totam itaque, perferendis debitis placeat expedita tempora, quasi rem eaque ullam corrupti officia. Eum, non. Est esse maxime molestiae deserunt sed, similique quae fugit, aliquid ratione laboriosam pariatur rem voluptates tenetur temporibus placeat sequi saepe? Molestias iusto ipsum natus cupiditate tempora quae ad aliquid impedit mollitia, ullam non iste eos dolore veniam quasi magni? Officia reprehenderit, perferendis enim illo, porro consectetur debitis libero blanditiis vel animi iure commodi at illum itaque doloremque quod laudantium. Sint quam fuga magnam distinctio id reiciendis quisquam blanditiis repellendus? Temporibus beatae perspiciatis distinctio eveniet in voluptatem illo molestias qui libero saepe non autem est, assumenda, necessitatibus cum!
            </p>

    </div>
  )
}
