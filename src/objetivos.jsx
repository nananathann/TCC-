import { Link } from 'react-router-dom'
import './css/objetivos.css'
import bonecos from './images/bonecos.png'
import robocolorido from './images/robocolorido.png'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'

function Objetivos() {

  return (
   <>
   

  <Header />

  <body>

  <Sidebar />
    
  <main className='mainObjetivos'>
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