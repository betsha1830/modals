import './App.css'
import DropIn from './components/DropIn'
import FadeIn from './components/FadeIn'
import SideNavBar from './components/SideNavbar'

function App() {

  return (
    <div className='container'>
      <SideNavBar />
      <DropIn />
      <FadeIn />
    </div>
  )
}

export default App
