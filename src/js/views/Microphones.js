import React from 'react'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SideNavigation from '../components/shared/SideNavigation'

import '../../scss/views/view.scss'

export default function Microphones() {
    return (
        <div id='microphones' className='view'>
            <Header/>
            <div className='view-center'>
                <SideNavigation/>
                <div className='view-component'>
                    <h1>Microphone</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}