import React from 'react'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SideNavigation from '../components/shared/SideNavigation'
import VideoWallComponent from '../components/video-wall/VideoWallComponent'
import Sources from '../components/shared/sources/Sources'
import VideoWallConfigurations from '../components/video-wall/VideoWallConfigurations'

import '../../scss/views/view.scss'
import '../../scss/views/video-wall.scss'

import { videoWallSources } from '../constants/sources'

export default function VideoWall() {
    return (
        <div id='video-wall' className='view'>
            <Header/>
            <div className='view-center'>
                <SideNavigation/>
                <div className='view-component' id='video-wall-container'>
                    <VideoWallConfigurations/>
                    <VideoWallComponent/>
                    <Sources
                        // states
                        sources={videoWallSources}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}