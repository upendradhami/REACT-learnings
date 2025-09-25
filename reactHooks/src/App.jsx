import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{ 
    if(count == 30) return ;
    alert("You have exceed the limit ")
     setCount(s => s+1);
  }

  const subValue = () => 
    { if(count == 0) return ;
   setCount(s => s -1);
  }

  return (
    <>
      <h1>Count : {count} </h1>
      <button onClick={addValue}> Add value</button>
      <button onClick={subValue}> Decrease Value</button>
    </>
  )
}

export default App
