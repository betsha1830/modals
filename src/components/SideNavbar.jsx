import {easeIn, easeInOut, motion} from 'framer-motion'
import { useState } from 'react';

function SideNavbar ({backdrop}) {

  const [clicked, setClicked] = useState(false)

  return(

    <div className='nav'>
      <div className='nav-container'>
        <div className='btn-container'><button onClick={() => setClicked(!clicked)}>Open</button></div>
        {clicked && <motion.div className='side-navbar' 
        initial={{x: "100vw"}}
        animate={{x: 0}}>
          <button className='close-btn' onClick={() => setClicked(!clicked)}>Close</button>
          <ul>
            <li>Home</li>
            <li>Clothing</li>
            <li>Grooming</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
          </motion.div>}
      </div>
    </div>
    
    
  )
}

export default SideNavbar;