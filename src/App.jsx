import { Link } from 'react-router-dom'
import './css/home.css'
import robokids from './images/robokids.png'
import robo from './images/robo-12.png'
import home from './images/sidebar-icons/home.png'
import sobre from './images/sidebar-icons/sobre.png'
import objetivos from './images/sidebar-icons/objetivos.png'
import equipamentos from './images/sidebar-icons/equipamentos.png'
import projeto from './images/sidebar-icons/projeto.png'
import bibliografia from './images/sidebar-icons/bibliografia.png'


function App() {

  return (
    <>
    <header>

      

<div className="logo">
  <img src={robokids} alt="pequeno robokids" />
  </div>
    </header>

    <body>

    
    <input type="checkbox" id="check" />
    <label for="check">

        <div class="menu">
            <span class="hamburguer"></span>
        </div>

    </label>

    <div class="barra">

      <div className="itens">

    <div className="inicio">
      <img src={ home } alt="" />  <Link id="inici" to="/">Inicio</Link>
    </div>
    <div className="sobre">
      <img src={ sobre } alt="" />  <Link id="sobr" to="/sobre">Sobre</Link>
    </div>
    <div className="objetivos">
      <img src={ objetivos } alt="" />  <Link id="objetiv" to="/objetivos">Objetivos</Link>
    </div>
    <div className="equipamentos">
      <img src={ equipamentos } alt="" />  <Link id="equipament" to="/equipamentos">Equipamentos</Link>
    </div>
    <div className="projeto">
      <img src={ projeto } alt="" />  <Link id="projet" to="/projeto">Projeto</Link>
    </div>
    <div className="bibliografia">
      <img src={ bibliografia } alt="" />  <Link id="bibliografias" to="/bibliografia">Bibliografia</Link>
    </div>

     </div>

    </div>
  
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
      <Link  id="linkk" to="/objetivos">Objetivos</Link>
      </div>

    <h1> Público <br/>Alvo</h1>
    
    <div className="publico">
      <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
      </div>
  
      

      </main>
      <div className="logoFinal">
        <img src={robokids} alt="robokids" />

      </div>
      
      <div className="barra2"></div>

    <div className="sobre">

      <h1>Sobre</h1>
      <div className="sobre">
        <p>O nosso projeto sera um carrinho de brinquedo com sensores ultrassônicos, segue linha, e servos, com o intuído de estimular o desenvolvimento físico e distrair o neném</p>
      </div>

      <img src="" alt="img do carrinho exemplo" className="carrinho" />

      <div className="verMais">
        <p>Ver mais</p>
      </div>
      <div className="barraSobre"></div>
      <div className="barraSobre2"></div>


      </div>


      </body>
    </>
  )
}

export default App
