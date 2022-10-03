export default class SourceClass {
    constructor(label='', icon=null) {
        this.label = label
        this.icon = icon
        this.id = this.createId()
    }
    createId() {
        let id = this.label.replace(/ /g,'-').toLowerCase()
        return id
    }
}