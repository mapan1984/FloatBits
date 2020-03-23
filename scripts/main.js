import Float from './float.js'
import App from './app.js'
import { mount } from './component.js'


let float = new Float()

mount(
    new App({float: float}),
    document.querySelector('.root')
)
