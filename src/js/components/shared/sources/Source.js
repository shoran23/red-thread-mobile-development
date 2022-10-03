import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../../scss/components/shared/sources.scss'

export default function Source(props) {   
    const [isDragging, setIsDragging] = useState(false)
    const [scale, setScale] = useState(1)
    const [buttonColor, setButtonColor] = useState(null)
    const [opacity, setOpacity] = useState(1)
    const [zIndex, setZIndex] = useState()
    const [wiggle, setWiggle] = useState()
    const [wiggleReverse, setWiggleReverse] = useState(false)

    const [{ x, y }, api] = useSpring(() => ({
        x: 0,
        y: 0
    }))
    const bindGestures = useGesture({
        onClick: (state) => {
            if(props.destinationContext.selectedDestination !== null) {
                for(const [index, destination] of props.destinationContext.destinations.entries()) {
                    if(destination === props.destinationContext.selectedDestination) {
                        props.destinationContext.handleDestinationState(index,'source',props.source)
                        props.destinationContext.handleState('selectedDestination',null)
                        break
                    }
                }
            }
        },
        onDrag: (state) => {
            if(props.destinationContext.selectedDestination === null) {
                setIsDragging(state.dragging)
                if(state.dragging) {
                    api({
                        x: state.offset[0],
                        y: state.offset[1],
                    })
                    if(props.selectedSourceContext.source !== props.source) {
                        props.selectedSourceContext.handleState('source',props.source)
                        setScale('1.5')
                        setZIndex(2)
                    }
                } else {
                    let destinations = document.getElementsByClassName('destination')
                    for(let index=0; index<destinations.length; index++) {
                        const top = destinations[index].getBoundingClientRect().top
                        const height = destinations[index].getBoundingClientRect().height
                        const left = destinations[index].getBoundingClientRect().left
                        const width = destinations[index].getBoundingClientRect().width
                        if(state.xy[1] >= top && state.xy[1] <= top + height) {
                            if(state.xy[0] >= left && state.xy[0] <= left + width) {    
                                props.destinationContext.handleDestinationState(index,'source',props.source)
                                props.destinationContext.sendWebSocket({
                                    type: 'route',
                                    data: {
                                        destination: props.destinationContext.destinations[index].id,
                                        source: props.selectedSourceContext.source.id
                                    }
                                })
                                break
                            }
                        }
                    } 
                    setOpacity(0)
                    api({
                        x: 0,
                        y: 0,
                    })
                    state.offset[0] = 0
                    state.offset[1] = 0
                    setTimeout(() => {
                        setOpacity(1)
                    },600)
                    props.selectedSourceContext.handleState('source',null)
                    setScale('1')
                    setZIndex(1)
                }
            }
        }
    })
    const wiggleStart = useSpring({
        to: { rotate: -2 },
        from: { rotate: 2 },
        reset: true,
        reverse: wiggleReverse,
        config: { duration: 300 }
    })
    const wiggleEnd = useSpring({
        to: { rotate: 0 },
        from: { rotate: -2 },
        reset: false,
        config: { duration: 300 }
    })
    useEffect(() => {
        let wiggleTimeout
        if(props.source === props.selectedSourceContext.source) {
            setButtonColor('#86e7ff')
        } else {
            setButtonColor('#4cb9d3')
        }
        if(props.destinationContext.selectedDestination !== null) {
            if(props.source === props.destinationContext.selectedDestination.source) {
                setButtonColor('#4cb9d3')
            } else {
                setButtonColor('#86e7ff')
                wiggleTimeout = setTimeout(() => {
                    setWiggleReverse(!wiggleReverse)
                    setWiggle(wiggleStart)
                },300)
            }
        } else {
            setTimeout(() => {
                clearTimeout(wiggleTimeout)
                setWiggle(wiggleEnd)
            },300)
        }
        return(() => {
            clearTimeout(wiggleTimeout)
        })

    },[props.selectedSourceContext,props.destinationContext.selectedDestination,wiggleReverse])

    return (
        <animated.div 
            className='source-container'
            style={wiggle}
        >
            <animated.button 
                className='source' 
                style={{
                    x, 
                    y,
                    scale: scale,
                    backgroundColor: buttonColor,
                    opacity: opacity,
                    zIndex: zIndex,
                }}
                {...bindGestures()}
            >
                <div className='source-label'>{props.source.label}</div>
                <FontAwesomeIcon icon={props.source.icon} color='white' className='source-icon' width={500}/>
                {isDragging ?
                    <div className='source-drag-instruction'>Drag to a destination</div>
                :
                    <React.Fragment/>
                }
            </animated.button>
        </animated.div>
    )
}