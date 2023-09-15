import robokids from '../images/robokids.png'

import'./header.css'

function Header() {
  return (
    <header>

        <div className="logo">
        <img src={robokids} alt="pequeno robokids" />
        </div>
  
    </header>
  )
}

export default Header