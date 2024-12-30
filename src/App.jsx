import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home.jsx'
import Game from './Components/Game.jsx'
import CreateContext from './Components/Store/CreateContext.js'



function App() {
  const {start,setStart} = useContext(CreateContext);
  
  return (
  <>
   {start==true ? <Game/>:<Home/>}
  </>
  )
}

export default App
