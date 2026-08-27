import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './Nav'
import Section from './Section'
import Background from './Background'
import Fetch from './Fetch'
import Lastpage from './Lastpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
     <Section/>
     <Background />
     <Fetch />
     <Lastpage />
    </>
  )
}

export default App
