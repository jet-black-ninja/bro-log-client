import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import { useContext } from 'react'
import ThemeContext from './contexts/ThemeContext'
import { ViewType } from './interfaces/customTypes'
import { Routes, Route , Navigate} from 'react-router-dom'
function App() {
  const {theme} = useContext(ThemeContext);
  const [currentView, setCurrentView] = useState<ViewType | null >(
    (localStorage.getItem('currentView' as ViewType) || null)
  );
   

  return (
    <div className={`app-container ${theme}`} >
      <div className="main-container">
        <nav>
          <Navbar currentView={currentView}/>
        </nav>
        <main >
          <Routes>
            <Route path="/" />
            <Route path="/all"/>
            <Route path = "/latest"/>
            <Route path='/about'/>
          </Routes>
        </main>
      </div>
    </div>
      
    
  )
}

export default App
