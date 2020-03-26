class diseaseChip {
    constructor(props) {
        this.el = document.createElement('div')
        this.el.classList.add('disease-chip')

        this.render(props)
    }

    getElement() {
        return this.el
    }

    render(props) {
        if (props.value === undefined) {
            this.el.innerHTML = `-`
            return
        }

        const code = props.value.code
        const value = props.value.value

        let badgeType = `badge-`

        if (code === 0) {
            badgeType += 'normal'
        } else if (code === 1) {
            badgeType += 'warning'
        } else if (code === 2) {
            badgeType += 'danger'
        } else if (code === 3) {
            badgeType += 'very-danger'
        }


        this.el.innerHTML = `
            <div class="badge ${badgeType}"></div>
            ${value}%
        `
    }
}

export default diseaseChip
