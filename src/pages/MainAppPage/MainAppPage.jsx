import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header"
// import '../../App.css'

export default class MainAppPage extends Component {
    render() {
        return (
            
                <div className="MainContainer">
                    <Sidebar />
                    <div className="WindowWrapper"></div>
                </div>
            
        )
    }
}
