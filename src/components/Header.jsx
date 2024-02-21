import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {FaEthereum} from 'react-icons/fa'
const Header = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <h1>Cryptoverse</h1>

                <FaEthereum color="orange" size={"25"}/>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/coins'>Coins</Link></li>
            </ul>
        </div>

    </div>
  )
}
//now we render this header in exchanges

export default Header