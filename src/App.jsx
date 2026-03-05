import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import maxColdImg from './assets/max_cold.jpg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>ХАХАХА ОРДЕН СЮДА ТУДА КУДА?????? ЧТООООО</h1>
        <img src={maxColdImg} alt="МАКС Я ЗАМЕРЗ" width={300} height={300}/>
        <p>Переезжаем в телегу</p>
      </div>
    </>
  )
}

export default App
