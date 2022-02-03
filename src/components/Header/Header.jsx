import React, { Component } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='Filler'>
                </div>
                <div className='Title'>
                    <Link to='app'>
                        <img className='TitleImg' src="/Images/cooltext402280913904255.png" alt="fe" srcset="" />

                    </Link>
                </div>
                <div className='LoginWrapper' id='HeaderLogin'>
                    {this.props.user ?
                        <button className="nes-btn" onClick={() => this.props.userLogout()}>LOGOUT</button>
                        : ''
                    }
                </div>
            </div>
        )
    }
}

export default Header;