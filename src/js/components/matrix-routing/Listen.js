import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Listen(props) {
    const [icon, setIcon] = useState(faVolumeOff)
    const [label, setLabel] = useState('Listen')
    useEffect(() => {

        if(props.destination.listen) {
            setIcon(faVolumeHigh)
            setLabel('Listening')
        } else {
            setIcon(faVolumeOff)
            setLabel('Listen')
        }

    },[props.destination.listen])
    return (
        <button className='destination-listen'>
            <FontAwesomeIcon icon={icon} color='black' className='destination-listen-icon'/>
            <div className='destination-listen-label'>{label}</div>
        </button>
    )
}