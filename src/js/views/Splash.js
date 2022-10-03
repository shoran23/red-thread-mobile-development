import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Option from '../components/splash/Option'

import '../../scss/views/view.scss'
import '../../scss/views/splash.scss'

import splashOptions from '../constants/splashOptions'

export default function Splash() {
    const navigate = useNavigate()
    return (
        <div id='splash' className='view'>
            <Header/>
            <div id='splash-options'>
                {splashOptions.map((option, index) => (
                    <Option
                        // states
                        key={index}
                        option={option}
                        // functions
                        navigate={navigate}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}