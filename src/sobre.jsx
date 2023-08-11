import { useState } from 'react'
import './css/sobre.css'
import Barra from './images/Barramenu.png'
import robokids from './images/robokids.png'

function sobre() {
  const [count, setCount] = useState(0)
  return (
    <>
    <header>

    <img src={Barra} alt="barra menu" />

<div className="logo">
  <img src={robokids} alt="pequeno robokids" />
  </div>

    </header>

    <main>
      <h1>Sobre</h1>
    </main>
    </>
  )
}