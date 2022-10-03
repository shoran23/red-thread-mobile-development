import React from 'react'

export const SelectedSourceContext = React.createContext()

class SelectedSourceProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            source: null,
            handleState: this.handleState
        }
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    render() {
        return (
            <SelectedSourceContext.Provider value={{...this.state}}>
                {this.props.children}
            </SelectedSourceContext.Provider>
        )
    }
}
export default SelectedSourceProvider