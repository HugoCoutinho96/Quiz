import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Quiz from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Quiz/>
  </StrictMode>,
)
