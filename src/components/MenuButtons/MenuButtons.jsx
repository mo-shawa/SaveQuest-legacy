import React, { Component } from 'react'
 import "./MenuButtons.css"
class MenuButtons extends Component {
    render() {
        return (
            <div className='MenuButtonWrapper'>
            <div className='MenuButtonContainer'>
                <button> All Spending </button>
                <button> Manage Budget</button>
            </div>
            </div>
        )
    }
}

export default MenuButtons;