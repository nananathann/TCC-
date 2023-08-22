import './css/objetivos.css'
import Barra from './images/Barramenu.png'
import robokids from './images/robokids.png'
import bonecos from './images/bonecos.png'
import robocolorido from './images/robocolorido.png'

function Objetivos() {

  return (
   <>
   <header>

  <img src={Barra} alt="barra menu" />

  <div className="logo">
  <img src={robokids} alt="pequeno robokids" />
  </div>

  </header>

  <body>
    
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