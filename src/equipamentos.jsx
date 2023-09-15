import { Link } from 'react-router-dom'
import './css/equipamentos.css'
import robokids from './images/robokids.png'

import segue from './images/equipamentos/segue.png'
import servo from './images/equipamentos/servo.png'
import ponteH from './images/equipamentos/ponteH.png'
import ultrassonico from './images/equipamentos/ultrassonico.png'
import motor from './images/equipamentos/motor.png'
import led from './images/equipamentos/led.png'

import home from './images/sidebar-icons/home.png'
import sobre from './images/sidebar-icons/sobre.png'
import objetivos from './images/sidebar-icons/objetivos.png'
import equipamentos from './images/sidebar-icons/equipamentos.png'
import projeto from './images/sidebar-icons/projeto.png'
import bibliografia from './images/sidebar-icons/bibliografia.png'

function Equipamentos () {
return (
    <>
    
    <Header />

    <body>

        <Sidebar />

        <main>
            <h1>Equipamentos</h1>

            <div className="elementos">

            <div className="seguidor">
                <img src={segue} alt="imagem de um sensor segue linha" />
                <h2>Módulo 
                    Seguidor de 
                    Linha - 
                    TCRT5000</h2>
                <h3>R$10,00</h3>
            </div>

            <div className="servo">
                <img src={servo} alt="imagem de um servo motor" />
                <h2>Micro 
                    Servo 
                    Motor</h2>
                <h3>R$ 22,00</h3>
            </div>

            <div className="ponte">
                <img src={ponteH} alt="imagem de uma ponte h" />
                <h2>Ponte H 
                    Dupla 
                    L298N</h2>
                <h3>R$ 24,00</h3>
            </div>

            <div className="ultrassonico">
                <img src={ultrassonico} alt="imagem de um sensor ultrassonico" />
                <h2> Módulo 
                    Sensor de 
                    Distância 
                    Ultrassônico</h2>
                <h3>R$ 15,00</h3>
            </div>

            <div className="roda">
                <img src={motor} alt="imagem de um motor" />
                <h2> Kit Motor 
                    DC 3-6V + 
                    Roda 68mm</h2>
                <h3>R$ 18,00</h3>
            </div>

            <div className="led">
                <img src={led} alt="imagem de um led vermelho" />
                <h2>Led Difuso
                    5mm</h2>
                <h3>R$ 0,50</h3>
            </div>

            </div>

        </main>

    </body>
    </>
)

}

export default Equipamentos