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
        return [
            `<div>`,
                `<label for="grid${this.props.index}">${31 - this.props.index}</label>`,
                `<input type="checkbox" id="grid${this.props.index}" ${this.state.checked ? 'checked' : ''}>`,
            `</div>`,
        ].join("")
    }
}

export default Grid

