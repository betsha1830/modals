import {AnimatePresence, easeIn, easeInOut, motion} from 'framer-motion'
import { useState } from 'react';
import HamburgerMenu from '../assets/hamburger-menu.png'
import x from '../assets/x.png'

function SideNavbar ({backdrop}) {

  const [clicked, setClicked] = useState(false)

  return(

    <div className='nav'>
      <div className='nav-container'>
        <motion.div whileHover={{cursor: "pointer"}} onClick={() => setClicked(!clicked)} className='btn-container'><img className='open-btn' src={HamburgerMenu}/></motion.div>
        <AnimatePresence>
        {clicked && <motion.div className='side-navbar' 
        initial={{x: "100vw"}}
        animate={{x: 0}}
        exit={{x: "100vw"}}
        transition={{duration: 0.5, type: "tween"}}>
          <motion.div whileHover={{cursor: "pointer"}} className='close-btn-pos' onClick={() => setClicked(!clicked)}><img className='close-btn' src={x} /></motion.div>
          <motion.ul
            whileHover={{}}
          >
            <motion.li
              initial={{textDecoration:"none"}}
              whileHover={{textDecoration: "underline",cursor: "pointer", transition: {type: "spring", duration: 0.5}}}
              transition={{duration: 0.5, type: "tween"}}
            >Home</motion.li>
            <motion.li 
              whileHover={{textDecoration: "underline", cursor: "pointer"}}
              transition={{duration: 0.5, type: "tween"}}
            >Clothing</motion.li>
            <motion.li
              whileHover={{textDecoration: "underline", cursor: "pointer"}}
              transition={{duration: 0.5, type: "tween"}}
            >Grooming</motion.li>
            <motion.li
              whileHover={{textDecoration: "underline", cursor: "pointer"}}
              transition={{duration: 0.5, type: "tween"}}
            >Accessories</motion.li>
            <motion.li
              whileHover={{textDecoration: "underline", cursor: "pointer"}}
              transition={{duration: 0.5, type: "tween"}}
            >Shoes</motion.li>
          </motion.ul>
          </motion.div>}
          </AnimatePresence>
      </div>
    </div>
    
    
  )
}

export default SideNavbar;