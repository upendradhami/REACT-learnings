import { StrictMode } from 'react'
import { createElement } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'


function MyApp() {
  return (
    <>
       <h1>Here we will know the REACT library</h1>
    </>
  )
}

// const reactElements = {
//   type:'a',
//   props:{
//     href:"https://www.youtube.com",
//     target:"_blank",
//   },
//   children: "Click here to visit google "
// }

////// The upper method doesn't actual react the react has it's own method named React.createElement() , which we will see below  , 

// At first let's see whether we can render any element directly in to the browser or not  here 
const anotherElement = <a href="https://www.youtube.com"> visit youtube </a> ;

//// when jsx is provided with above form the Babel convert the jsx to object form behind the scene 

//// This is how behind the scene react create elements of jsx to object 

const reactElements = React.createElement(
  'a',
  {'href':'https://www.youtube.com' , 'target' : '_blank'},
  'click here to open youtube ',
)



createRoot(document.getElementById('root')).render(
 
 <>
  <MyApp />
  { anotherElement}
 { reactElements}
 </>

)
