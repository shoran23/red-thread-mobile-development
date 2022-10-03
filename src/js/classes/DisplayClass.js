export default class DisplayClass {
    constructor(label='') {
        this.label = label,
        this.id = this.createId()
        this.power = true
        this.blank = false
    }
    createId() {
        let id = this.label.replace(/ /g,'-').toLowerCase()
        return id
    }
}