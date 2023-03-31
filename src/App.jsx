import { useState } from 'react'
import Blog from './components/Blog/Blog'

// import './App.css'
import Header from './components/Header/Header'
import FAQ from './components/FAQ/FAQ'

function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <FAQ></FAQ>
    </div>
  )
}

export default App
