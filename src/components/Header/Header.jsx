import React, { Component } from 'react'
import "./Header.css"
import ThreeCanvas from "..//ThreeCanvas/ThreeCanvas";
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='Filler'>
                    <Link to='landing'>
                        <ThreeCanvas />
                    </Link>
                </div>
                <div className='Title'>
                    <Link to='app'>
                        {/* <h1>SaveQuest</h1> */}
                        <img className='TitleImg' src="/Images/cooltext402280913904255.png" alt="fe" srcset="" />

                    </Link>
                    {/* <i class="nes-icon coin is-medium"></i> */}
                    </div> 
                <div className='LoginWrapper' id='HeaderLogin'>
                    {this.props.user ? 
                    <Link to='auth'>Logout</Link> 
                    : <Link to='auth'>Login</Link> 
                }
                </div>

            </div>
        )
    }
}

export default Header;