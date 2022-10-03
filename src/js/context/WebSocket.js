import React from 'react'

import { MediaFaderContext } from './MediaFader'
import { DestinationContext } from './Destinations'
import { DisplayContext } from './DisplayContext'
import { VideoWallContext } from './VideoWall'

export const WebSocketContext = React.createContext()

class WebSocketProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            destinations: [1,2,3],
            displays: [],
            dsp: {
                mediaFader: {label: 'Media Fader', id: 'media-fader', level: 90, mute: false},
                micFaders: []
            },
            videoWall: [

            ],
            sendWebSocket: this.sendWebSocket
        }
    }
    sendWebSocket = message => {
        console.log(JSON.stringify(message))
    }
    render() {
        return (
            <WebSocketContext.Provider value={{...this.state}}>
                <MediaFaderContext.Provider value={{'mediaFader': this.state.dsp.mediaFader, 'sendWebSocket': this.sendWebSocket}}>
                    <DestinationContext.Provider value={{'destinations': this.state.destinations, 'sendWebSocket': this.sendWebSocket}}>
                        <DisplayContext.Provider value={this.state.displays}>
                            <VideoWallContext.Provider value={this.state.videoWall}>
                                {this.props.children}
                            </VideoWallContext.Provider>
                        </DisplayContext.Provider>
                    </DestinationContext.Provider>
                </MediaFaderContext.Provider>
            </WebSocketContext.Provider>
        )
    }
}
export default WebSocketProvider