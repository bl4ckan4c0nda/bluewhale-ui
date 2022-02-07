class SwitcherMode {
    constructor(togglerEl, bodyEL) {
        this.togglerEl = togglerEl
        this.bodyEL = bodyEL
    }
    self = this
    // Localstorage has any value
    localStorageHasThemeMode() {
        return localStorage.getItem('theme-mode') !== null
    }
    // check theme-mode value
    themeModeValue() {
        return localStorage.getItem('theme-mode')
    }
    // if theme-mode value is light
    themeModeHasLight(){
        this.addLight()
        for (let toggle of this.togglerEl) this.removeDarkToSwitcher(toggle)
    }
    // if theme-mode value is dark
    themeModeHasDark(){
        this.addDark()
        for (let toggle of this.togglerEl) this.addDarkToSwitcher(toggle)

    }
    // localstorage
    localstorage() {
        this.localStorageHasThemeMode ? this.themeModeValue() === 'light' ? this.themeModeHasLight() : this.themeModeHasDark() : this.addLightToBodyAndLocalstorage()
    }
    // add light to body and localstorage
    addLightToBodyAndLocalstorage() {
        this.addLightToLocalstorage()
        this.addLight()
    }
    // Add light to localstorage
    addLightToLocalstorage() {
        localStorage.setItem('theme-mode','light')
    }

    // Add light to localstorage
    addDarkToLocalstorage() {
        localStorage.setItem('theme-mode','dark')
    }

    // theme-mode has light value
    themeModeIsLight(){
        return localStorage.getItem('theme-mode') === 'light'
    }
    // theme-mode has dark value
    themeModeIsDark(){
        return localStorage.getItem('theme-mode') === 'dark'
    }
    // Toggle body class
    changeBodyClass() {
        this.darkBody() ? this.addLight() : this.addDark()
    }

    // Add theme-light to body
    addLight() {
        this.bodyEL.classList.remove('theme-dark')
        this.bodyEL.classList.add('theme-light')
    }

    // Add theme-dark to body
    addDark() {
        this.bodyEL.classList.remove('theme-light')
        this.bodyEL.classList.add('theme-dark')
    }

    // if body has class theme-dark, then return true
    darkBody() {
        return this.bodyEL.classList.contains('theme-dark')
    }

    // localstorage value switcher
    toggleLocalStorageValue() {
        this.themeModeIsLight() ? this.addDarkToLocalstorage() : this.addLightToLocalstorage()
    }
    // add Dark to switcher btn
    addDarkToSwitcher(trigger) {
        trigger.classList.add('dark')
    }
    // remove Dark to switcher btn
    removeDarkToSwitcher(trigger) {
        trigger.classList.remove('dark')
    }
    // check switcher btn has dark class or not
    switcherHasDark(trigger){
        return trigger.classList.contains('dark')
    }

    // toggle dark class to switcher
    toggleSwitcherClass(trigger) {
        trigger.classList.toggle('dark')
    }

    toggle() {
        let self = this
        for (let toggle of this.togglerEl) {
            toggle.onclick = function () {
                self.toggleSwitcherClass(this)
                self.switcherHasDark(this) ?  self.addDarkToSwitcher(this) : self.removeDarkToSwitcher(this)
                self.changeBodyClass()
                self.toggleLocalStorageValue()
            }
        }
    }
}

const toggler = document.querySelectorAll('.switcher-toggler')
const BODY = document.body;
const switcher = new SwitcherMode(toggler, BODY)
switcher.toggle()
switcher.localstorage()
