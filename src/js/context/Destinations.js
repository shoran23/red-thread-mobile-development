import React from 'react'

import DestinationClass from '../classes/DestinationClass'

export const DestinationContext = React.createContext()

class DestinationProvider extends React.Component {
    static contextType = DestinationContext
    constructor() {
        super()
        this.state = {
            destinations: [],
            selectedDestination: null,
            handleState: this.handleState,
            handleDestinationState: this.handleDestinationState,
            sendWebSocket: null
        }
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    handleDestinationState = (index,key,value) => {
        let destinations = this.state.destinations
        destinations[index][key] = value
        this.setState({destinations})
    }
    render() {
        return (
            <DestinationContext.Provider value={{...this.state}}>
                {this.props.children}
            </DestinationContext.Provider>
        )
    }
    componentDidMount() {
        this.setState({destinations: [
            new DestinationClass('Left Projector', 'projector', 0),
            new DestinationClass('Right Projector', 'projector', 1),
            new DestinationClass('Left Monitor', 'display', 2),
            new DestinationClass('Right Monitor', 'display', 3),
            new DestinationClass('Video Feed', 'video-output', 4)
        ]})
        if(this.state.sendWebSocket !== this.context.sendWebSocket) {
            this.setState({sendWebSocket: this.context.sendWebSocket})
        }
    }
}
export default DestinationProvider