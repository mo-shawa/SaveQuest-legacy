import React, { Component } from 'react'
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='Filler'></div>
                <div className='Title'>
                    <h1>SaveQuest</h1>
                    </div> 
                <div className='LoginWrapper'>
                    <a href="">Login</a>
                </div>

            </div>
        )
    }
}

export default Header;