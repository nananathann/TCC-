import { Link } from 'react-router-dom'
import './css/objetivos.css'
import robokids from './images/robokids.png'
import bonecos from './images/bonecos.png'
import robocolorido from './images/robocolorido.png'

import home from './images/sidebar-icons/home.png'
import sobre from './images/sidebar-icons/sobre.png'
import objetivos from './images/sidebar-icons/objetivos.png'
import equipamentos from './images/sidebar-icons/equipamentos.png'
import projeto from './images/sidebar-icons/projeto.png'
import bibliografia from './images/sidebar-icons/bibliografia.png'

function Objetivos() {

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
    <div className="barradeitada"></div>

    <img src={bonecos} alt="" className="bonequinhos" />

    <section className="p1">
        <p>O nosso objetivo com este projeto é apresentar nossa ideia robótica, usando um pequeno carrinho e algumas pecas de Arduíno, nos produzimos um carrinho, que ira estimular o neném a andar e/ou engatinhar, e também o fara se divertir brincando.</p>
    </section>
    <h1>Objetivos</h1>

    <div className="barradeitada2"></div>
    
    <section className="p2">
        <p>o carrinho terá um sensor de proximidade onde o fará se afastar assim que o neném se aproximar dele, fazendo assim ele ficar seguindo ele, como uma brincadeira de pega-pega. Como item de segurança o carrinho ele será também um segue linha, para ele não sair da área delimitada com tapetes de borracha, para assim evitar acidentes com o neném</p>
    </section>

    <img src={robocolorido} alt="robo colorido" className="robocolorido" />
  </main>
  
  </body>

   </>
  )
}

export default Objetivos