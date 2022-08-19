import React, { useEffect, useState } from 'react'
import './App.css'
import Converter from './components/Converter/Converter'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import SavedFavs from './components/SavedFavs/SavedFavs'

const App = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favOperations') || '[]'))
  const [selectedFav, setSelectedFav] = useState()
  useEffect(() => {
    localStorage.setItem('favOperations', JSON.stringify(favorites))
  }, [favorites])
  return (
    <div className="App">
      <Header />
      <main>
        <Converter favorites={favorites} setFavorites={setFavorites} selectedFav={selectedFav}/>
        <SavedFavs favorites={favorites} setFavorites={setFavorites} setSelectedFav = {setSelectedFav}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
