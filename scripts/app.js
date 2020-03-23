import { Component } from './component.js'
import Grids from './grids.js'
import Result from './result.js'


class App extends Component {
    constructor(props) {
        super(props)
        if (props && props.float) {
            this.state = {
                float: props.float
            }
        } else {
            throw Error('App 需要 float 处理内部 bits')
        }
    }

    handleClick(bits) {
        console.log('app handleClick')
        this.state.float.bits = bits
        this.setState({
            float: this.state.float
        })
    }

    renderDOM() {
        console.log('app renderDOM')
        const div = document.createElement('div')

        let grids = new Grids({
            float: this.state.float,
            className: 'grids',
            handleClick: this.handleClick.bind(this),
        })
        div.appendChild(grids.renderDOM())

        let result = new Result({
            sign: this.state.float.sign,
            exp: this.state.float.exp,
            E: this.state.float.E,
            frac: this.state.float.frac,
            M: this.state.float.M,
            value: this.state.float.value,
            className: 'result',
            handleClick: this.handleClick.bind(this),
        })
        div.appendChild(result.renderDOM())

        div.setAttribute('class', 'app')

        this.el = div
        if (this.onClick) {
            this.el.addEventListener('click', this.onClick.bind(this), false)
        }
        return this.el
    }
}

export default App
