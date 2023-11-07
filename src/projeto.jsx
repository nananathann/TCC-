
import './css/projeto.css'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'

import FTcarrinho from './images/FTcarrinho.jpg'
import FTcarrinho2 from './images/FTcarrinho2.jpg'
import FTcarrinho3 from './images/outraFT.jpg'

function Projeto () {
return (
    <>
    
    <Header /> 

    <body>
        <Sidebar />
        
        <main className='mainProjeto'>
            <h1 className='h1Projeto'>Projeto</h1>

<div className="videos">
            <div className='video1'> 
            <img src={FTcarrinho3} alt="foto do carrinho fyncionando completamente" className="FTcarrinhoProjeto" />

            </div>
            <div className='video2'>
            <img src={FTcarrinho} alt="foto do carrinho fyncionando completamente" className="FTcarrinhoProjeto" />
            </div>
            <div className='video3'>
            <img src={FTcarrinho2} alt="foto do carrinho fyncionando completamente" className="FTcarrinhoProjeto" />

            </div>
            </div>
        </main>
        
        </body>

        </>
)

}

export default Projeto