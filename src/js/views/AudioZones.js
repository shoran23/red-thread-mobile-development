import React from 'react'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SideNavigation from '../components/shared/SideNavigation'

import '../../scss/views/view.scss'

export default function AudioZones() {
    return (
        <div id='audio-zones' className='view'>
            <Header/>
            <div className='view-center'>
                <SideNavigation/>
                <div className='view-component'>
                    <h1>Audio Zones</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}