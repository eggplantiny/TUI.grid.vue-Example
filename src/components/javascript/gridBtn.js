class gridBtn {
    constructor(props) {
        const el = document.createElement('div')
        el.classList.add('grid-btn-wrap')
        el.classList.add('tui-grid-cell-content')
        let {pubBtnEl, viewBtnEl} = props.columnInfo.renderer.options

        pubBtnEl = pubBtnEl.cloneNode(true)
        viewBtnEl = viewBtnEl.cloneNode(true)

        this.el = el
        this.pubBtnEl = pubBtnEl
        this.viewBtnEl = viewBtnEl

        this.render(props)
    }

    getElement() {
        return this.el
    }

    beforeDestroy() {
        if (this.pubBtnEl !== null) {
            this.pubBtnEl.removeEventListener('click', function () {
            })
        }
        if (this.viewBtnEl !== null) {
            this.viewBtnEl.removeEventListener('click', function () {
            })
        }
    }

    render(props) {
        const value = props.value

        if (value === undefined) {
            this.el.innerHTML = '-'
            return
        }

        if (value.type === 0) {
            this.pubBtnEl.addEventListener('click', function () {
                console.log(value.checkupNo)
            })
            this.el.appendChild(this.pubBtnEl)
        } else if (value.type === 1) {
            this.viewBtnEl.addEventListener('click', function () {
                console.log(value.checkupNo)
            })
            this.el.appendChild(this.viewBtnEl)
        }
    }
}

export default gridBtn
