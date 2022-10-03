import { MarginClass, BorderClass, VideoWallDisplayClass } from "../classes/video-wall/VideoWallDisplayClass"
import { VideoWallConfigurationClass, RouteIconsClass } from "../classes/video-wall/VideoWallConfigurationClass"

const displayBorder = new BorderClass('#15EF2E', 'black', 3, 3, 3, 3)

const displays = [
    new VideoWallDisplayClass(true, 'A', new MarginClass(0, 4, 0, 4), displayBorder),
    new VideoWallDisplayClass(true, 'B', new MarginClass(0, 4, 4, 4), displayBorder),
    new VideoWallDisplayClass(true, 'C', new MarginClass(0, 4, 4, 4), displayBorder),
    new VideoWallDisplayClass(true, 'D', new MarginClass(0, 4, 4, 0), displayBorder),
    new VideoWallDisplayClass(true, 'E', new MarginClass(4, 0, 0, 4), displayBorder),
    new VideoWallDisplayClass(true, 'F', new MarginClass(4, 0, 4, 4), displayBorder),
    new VideoWallDisplayClass(true, 'G', new MarginClass(4, 0, 4, 4), displayBorder),
    new VideoWallDisplayClass(true, 'H', new MarginClass(4, 0, 4, 0), displayBorder),
]

const fullMatrix = new VideoWallConfigurationClass('Full Matrix', null, new RouteIconsClass(false, false, false), displays)





