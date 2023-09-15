import { Link } from 'react-router-dom'
import './css/projeto.css'
import robokids from './images/robokids.png'

import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'

function Projeto () {
return (
    <>
    
    <Header /> 

    <body>
        <Sidebar />
        
        <main>
            <h1>Projeto</h1>

            <div className='video1'></div>
            <div className='video2'></div>
            <div className='video3'></div>
        </main>
        
        </body>

        </>
)

}

export default Projeto