import React from 'react'
import {
    Route,
    Routes,
} from 'react-router-dom'

import Welcome from './Welcome'
import Splash from './Splash'
import VideoWall from './VideoWall'
import MatrixRouting from './MatrixRouting'
import AudioZones from './AudioZones'
import Microphones from './Microphones'
import Animation from './Animation'

export default function Router() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/splash' element={<Splash/>}/>
                <Route path='/video-wall' element={<VideoWall/>}/>
                <Route path='/matrix-routing' element={<MatrixRouting/>}/>
                <Route path='/audio-zones' element={<AudioZones/>}/>
                <Route path='/microphones' element={<Microphones/>}/>
                <Route path='/animation' element={<Animation/>}/>
            </Routes>
        </React.Fragment>
    )
}