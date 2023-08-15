
import './css/sobre.css'
import Barra from './images/Barramenu.png'
import robokids from './images/robokids.png'
import carrinho from './images/carrinhofeito.png'


function Sobre() {
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
      
      <img src={carrinho} alt="exemplo de carrinho que ja foi feito" />

      <div className="p1">
        <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
        </div>

        <div className="p2">
          <p>esse carrinho é um exemplo de carrinhos que tem a base muito parecida com o carrinho que iremos apresentar, tanto que sera usado como base para o nosso projeto</p>
        </div>
    </main>
    </>
  )
}


export default Sobre