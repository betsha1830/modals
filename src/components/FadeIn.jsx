import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react'
import Image1 from '../assets/images/sunglass.webp'
import Image2 from '../assets/images/folded-glasses.webp'
import Image3 from '../assets/images/front-facing-glass.webp'
import Image4 from '../assets/images/person-wearing-glasses.webp'
import Image5 from '../assets/images/glasses.webp'
import Image6 from '../assets/images/top-view-glasses.webp'


const imgs = [Image1, Image2, Image3, Image4, Image5, Image6]
function FadeIn() {

  const [faded, setFaded] = useState(true)
  
  const [counter, setCounter] = useState(0)

  return(
    <motion.div className='fade'>
      <motion.div 
        onClick={() => setFaded(!faded)}
        whileHover={{scale: 1.1, 
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          cursor: 'pointer'}}
          exit={{boxShadow: '0 0 15px rgba(0,0,0,0)'}}
        transition={{duration: 0.4}}
        className='small-elt'>
        <motion.img className='small-img' src={Image1} alt='sunglass' />
        <motion.div className='item item-container'>
          <motion.div className='item-description'>
            <motion.h2 className='item-name'>Pilot Sunglasses</motion.h2>
            <motion.span className='model-name'>-</motion.span> <br/><br/>
            <motion.span className='item-description'>A classic pilot silhouette styled with a ridged frame – 
            a fresh interpretation of our Icon stripe. The design is finished with black acetate temple 
            tips and an engraved logo.
            </motion.span> <br/><br/>
            <motion.div className='item-price'>$159.99</motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
      {faded && 
      <motion.div className='large-elt'>
        <motion.div 
        onClick={() => setFaded(!faded)}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='backdrop'>
          <motion.div 
          onClick={(e) => e.stopPropagation()}
          className='content'>
            <motion.div className='image-side'>
              <motion.div
                onClick={ () => {
                  counter === 0 ? setCounter(imgs.length - 1) : setCounter(counter - 1)
                }}
                className='back'>
                  <svg width="35" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1C11.767 1 1 11.767 1 25C1 38.233 11.767 49 25 49C38.233 49 49 38.233 49 25C49 11.767 38.233 1 25 1ZM25 47C12.869 47 3 37.131 3 25C3 12.869 12.869 3 25 3C37.131 3 47 12.869 47 25C47 37.131 37.131 47 25 47Z" fill="rgb(180, 180, 180)"/>
                    <path d="M29.707 10L15 24.707L29.707 39.414L31.121 38L17.828 24.707L31.121 11.414L29.707 10Z" fill="rgb(180, 180, 180)"/>
                  </svg>


                </motion.div>
              <motion.img 
              animate={{}}
              transition={{type: 'tween', duration: 0.5, delay: 0.5}}
              className='large-img' src={imgs[counter]} />
              <motion.div
                onClick={() => {
                  counter === imgs.length - 1 ? setCounter(0) : setCounter(counter + 1)
                }}
                className='forward'>
                  <svg width="35" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 49C38.233 49 49 38.233 49 25C49 11.767 38.233 1 25 1C11.767 1 1 11.767 1 25C1 38.233 11.767 49 25 49ZM25 3C37.131 3 47 12.869 47 25C47 37.131 37.131 47 25 47C12.869 47 3 37.131 3 25C3 12.869 12.869 3 25 3Z" fill="rgb(180, 180, 180)"/>
                    <path d="M20.293 40L35 25.293L20.293 10.586L18.879 12L32.172 25.293L18.879 38.586L20.293 40Z" fill="rgb(180, 180, 180)"/>
                  </svg>
                </motion.div>
            </motion.div>
            <motion.div className='description-side'>
              <motion.h2 className='item-name'>Pilot Sunglasses</motion.h2>
              <motion.span className='model-name'>-</motion.span> <br />
              <motion.span className='item-price'>$159.99</motion.span><br/><br/>
              <motion.span className='item-description'>A classic pilot silhouette styled with a ridged frame – 
              a fresh interpretation of our Icon stripe. The design is finished with black acetate temple 
              tips and an engraved logo.
              </motion.span> <br/>
              <motion.h3>Product Details</motion.h3>
              <motion.ul>
                <motion.li>Frame width: 14.1cm/5.6in</motion.li>
                <motion.li>Frame height: 5.5cm/2.2in</motion.li>
                <motion.li>Metal and acetate frame</motion.li>
                <motion.li>Scratch-resistant dark brown lenses with 100% UV protection</motion.li>
                <motion.li>Engraved Burberry lettering at temples</motion.li>
                <motion.li>Made in Italy</motion.li>
                <motion.li>Comes with a hard leather case and cleaning cloth</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </motion.div>}
      </AnimatePresence>
    </motion.div>
    
  )
}

export default FadeIn