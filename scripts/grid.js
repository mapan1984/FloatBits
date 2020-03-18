import { Component } from './component.js'


class Grid extends Component {
    constructor(props) {
        super(props)
        if (props && props.checked) {
            this.state = { checked: true }
        } else {
            this.state = { checked: false }
        }
    }

    onClick() {
        console.log('grid onclick')
        this.setState({
            checked: !this.state.checked
        })
        if (this.props && this.props.handleClick) {
            this.props.handleClick(this.props.index, this.state)
        }
    }

    render() {
        console.log('grid render')
        return `<input type="checkbox" ${this.state.checked ? 'checked' : ''}>`
    }
}

export default Grid

