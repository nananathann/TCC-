import './css/objetivos.css'
import bonecos from './images/bonecoss.png'
import robocolorido from './images/roboColorido.png'

import Header from './componentes/Header.jsx'
import Sidebar from './componentes/Sidebar.jsx'

function Objetivos() {

  return (
   <>
   

  <Header />

  <body>

  <Sidebar />
    
  <main className='mainObjetivos'>

  <img src={bonecos} alt="" className="bonequinhos" />

    <div className="deitada"></div>

    <section className="pa1">
        <p>O nosso objetivo com este projeto é apresentar nossa ideia robótica, usando um pequeno carrinho e algumas pecas de Arduíno, nos produzimos um carrinho, que ira estimular o neném a andar e/ou engatinhar, e também o fara se divertir brincando.</p>
    </section>


    <h1 className='objetivinhos'>Objetivos</h1>

    <img src={ robocolorido } alt="robo colorido" id='robocolorido' />


    <div className="deitada2"></div>
    
    <section className="pa2">
        <p>o carrinho terá um sensor de proximidade onde o fará se afastar assim que o neném se aproximar dele, fazendo assim ele ficar seguindo ele, como uma brincadeira de pega-pega. Como item de segurança o carrinho ele será também um segue linha, para ele não sair da área delimitada com tapetes de borracha, para assim evitar acidentes com o neném</p>
    </section>

  </main>
  
  </body>

   </>
  )
}

export default Objetivos