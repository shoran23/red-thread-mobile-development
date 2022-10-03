import React, { useContext, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SideNavigation from '../components/shared/SideNavigation'
import Sources from '../components/shared/sources/Sources'
import Destinations from '../components/matrix-routing/Destinations'

import { SelectedSourceContext } from '../context/SelectedSource'
import { DestinationContext } from '../context/Destinations'

import '../../scss/views/view.scss'

import { matrixSources } from '../constants/sources.js'

export default function MatrixRouting() {
    const selectedSource = useContext(SelectedSourceContext)
    const destinationContext = useContext(DestinationContext)
    const backgroundDark = useSpring({
        to: {backgroundColor: 'rgba(0,0,0,0.4)'},
        from: {backgroundColor: 'transparent'},
        config: {duration: 1000},
        reset: true
    })
    const backgroundLight = useSpring({
        to: {backgroundColor: 'transparent'},
        from: {backgroundColor: 'rgba(0,0,0,0.4)'},
        config: {duration: 500},
        reset: true
    })
    const [background, setBackground] = useState()

    useEffect(() => {
        if(selectedSource.source === null && destinationContext.selectedDestination === null) {
            setBackground(backgroundLight)
        } else {
            setBackground(backgroundDark)
        }
    },[selectedSource.source, destinationContext.selectedDestination])

    return (
        <animated.div 
            id='matrix-routing' 
            className='view' 
            style={background}
        >
            <Header/>
            <div className='view-center'>
                <SideNavigation/>
                <div className='view-component'>

                    <Sources
                        // states
                        sources={matrixSources}
                    />

                    <Destinations
                    
                    />

                </div>
            </div>
            <Footer/>
        </animated.div>
    )
}