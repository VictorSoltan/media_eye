import React, {useState} from 'react'
import './Header.scss'

import Logo from '../Assets/header/Logo.svg'
import Search from '../Assets/header/Search_alt.svg'

import Sun from '../Assets/header/sun.svg'
import Moon from '../Assets/header/moon.svg'
import Light_Moon from '../Assets/header/light_moon.svg'

import Create_Nft from '../Assets/header/create_nft_button.svg'

import Bag from '../Assets/header/bag_alt.svg'
import Wallet from '../Assets/header/wallet.svg'
import Profile_pic from '../Assets/header/profile_pic.svg'

function Header() {
    
    let [darkMode, setDarkMode] = useState(false)

    return(
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="submenu">
                <div className="option_menu">
                    <select id="cars">
                      <option>MeDIA eYe Marketplace</option>
                      <option>NFT Marketplace</option>
                      <option>Gallery</option>
                    </select>
                </div>
                <span>About</span>
                <span>Blog</span>
            </div>
            <div className="header_search">
            {/* <div className="wrapper"> */}
                <input type="search" />
            {/* </div> */}
                <button>
                    <img src={Search} alt="search"/>                                    
                </button>
            </div>
            <div className="buttons">
                <button className={darkMode ? "mode_switcher" : "mode_switcher active" } onClick={() => setDarkMode(!darkMode)}>
                    <div className="day">
                        <img src={Sun} alt="light mode"/>
                        <div className="day_on" style={{marginLeft: darkMode ? "-35px" : "-5px"}}>
                            <img src={Sun} alt="light mode"/>
                        </div>
                    </div>
                    <div className="night">
                        <img src={Moon} alt="dark mode" />
                        <div className="night_on" style={{marginLeft: darkMode ? "-5px" : "25px"}}>
                            <img src={Light_Moon} alt="dark mode" />
                        </div>    
                    </div>
                </button>
                <button style={{ backgroundImage: `url(${Create_Nft}), no-repeat center` }}>
                    Create NFT
                </button>
                <div className="icon">
                    <button>
                        <img src={Bag} alt="bag"/>
                    </button>
                </div>
                <div className="icon">
                    <button>
                        <img src={Wallet} alt="wallet"/>
                    </button>
                </div>
                <button className="profile_pic">
                    <img src={Profile_pic} alt="profile pic"/>
                </button>                                
            </div>
        </header>
    )
}

export default Header;