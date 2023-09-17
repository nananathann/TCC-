import { Link } from 'react-router-dom'
import './css/home.css'
import robokids from './images/robokids.png'
import robo from './images/robo-12.png'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'

import led from './images/equipamentos/led.png'
import ultrassonico from './images/equipamentos/ultrassonico.png'
import servo from './images/equipamentos/servo.png'


import carroex from './images/carroex.png'


function App() {

  return (
    <>
    <Header />

    <body>

      <Sidebar />

    <main className='mainHome'>
    <div className="barra1"></div>
    
    <div className="LogoInicial">
      <img src={robokids} alt="robokids" />
    </div>

<div className="Robo">
      <img src={robo} alt="robo da robokids" />
    </div>

    <section className='sectionHome'>
    <p>Site voltado à apresentação do projeto</p>
    </section>

    <div className="linkinho">
      <Link  id="linkk" to="/objetivos">Objetivos</Link>
      </div>

    <h1 id='publicoalvo'> Público <br/>Alvo</h1>
    
    <div className="publico">
      <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
      </div>
  
      

      
      <div className="logoFinal">
        <img src={robokids} alt="robokids" />

      </div>
      
      <div className="barra2"></div>

    <div className="sobrePag">

      <h1 className='h1Home'>Sobre</h1>
      <div id="sobreP">
        <p>O nosso projeto será um carrinho de brinquedo com sensores ultrassônicos, segue linha, e servos, com o intuído de estimular o desenvolvimento físico e distrair o neném</p>
      </div>

      <img src={carroex} alt="img do carrinho exemplo" className="carrinho" />

      <div className="verMais">
        
      <Link  id="verSobre" to="/sobre">Ver mais</Link>
      </div>
      <div className="barraSobre"></div>
      <div className="barraSobre2"></div>

      </div>



      <div className="PaginaEquipamentos">

        <h1 className="homeEquipamentos">Equipamentos</h1>

        <div className="homeUltrassonico">
          <img src={ ultrassonico } alt="sensor ultrassonico" />
          <h2> Módulo
            Sensor de
            Distância
            Ultrassônico</h2>
          <p>R$ 15,00</p>
        </div>

        <div className="homeServo">
          <img src={servo} alt="servo motor" />
          <h2>Micro Servo
            Motor</h2>
          <p>R$ 22,00</p>
        </div>

        <div className="homeLed">
          <img src={ led } alt="led" />
          <h2>Led Difuso 5mm</h2>
          <p>R$ 0,50</p>
        </div>

        <div className="verMaisEquipamentos">
        
      <Link  id="verEquipamentos" to="/equipamentos">Ver mais</Link>
      </div>

      <div className="equipamentosLinha"></div>


      </div>



      </main>


      </body>
    </>
  )
}

export default App
