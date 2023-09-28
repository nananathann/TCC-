import './css/sobre.css'
import carrinho from './images/CarrinhoFeito.png'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'


function Sobre() {
  return (
    <>
    
    <Header />

    <body>

    <Sidebar />
      
    <main className='mainSobre'>
    

      <h1 className='h1Sobre'>Sobre</h1>

      <div className="p1">
        <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
        </div>

        <div className="p2">
          <p>esse carrinho é um exemplo de carrinhos que tem a base muito parecida com o carrinho que iremos apresentar, tanto que sera usado como base para o nosso projeto</p>
        </div>

      <div className="carro">
      <img className='imgCarrinho' src={carrinho} alt="exemplo de carrinho que ja foi feito" />
      </div>

     <div className="linhaSobre"></div>
     <div className="linhaSobre2"></div>
        
    </main>

    
    </body>
    </>
  )
}


export default Sobre