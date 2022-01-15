import React, { Component } from 'react'
import "./Sidebar.css"
import ThreeCanvas from "..//ThreeCanvas/ThreeCanvas";


class Sidebar extends Component {

    render() {
        return (
            <div className='Sidebar'>
                <ThreeCanvas />
            </div>
        )
    }
}

export default Sidebar;