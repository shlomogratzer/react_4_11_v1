import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UsersContext from './context/UsersContextProvider.tsx'
import UserElectedProvider from './context/UserElectedProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UsersContext>
      <UserElectedProvider>

    <App />
      </UserElectedProvider>
    </UsersContext>
    </BrowserRouter>
  </StrictMode>,
)
