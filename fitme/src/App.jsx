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
import Newlook from './Newlook'
import Rice from './Rice'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
     <Section/>
     <Background />
     <Fetch />
     <Lastpage />
     <Newlook />
     <Rice />
    </>
  )
}

export default App
