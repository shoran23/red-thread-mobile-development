import SourceClass from "../classes/SourceClass"
import { faLaptop, faDesktop, faFilm, faTv } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'

export const videoWallSources = [
    new SourceClass('No Source', null),
    new SourceClass('Laptop 1', faLaptop),
    new SourceClass('Laptop 2', faLaptop),
    new SourceClass('Laptop 3', faLaptop),
    new SourceClass('Laptop 4', faLaptop),
    new SourceClass('Room PC', faDesktop),
    new SourceClass('Apple TV', faApple),
    new SourceClass('Roku', faFilm),
    new SourceClass('Cable TV 1', faTv),
    new SourceClass('Cable TV 2', faTv)
]

export const matrixSources = [
    new SourceClass('No Source'),
    new SourceClass('Laptop 1', faLaptop),
    new SourceClass('Laptop 2', faLaptop),
    new SourceClass('Laptop 3', faLaptop),
    new SourceClass('Laptop 4', faLaptop),
    new SourceClass('Room PC', faDesktop),
    new SourceClass('Apple TV', faApple),
    new SourceClass('Roku', faFilm),
    new SourceClass('Cable TV 1', faTv),
    new SourceClass('Cable TV 2', faTv)
]