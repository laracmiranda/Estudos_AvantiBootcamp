import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(true)

  const usuarios = [
    {id: 1, nome: "Lara", idade: 24},
    {id: 2, nome: "Lucas", idade: 24},
    {id: 3, nome: "Luci", idade: 24},
    {id: 4, nome: "Gabriel", idade: 24},
  ]
  return (
    <>

      {usuarios.map(usuario => (
        <Card nome={usuario.nome} idade={usuario.idade}/>
      ))}

      {check ? <p>Verdadeiro</p> : <p>Falso</p>}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
