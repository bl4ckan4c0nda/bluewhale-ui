class TogglePassword {
    constructor(trigger) {
        this.trigger = trigger
    }

    // Check type of input
    isTypePassword(input) {
        return input.type === 'password'
    }

    // get sibling element
    getSibling(currentNode) {
        return currentNode.previousElementSibling;
    }

    // toggle show class to trigger
    toggleShow(trigger) {
        trigger.classList.toggle('show')
    }

    toggle() {
        let self = this
        for (let trig of this.trigger) {
            trig.onclick = function () {
                if (self.isTypePassword(self.getSibling(this))) {
                    self.getSibling(this).type = 'text'
                    self.toggleShow(this)
                } else {
                    self.getSibling(this).type = 'password'
                    self.toggleShow(this)
                }
            }
        }
    }
}

let passTrigger = document.querySelectorAll('.hide-show-trigger')
let togglePassword = new TogglePassword(passTrigger);
togglePassword.toggle()