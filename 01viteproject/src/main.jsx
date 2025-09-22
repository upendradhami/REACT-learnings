import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



// function MyApp() {
//   return (
//     <>
//        <h1>Here we will know the REACT library</h1>
//     </>
//   )
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
