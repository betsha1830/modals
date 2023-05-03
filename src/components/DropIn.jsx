import {AnimatePresence, motion} from 'framer-motion';

import { useState } from "react"

function DropIn () {

  const [dropIn, setDropIn] = useState(false);

  return(
    
    <>
    <motion.button 
      onClick={() => setDropIn(!dropIn)} 
      whileHover={{scale: 1.2, boxShadow: '0 0 10px rgba(89, 255, 0, 0.5)'}} 
      className='dropin-btn'>Make it Drop!</motion.button>
    <AnimatePresence>
    {dropIn && <motion.div className='dropin'>
        <motion.div 
        onClick={() => setDropIn(!dropIn)}
        className='backdrop'>
          <motion.div 
          initial={{y: '-100vh'}}
          animate={{y: 0}}
          exit={{y: '100vh'}}
          className='dropin-content'>
            <span>What a drop <span className='emoji'>🤯</span></span> <br/>
            <motion.button
            className='dropin-btn'
            onClick={() => setDropIn(!dropIn)}
              whileHover={{scale: 1.2}}
              >
                Go Back Home</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>}
      </AnimatePresence>
    </>

    
      
    
  )
}

export default DropIn