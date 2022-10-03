import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

export default function Power(props) {
    const [label, setLabel] = useState('Power Off')

    useEffect(() => {
        if(props.displays[props.destination.displayIndex].power) {
            setLabel('Power On')
        } else {
            setLabel('Power Off')
        }

    },[props.displays[props.destination.displayIndex].power])

    return (
        <button className='destination-power'>
            <FontAwesomeIcon icon={faPowerOff} color='black' className='destination-power-icon'/>
            <div className='destination-power-label'>{label}</div>
        </button>
    )
}