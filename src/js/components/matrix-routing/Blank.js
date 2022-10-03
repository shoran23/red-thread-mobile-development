import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Blank(props) {
    return (
        <div className='projector-blank-controls'>
            <button className='projector-blank-button'>
                <FontAwesomeIcon
                    icon={faVideo}
                    color='black'
                    className='projector-blank-icon'
                />
                {props.displays[props.destination.displayIndex].blank ?
                    <FontAwesomeIcon
                        icon={faBan}
                        color='rgba(0,0,0,0.8)'
                        className='projector-black-ban'

                    />
                :
                    <React.Fragment/>
                }
            </button>
        </div>
    )
}