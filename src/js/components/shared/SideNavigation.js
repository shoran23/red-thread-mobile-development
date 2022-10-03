import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSpring, animated, useSpringRef } from 'react-spring'

import '../../../scss/components/shared/side-navigation.scss'

import splashOptions from '../../constants/splashOptions'


function NavigationOption(props) {
    const [reverse, setReverse] = useState(false)
    const spin = useSpring({
        to: { rotate: 360 },
        from: { rotate: 0 },
        loop: true,
        config: { duration: 2000 }
    })
    const sideToSide = useSpring({
        to: { x: 60 },
        from: { x: 0 },
        loop: true,
        reset: true,
        reverse: reverse,
        config: { duration: 2000 },
    })
    useEffect(() => {
        let timeout = null
        if(props.option.component === props.routes[1]) {
            timeout = setTimeout(() => {
                setReverse(!reverse)
            },2000)
        }
        return(() => {
            clearTimeout(timeout)
        })
    })
    return (
        <React.Fragment>
            {props.option.component === props.routes[1] ?
                <button className='side-navigation-button-active' onClick={() => props.route(props.option.component)}>
                    <p>{props.option.label}</p>
                    <animated.div className='side-navigation-button-active-underline' style={sideToSide}>
                        <animated.div
                            className='side-navigation-button-active-underline-inner'
                            style={spin}
                        />
                    </animated.div>
                </button>
            :
                <button className='side-navigation-button-inactive' onClick={() => props.route(props.option.component)}>
                    <p>{props.option.label}</p>
                </button>
            }
        </React.Fragment>
    )
}
export default function SideNavigation() {
    const navigate = useNavigate()
    const location = useLocation()
    const routes = location.pathname.split('/')
    const route = component => {
        navigate(`/${component}`, {state: {modal: null, popup: null}})
    }
    return (
        <div id='side-navigation'>
            {splashOptions.map((option,index) => (
                <NavigationOption
                    // states
                    key={index}
                    option={option}
                    routes={routes}
                    // functions
                    navigate={navigate}
                    route={route}
                />
            ))}
        </div>
    )
}