class Wizard {
    constructor(wizardEl) {
        this.wizardEL = wizardEl
        this.initialWizard()
    }

    currentStep = 1

    // Is set data-bs-toggle="wizard" ?
    hasWizard() {
        return this.wizardEL.hasAttribute('data-bs-toggle') && this.wizardEL.getAttribute('data-bs-toggle') === 'wizard'
    }

    // increase current step
    increaseCurrentStep = () => {
        this.currentStep++
    }

    // decrease current step
    decreaseCurrentStep() {
        this.currentStep--
    }

    // Hide current Step
    hideCurrentStep(el) {
        el.classList.remove('d-block')
        el.classList.add('d-none')
    }

    // Show next step
    showNextStep(el) {
        el.classList.add('d-block')
        el.classList.remove('d-none')
    }

    // initial wizard
    initialWizard() {

        const self = this

        if (self.hasWizard()) {
            // Go to next step
            for (let i of self.wizardEL.querySelectorAll('[data-bs-next]')) {
                i.onclick = function () {
                    // inCrease current step
                    self.increaseCurrentStep()
                    // Hide current Step
                    self.hideCurrentStep(i.closest('[data-bs-step]'))
                    // Show next step
                    self.showNextStep(self.wizardEL.querySelector(`[data-bs-step="${self.currentStep}"]`))
                }
            }

            // Go to previous step
            for (let trigger of self.wizardEL.querySelectorAll('[data-bs-prev]')) {
                trigger.onclick = function () {
                    // inCrease current step
                    self.decreaseCurrentStep()
                    // Hide current Step
                    self.hideCurrentStep(trigger.closest('[data-bs-step]'))
                    // Show next step
                    self.showNextStep(self.wizardEL.querySelector(`[data-bs-step="${self.currentStep}"]`))
                }
            }
        }
    }
}

let wizardsTriggerLists = [].slice.call(document.querySelectorAll('[data-bs-toggle="wizard"]'))
wizardsTriggerLists.map(function (wizardEl) {
    new Wizard(wizardEl)
})
