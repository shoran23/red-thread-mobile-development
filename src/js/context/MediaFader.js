import React from 'react'

export const MediaFaderContext = React.createContext()

class MediaFaderProvider extends React.Component {
    static contextType = MediaFaderContext
    constructor() {
        super()
        this.state = {
            fader: {},
            sendWebSocket: null
        }
    }
    render() {

        console.log(this.context)

        return (
            <MediaFaderContext.Provider value={{...this.state}}>
                {this.props.children}
            </MediaFaderContext.Provider>
        )
    }
    componentDidMount() {
        if(this.state.fader !== this.context.mediaFader) {
            this.setState({fader: this.context.mediaFader})
        }
        if(this.state.sendWebSocket !== this.context.sendWebSocket) {
            this.setState({sendWebSocket: this.context.sendWebSocket})
        }
    }
}
export default MediaFaderProvider 