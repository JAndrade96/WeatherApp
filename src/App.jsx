import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Climate from './components/Climate'
import Loading from './components/Loading'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Climate />
    </div>
  )
}

export default App
