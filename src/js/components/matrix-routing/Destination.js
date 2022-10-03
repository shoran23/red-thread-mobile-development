import React, { useContext, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SelectedSourceContext } from '../../context/SelectedSource'
import { DisplayContext } from '../../context/DisplayContext'

import Listen from './Listen'
import Power from './Power'
import Screen from './Screen'
import Blank from './Blank'

export default function Destination(props) {
    const selectedSource = useContext(SelectedSourceContext)
    const displayContext = useContext(DisplayContext)
    const [backgroundColor, setBackgroundColor] = useState()
    const [wiggle, setWiggle] = useState()
    const [wiggleReverse, setWiggleReverse] = useState(false)
    const backgroundDark = useSpring({
        to: { backgroundColor: '#dadada' },
        from: { backgroundColor: 'white' },
        config: { duration: 1000 },
    })
    const backgroundLight = useSpring({
        to: { backgroundColor: 'white' },
        from: { backgroundColor: '#dadada' },
        config: {duration: 1000},
    })
    const wiggleStart = useSpring({
        to: { rotate: -0.35 },
        from: { rotate: 0.35 },
        reset: true,
        reverse: wiggleReverse,
        config: { duration: 300 }
    })
    let resetTimeout = null
    useEffect(() => {
        let wiggleTimeout = null
        if(selectedSource.source === null) {
            if(props.destinationContext.selectedDestination === props.destination) {
                console.log('index = ',props.index)
                setBackgroundColor(backgroundLight)
            } else {
                setBackgroundColor(backgroundDark)
            }
            setWiggle(null)
        } else {
            setBackgroundColor(backgroundLight)
            wiggleTimeout = setTimeout(() => {
                setWiggleReverse(!wiggleReverse)
                setWiggle(wiggleStart)
                console.log('update wiggle reverse')
            },300)
        }  
        if(props.destinationContext.selectedDestination === null) {
            clearTimeout(resetTimeout)
            console.log('clear the reset')
        }
        return(() => {
            clearTimeout(wiggleTimeout)
        })
    },[selectedSource.source, props.destinationContext.selectedDestination, wiggleReverse])
    return (
        <animated.div className='destination-container' 
            style={wiggle} 
            onClick={() => {
                props.destinationContext.handleState('selectedDestination',props.destination)
                resetTimeout = setTimeout(() => {
                    if(props.destinationContext.selectedDestination !== null) {
                        props.destinationContext.handleState('selectedDestination',null)
                    }
                },10000)
            }}
        >
            <animated.div className='destination' style={backgroundColor}>
                {props.destination.type === 'video-output' ?
                    <div className='destination-header destination-header-center'>
                        <h1 className='destination-label'>{props.destination.label}</h1>
                    </div>
                :
                    <div className='destination-header destination-header-space-between'>
                        <Listen destination={props.destination}/>
                        <h1 className='destination-label'>{props.destination.label}</h1>
                        <Power 
                            destination={props.destination}
                            displays={displayContext.displays}
                        />
                    </div>
                }
                <div className='destination-body'>
                    <h2>{props.destination.source.label}</h2>
                    {props.destination.source.icon !== null ?
                        <FontAwesomeIcon icon={props.destination.source.icon} color='black' className='destination-source-icon'/>
                    :
                        <React.Fragment/>
                    } 
                </div>
                <div className='destination-footer'>
                    {props.destination.type === 'projector' ?
                        <React.Fragment>
                            <Screen/>
                            <Blank
                                // states
                                destination={props.destination}
                                displays={displayContext.displays}
                            />
                        </React.Fragment>
                    :
                    <React.Fragment/>
                    }
                </div>
            </animated.div>
        </animated.div>
    )
}