import React, { useEffect, useState } from 'react'
import './App.css'
import Converter from './components/Converter/Converter'
import Footer from './components/Footer'
import Header from './components/Header/Header'

const App = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favOperations') || '[]'))
  useEffect(() => {
    localStorage.setItem('favOperations', JSON.stringify(favorites))
  }, [favorites])
  return (
    <div className="App">
      <Header />
      <main>
        <Converter favorites={favorites} setFavorites={setFavorites}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
