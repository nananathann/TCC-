
import './css/projeto.css'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'

function Projeto () {
return (
    <>
    
    <Header /> 

    <body>
        <Sidebar />
        
        <main className='mainProjeto'>
            <h1 className='h1Projeto'>Projeto</h1>

            <div className='video1'></div>
            <div className='video2'></div>
            <div className='video3'></div>
        </main>
        
        </body>

        </>
)

}

export default Projeto