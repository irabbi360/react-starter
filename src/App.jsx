import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React</h1>
      <div className="card">
        <MyButton setCount={setCount} count={count}/>
      </div>
    </>
  )
}

export default App
