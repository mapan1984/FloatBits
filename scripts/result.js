import { Component } from './component.js'


class Result extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            sign: this.props.sign,
            exp: this.props.exp,
            E: this.props.E,
            frac: this.props.frac,
            M: this.props.M,
            value: this.props.value
        }
    }

    render() {
        console.log('grid render')
        return [
            `<div>`,
                `<div class="sign">`,
                    `<span>-1</span>`,
                    `<sup>${this.state.sign}</sup>`,
                `</div>`,
                `&nbsp;&nbsp;×&nbsp;&nbsp;`,
                `<div class="exp">`,
                    `<span>2</span>`,
                    `<sup>${this.state.E}</sup>`,
                `</div>`,
                `&nbsp;&nbsp;×&nbsp;&nbsp;`,
                `<div class="frac">${this.state.M}</div>`,
                `&nbsp;&nbsp;=&nbsp;&nbsp;`,
                `<div class="value">${this.state.value}</div>`,
            `</div>`,
        ].join("")
    }
}

export default Result

