import robokids from '../images/robokids.png'

import'./header.css'

function Header() {
  return (
    <header>

        <img className='robokidsHeader' src={robokids} alt="robokids pequeno" />
  
    </header>
  )
}

export default Header