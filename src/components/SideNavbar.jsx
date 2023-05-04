import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react';
import HamburgerMenu from '../assets/icons/hamburger-menu.png'
import x from '../assets/icons/x.png'
import '../styles/sideNavbar.css'

function SideNavbar () {

  const [clicked, setClicked] = useState(false)

  return(

    <div className='nav'>
      <div className='nav-container'>
        <div className='btn-container'><motion.img whileHover={{cursor: "pointer"}} onClick={() => setClicked(!clicked)} className='open-btn' src={HamburgerMenu}/></div>        
        <AnimatePresence>
        {(clicked && 

        <motion.div className='parent'>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setClicked(!clicked)} className='backdrop'></motion.div>
          <motion.div className='side-navbar' 
            initial={{x: "100vw"}}
            animate={{x: 0}}
            exit={{x: "100vw"}}
            transition={{duration: 0.5, type: "tween"}}>
          <motion.div whileHover={{cursor: "pointer"}} className='close-btn-pos' onClick={() => setClicked(!clicked)}><img className='close-btn' src={x} /></motion.div>
          <motion.ul>
            <motion.li>Home</motion.li>
            <motion.li>Clothing</motion.li>
            <motion.li>Grooming</motion.li>
            <motion.li>Accessories</motion.li>
            <motion.li>Shoes</motion.li>
          </motion.ul>
          </motion.div>
        </motion.div>      
        )}
          </AnimatePresence>
      </div>
    </div>
    
    
  )
}

export default SideNavbar;