import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './things/header'
import Content from './things/content'
import CriadorCurriculo from './things/criadorCurriculo'
import '@fontsource/montserrat'
import './App.css'

function Layout() {
  const location = useLocation()
  const showHeaderAndContent = location.pathname === '/'  // só mostra na raiz

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      {showHeaderAndContent && <Header />}
      {showHeaderAndContent && <Content />}
      {!showHeaderAndContent && <CriadorCurriculo />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  )
}

export default App
