import { Link } from 'react-router-dom'
import './css/projeto.css'
import robokids from './images/robokids.png'

function Projeto () {
return (
    <>
    <header>

        <div className="logo">
  <img src={robokids} alt="pequeno robokids" />
  </div>

    </header> 

    <body>
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