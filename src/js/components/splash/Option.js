import React from 'react'

import '../../../scss/components/splash/option.scss'

export default function Option(props) {
    return (
        <div className='splash-option' onPointerDown={() => props.navigate(`/${props.option.component}`, {state: {modal: null, popup: null}})}>
            <h1 className='splash-option-label'>{props.option.label}</h1>
            <img className='splash-option-icon' src="" alt="icon"/>
        </div>
    )
}