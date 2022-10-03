import React from 'react'

import DisplayClass from '../classes/DisplayClass'

export const DisplayContext = React.createContext()

class DisplayProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            displays: [],
            sendWebSocket: null,
        }
    }
    render() {
        return (
            <DisplayContext.Provider value={{...this.state}}>
                {this.props.children}
            </DisplayContext.Provider>
        )
    }
    componentDidMount() {
        this.setState({displays: [
            new DisplayClass('Left Projector'),
            new DisplayClass('Right Projector'),
            new DisplayClass('Left Monitor'),
            new DisplayClass('Right Monitor')
        ]})
        if(this.state.sendWebSocket !== this.context.sendWebSocket) {
            this.setState({sendWebSocket: this.context.sendWebSocket})
        }
    }
}
export default DisplayProvider