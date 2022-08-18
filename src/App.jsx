import React from 'react'
import './App.css'
import Converter from './components/Converter/Converter'
import Footer from './components/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Converter />
      </main>
      <Footer />
    </div>
  )
}

export default App
