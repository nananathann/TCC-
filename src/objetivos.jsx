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
   

  <Header />

  <body>

  <Sidebar />
    
  <main>
    <div className="deitada"></div>

    <section className="pa1">
        <p>O nosso objetivo com este projeto é apresentar nossa ideia robótica, usando um pequeno carrinho e algumas pecas de Arduíno, nos produzimos um carrinho, que ira estimular o neném a andar e/ou engatinhar, e também o fara se divertir brincando.</p>
    </section>

    <img src={bonecos} alt="" className="bonequinhos" />

    <h1>Objetivos</h1>

    <div className="deitada2"></div>
    
    <section className="pa2">
        <p>o carrinho terá um sensor de proximidade onde o fará se afastar assim que o neném se aproximar dele, fazendo assim ele ficar seguindo ele, como uma brincadeira de pega-pega. Como item de segurança o carrinho ele será também um segue linha, para ele não sair da área delimitada com tapetes de borracha, para assim evitar acidentes com o neném</p>
    </section>

    <img src={robocolorido} alt="robo colorido" className="robocolorido" />
  </main>
  
  </body>

   </>
  )
}

export default Objetivos