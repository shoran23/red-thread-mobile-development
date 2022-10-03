import React from 'react'
import { useSpring, animated } from 'react-spring'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SideNavigation from '../components/shared/SideNavigation'

import '../../scss/views/view.scss'
import '../../scss/views/animation.scss'

export default function Animation() {
    const fade = useSpring({ 
        to: {opacity: 1}, 
        from: {opacity: 0},
        loop: true,
        config: { duration: 1000 }
    })
    const spin = useSpring({
        to: { rotate: 360 },
        from: { rotate: 0 },
        loop: true,
        config: { duration: 5000 }
    })
    return (
        <div id='animation' className='view'>
            <Header/>
            <div className='view-center'>
                <SideNavigation/>
                <div className='view-component'>

                    <animated.div 
                        className='animation-object' 
                        style={spin}
                    />

                    <animated.div
                        className='animation-object'
                        style={fade}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}