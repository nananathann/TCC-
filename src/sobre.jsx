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