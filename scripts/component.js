class Component {
    constructor(props = {}) {
        this.props = props
    }

    setState(state) {
        const oldEl = this.el
        this.state = state
        this.el = this.renderDOM()
        if (this.onStateChange) {
            this.onStateChange(oldEl, this.el)
        }
    }

    renderDOM() {
        this.el = createDOMFromString(this.render());
        if (this.props && this.props.className) {
            this.el.setAttribute('class', this.props.className)
        }
        if (this.props && this.props.id) {
            this.el.setAttribute('id', this.props.id)
        }
        if (this.onClick) {
            this.el.addEventListener("click", this.onClick.bind(this), false);
        }
        return this.el;
    }
}

const createDOMFromString = domString => {
    const tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = domString;
    return tmpDiv.firstElementChild || null;
};

const mount = (component, wrapper) => {
    wrapper.appendChild(component.renderDOM());
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl);
        wrapper.removeChild(oldEl);
    };
};

export { Component, mount };
