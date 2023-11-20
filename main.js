const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const contents = $$('.tab-content-item')

const tabActive = $('.tab-item.active')
const line = $('.line')
Object.assign(line.style, {
    left: tabActive.offsetLeft + 'px',
    width: tabActive.offsetWidth + 'px'
})
console.log(tabActive)
tabs.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.tab-content-item.activeContent').classList.remove('activeContent')

        Object.assign(line.style, {
            left: this.offsetLeft + 'px',
            width: this.offsetWidth + 'px'
        })

        this.classList.add('active')
        content.classList.add('activeContent')

    }
})
