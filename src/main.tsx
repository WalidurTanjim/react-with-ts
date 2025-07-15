import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'
// import { ThemeContext } from './context/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeContext> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </ThemeContext> */}
  </StrictMode>,
)
