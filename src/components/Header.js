import React from 'react'
import './Header.css'
import logo from '../img/amazon-logo.png'
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingBasket} from '@mui/icons-material'
import { Link, Route, Routes } from 'react-router-dom'
const Header = () => {
  return (
   
    <div className='header'>
        <Link to="/"> 
        <img src={logo} alt="amazon logo" className="header_logo" />
       </Link>
          <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon"/>
          </div>
            <div className="header_nav">
                    <div className="header_option">
                        <span className='header_optionLineOne'>Hello Guest</span>
                        <span className='header_optionLineTwo'> Sign In</span>
                    </div>
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                    <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                    </Link>
              </div>
      </div>
        
  )
}

export default Header
