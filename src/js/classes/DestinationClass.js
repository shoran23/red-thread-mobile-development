import SourceClass from './SourceClass'

export default class DestinationClass {
    constructor(label='', type='display', displayIndex=null) {
        this.label = label
        this.type = type
        this.displayIndex = displayIndex
        this.id = this.createId()
        this.source = new SourceClass('No Source')
        this.listen = true
    }
    createId() {
        let id = this.label.replace(/ /g,'-').toLowerCase()
        return id
    }
}