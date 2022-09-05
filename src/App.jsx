import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Climate from './components/Climate'
import Loading from './components/Loading'

document.body.style = `background: url(../src/assets/img/cloud.jpg) no-repeat center center fixed;
-webkit-background-size: cover;
background-size: 100% 100%;`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Climate />
    </div>
  )
}

export default App
