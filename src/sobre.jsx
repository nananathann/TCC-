import { Link } from 'react-router-dom'
import './css/sobre.css'
import robokids from './images/robokids.png'
import carrinho from './images/carrinhofeito.png'
import home from './images/sidebar-icons/home.png'
import sobre from './images/sidebar-icons/sobre.png'
import objetivos from './images/sidebar-icons/objetivos.png'
import equipamentos from './images/sidebar-icons/equipamentos.png'
import projeto from './images/sidebar-icons/projeto.png'
import bibliografia from './images/sidebar-icons/bibliografia.png'


function Sobre() {
  return (
    <>
    <Header />

    <body>

    <Sidebar />
      
    <main>
    

      <h1>Sobre</h1>

      <div className="p1">
        <p>Já existem carrinhos, com sensor de proximidade, e segue linha, porém nenhum deles foram criados com o mesmo intuito do nosso, os objetivos de cada um é diferente um do outro</p>
        </div>

        <div className="p2">
          <p>esse carrinho é um exemplo de carrinhos que tem a base muito parecida com o carrinho que iremos apresentar, tanto que sera usado como base para o nosso projeto</p>
        </div>

      <div className="carro">
      <img src={carrinho} alt="exemplo de carrinho que ja foi feito" />
      </div>
        
    </main>

    
    </body>
    </>
  )
}


export default Sobre