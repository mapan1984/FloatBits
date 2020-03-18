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

    onClick() {
        console.log('grids onclick')
    }

    handleClick(index, state) {
        console.log('grids handleClick')
        let bits = this.state.bits.slice()
        bits[index] = state.checked == true ? 1 : 0
        if (this.props && this.props.float) {
            this.props.float.bits = bits
        }
        this.setState({
            bits: bits
        })
    }

    // render() {
    //     let dom = ['<div>']
    //     for (let b of this.state) {
    //         // dom.push(`<input type="checkbox" ${b == 1 ? 'checked' : ''}>`)
    //         let grid = new Grid({checked: b == 1})

    //         dom.push(grid.render())
    //     }
    //     dom.push('</div>')
    //     return dom.join('')
    // }

    renderDOM() {
        console.log(this.state.bits)
        const div = document.createElement('div')
        for (let [i, b] of this.state.bits.entries()) {
            if (i == 1) { // 符号位|阶码分割
                const span = document.createElement('span')
                span.innerText = '|'
                div.appendChild(span)
            }
            if (i == 9) { // 阶码|尾数分割
                const span = document.createElement('span')
                span.innerText = '|'
                div.appendChild(span)
            }
            let grid = new Grid({
                checked: b == 1,
                index: i,
                handleClick: this.handleClick.bind(this),
            })
            div.appendChild(grid.renderDOM())
        }

        const span = document.createElement('span')
        span.innerText = this.props.float.value
        div.appendChild(span)

        this.el = div
        if (this.onClick) {
            this.el.addEventListener('click', this.onClick.bind(this), false)
        }
        return this.el
    }
}

export default Grids
