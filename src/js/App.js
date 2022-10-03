import React from 'react'
import { BrowserRouter as ViewRouter } from 'react-router-dom'

import '../scss/app.scss'

import WebSocketProvider from './context/WebSocket'
import MediaFaderProvider from './context/MediaFader'
import DisplayProvider from './context/DisplayContext'
import DestinationProvider from './context/Destinations'
import SelectedSourceProvider from './context/SelectedSource'

import Router from './views/Router'

export default function App() {
    return (
        <WebSocketProvider>
            <MediaFaderProvider>
                <DisplayProvider>
                    <DestinationProvider>
                        <SelectedSourceProvider>
                            <ViewRouter>
                                <Router/>
                            </ViewRouter>
                        </SelectedSourceProvider>
                    </DestinationProvider>
                </DisplayProvider>
            </MediaFaderProvider>
        </WebSocketProvider>
    )
}