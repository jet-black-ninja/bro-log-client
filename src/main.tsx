import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ThemeContextProvider } from './contexts/ThemeContext.tsx'
import { FilterContextProvider } from './contexts/FilterContext.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
     <ThemeContextProvider>
      <FilterContextProvider>
       <App />
      </FilterContextProvider>
     </ThemeContextProvider>
    </HashRouter>
  </StrictMode>,
)
