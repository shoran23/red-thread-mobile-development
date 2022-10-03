export class MarginClass {
    constructor(top, bottom, left, right) {
        this.top = top
        this.bottom = bottom
        this.left = left
        this.right = right
    }
}
export class BorderClass {
    constructor(colorActive, colorInactive, top, bottom, left, right) {
        this.colorActive = colorActive
        this.colorInactive = colorInactive
        this.top = top
        this.bottom = bottom
        this.left = left
        this.right = right
    }
}
export class VideoWallDisplayClass {
    constructor(icon, group, margin, borders) {
        this.margin = margin
        this.borders = borders
        this.power = true
        this.listen = true
        this.icon = icon
        this.group = group
    }
}
export class RouteIconsClass {
    constructor(left, center, right) {
        this.left = left
        this.center = center
        this.right = right
    }
}
export class VideoWallConfigurationClass {
    constructor(name='', icon=null, routeIcons={}, displays=[]) {
        this.name = name
        this.id = this.createId()
        this.icon = icon
        this.routeIcons = routeIcons
        this.displays = displays
    }
    createId() {
        let id = this.label.replace(/ /g,'-').toLowerCase()
        return id
    }
}