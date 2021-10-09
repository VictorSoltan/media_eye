import React from 'react'
import './Footer.scss'

import Logo from '../Assets/footer/Logo.svg'

import Ant from '../Assets/footer/ant-design.svg'
import Telegram from '../Assets/footer/telegram.svg'
import Twitter from '../Assets/footer/twitter.svg'
import TikTok from '../Assets/footer/tik_tok.svg'
import Github from '../Assets/footer/github.svg'
import Instagram from '../Assets/footer/instagram.svg'

function Footer() {
    
    const firstDiv = ["NTF Marketplace", "Gallery", "Creators"]
    const secondDiv = ["About", "Team", "Blog", "Contact"]
    const thirdDiv = ["Pitchdeck", "Fundraising", "Litepaper"]
  
    const social_icons = [Ant, Telegram, Twitter, TikTok, Github, Instagram]

    const textDix = (e) => {
        return e.map((el, index) => {
            return(
                <span key={index}>{el}</span>
            )
        })
    }
    
    const icons = social_icons.map((el, index) => {
        return(
            <img key={index} src={el}/>
        )
    })

    return(
        <footer>
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="links">
                <div>{textDix(firstDiv)}</div>
                <div>{textDix(secondDiv)}</div>
                <div>{textDix(thirdDiv)}</div>
            </div>
            <div className="social_media">
                {icons}
            </div>
        </footer>
    )
}

export default Footer;