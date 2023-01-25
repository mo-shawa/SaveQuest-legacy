import React, { Component } from 'react'
import "./Stats.css"

class Stats extends Component {
    render() {
        return (
            <div className='StatsWrapper'>
                <div className='StatsContainer'
                >
                    <h4>Strength: 3</h4>
                    <h4>Agility: 2</h4>
                    <h4>Charisma: -2</h4>
                </div>
            </div>
        )
    }
}
export default Stats;