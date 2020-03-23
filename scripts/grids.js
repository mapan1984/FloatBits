import { Component } from './component.js'
import Grid from './grid.js'

class Grids extends Component {
    constructor(props) {
        super(props)
        if (props && props.float) {
            this.state = {
                bits: props.float.bits
            }
        } else {
            throw Error('Grids 需要 float 处理内部 bits')
        }
    }

    handleClick(index, state) {
        console.log('grids handleClick')
        let bits = this.state.bits.slice()
        bits[index] = state.checked == true ? 1 : 0

        if (this.props && this.props.handleClick) {
            this.props.handleClick(bits)
        }
    }

    renderDOM() {
        console.log('grids renderDOM')
        const div = document.createElement('div')
        for (let [i, b] of this.state.bits.entries()) {
            let grid = new Grid({
                checked: b == 1,
                index: i,
                handleClick: this.handleClick.bind(this),
                className: i == 0 ? 'sign grid' : i < 9 ? 'exp grid' : 'frac grid',
            })
            div.appendChild(grid.renderDOM())
        }

        this.el = div

        if (this.props && this.props.className) {
            this.el.setAttribute('class', this.props.className)
        }
        if (this.props && this.props.id) {
            this.el.setAttribute('id', this.props.id)
        }

        if (this.onClick) {
            this.el.addEventListener('click', this.onClick.bind(this), false)
        }
        return this.el
    }
}

export default Grids
