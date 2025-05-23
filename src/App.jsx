// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './things/header'
import Content from './things/content'
import '@fontsource/montserrat';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <Header />
      <Content />
    </div>
  
  )
}

export default App
