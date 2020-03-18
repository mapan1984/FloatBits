import Float from './float.js'
import Grids from './grids.js'
import { mount } from './component.js'


let float = new Float()

mount(
    new Grids({float: float}),
    document.querySelector('.root')
)
