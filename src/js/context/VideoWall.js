import React from 'react'

export const VideoWallContext = React.createContext()

class VideoWallProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            videoWall: []
        }
    }
    return() {
        return (
            <VideoWallContext.Provider value={{...this.state}}>
                {this.props.children}
            </VideoWallContext.Provider>
        )
    }
}
export default VideoWallProvider