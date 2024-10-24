import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TodoProvider } from './context/TodoContext.tsx'
import { ModalProvider } from './context/ModalContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TodoProvider>
  </StrictMode>,
)
