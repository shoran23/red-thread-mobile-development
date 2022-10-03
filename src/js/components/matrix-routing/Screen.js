import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Screen(props) {
    return (
        <div className='projector-screen-controls'>
            <div className='projector-screen-controls-label'>Screen Controls</div>
            <button className='projector-screen-controls-button projector-screen-controls-up'>
                <FontAwesomeIcon 
                    icon={faAngleUp}
                    color='black'
                    className='projector-screen-control-icon'
                />
            </button>
            <button className='projector-screen-controls-button projector-screen-controls-down'>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    color='black'
                    className='projector-screen-control-icon'
                />
            </button>
        </div>
    )
}