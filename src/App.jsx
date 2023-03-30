import { useState } from 'react'
import Blog from './components/Blog/Blog'

// import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
    </div>
  )
}

export default App
