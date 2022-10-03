export default class SplashOption {
    constructor(label='') {
        this.label = label
        this.component = this.createComponent()
    }
    createComponent() {
        let component = this.label.replace(/ /g,'-').toLowerCase()
        return component
    }
}