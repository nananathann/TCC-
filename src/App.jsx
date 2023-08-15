import { useState } from 'react'
import './css/home.css'
import Barra from './images/Barramenu.png'
import robokids from './images/robokids.png'
import robo from './images/robo-12.png'
import { Link } from 'react-router-dom'

function App() {
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
    <div className="barra1"></div>
    
    <div className="LogoInicial">
      <img src={robokids} alt="robokids" />
    </div>

<div className="Robo">
      <img src={robo} alt="robo da robokids" />
    </div>

    <section>
    <p>Site voltado à apresentação do projeto</p>
    </section>

    <div className="linkinho">
      <Link to="/objetivos">Objetivos</Link>
      </div>

    <h1> Público <br/>Alvo</h1>
    
    <div className="publico">
      <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
      </div>
  
      

      </main>
      <div className="logoFinal">
        <img src={robokids} alt="robokids" />

        <Link to="/sobre">sobre</Link>
      </div>
      
      <div className="barra2"></div>

    </>
  )
}

export default App
