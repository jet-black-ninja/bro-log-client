import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import { useContext } from 'react'
import ThemeContext from './contexts/ThemeContext'
import { ViewType } from './interfaces/customTypes'
import { Routes, Route , Navigate} from 'react-router-dom'
import { FaAngleDoubleUp } from 'react-icons/fa'
import Sidebar from './components/Sidebar/Sidebar'
import NotFoundPage from './components/Main/NotFoundPage/NotFoundPage'
import About from './components/Main/About/About'
function App() {
  const {theme} = useContext(ThemeContext);
  const [currentView, setCurrentView] = useState<ViewType | null >(
    (localStorage.getItem('currentView') as ViewType) || null
  );
   const [sidebarActive, setSidebarActive] = useState<boolean>(false);

   const toggleSidebar = () => {
     setSidebarActive(!sidebarActive);
   }

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
            <Route path='/about' element={<About setCurrentView={setCurrentView}/>}/>
            <Route path = "*" element={<NotFoundPage setCurrentView={setCurrentView}/>} />
          </Routes>
        </main>
      </div>
      <aside>
          <FaAngleDoubleUp
          aria-label='Toggle Sidebar'
          className ={`sidebar_toggle ${sidebarActive ? 'Active': ''}`}
          onClick={toggleSidebar}
          />
          <div className={`side-container ${sidebarActive ? 'active' : ''}`}>
            <Sidebar/>
          </div>
        </aside>
    </div>
  )
}

export default App
