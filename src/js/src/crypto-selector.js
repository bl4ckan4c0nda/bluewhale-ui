/*let selectorInputs = document.querySelectorAll('.form-selectgroup-input')
let checkedInput = document.querySelector('.form-selectgroup-input:checked')
let cryptoSelectors = document.querySelectorAll('.crypto-selector')

/!* Selector Trigger Variables *!/
let selectorTriggerTitle = document.querySelector('.title')
let selectorTriggerSubTitle = document.querySelector('.sub-title')
let selectorTriggerSymbol = document.querySelector('.symbol > i')
let noSelectedTxt = document.querySelector('.no-selected-txt')

for (let selectorInput of selectorInputs) {
    selectorInput.addEventListener('click', function () {

        /!* Get data from input *!/
        let data = getDataFromCheckedInput(this)

        /!* Put data *!/
        putDataToSelectorTrigger(data)

        /!* remove please choose your coin text *!/
        noSelectedTxt.remove()

        /!* close selector after click *!/
        $('#select-currency').modal('toggle')
    })
}

function getDataFromCheckedInput(el) {
    let Data = {}
    for (let i in el.dataset) Data[i] = el.dataset[i]
    return Data
}

function putDataToSelectorTrigger(data) {
    selectorTriggerTitle.innerHTML = data.coinShortName.toUpperCase()
    selectorTriggerSubTitle.innerHTML = data.coinFullName
    //selectorTriggerSymbol.className = data.symbol
}*/

const SELECTOR_DATA_TOGGLE = '[data-toggle="selector"]'
const INPUTS = document.querySelectorAll('[data-selector] input')

class Selector {

    constructor(trigger, config) {
        this.trigger = trigger
        this.initialSelector()
        this.selected = false
    }

    _relatedTarget(trigger) {
        let data_target = trigger.getAttribute('data-target')
        return document.getElementById(data_target)
    }

    _getRelatedInputData(input) {
        return input.dataset
    }

    _isRelatedToTrigger(trigger) {
        return trigger.getAttribute('data-target') === this._relatedTarget(trigger).getAttribute('id')
    }

    _removeDefaultText(trigger) {
        let defaultEl = trigger.querySelector(`[defaultText]`)
        if (this.selected && defaultEl !== null) defaultEl.remove()
    }

    _closeModalAfterSelect(trigger) {
        let modalID = trigger.getAttribute(`data-bs-target`)
        $(modalID).modal('hide')
    }

    _triggerData(data,trigger) {
        if (this._isRelatedToTrigger(trigger)) {
            for (let d in data) {

                trigger.querySelector(`[${d}]`).innerHTML = data[d]

                if (trigger.querySelector(`[${d}][toUpperCase]`) !== null) {
                    trigger.querySelector(`[${d}][toUpperCase]`).innerHTML = data[d].toUpperCase()
                }

                if (trigger.querySelector(`[${d}][toggleClass]`) !== null) {
                    trigger.querySelector(`[${d}][toggleClass]`).className = data[d]
                }

            }
        }
    }

   _getRelatedTrigger(input){
       const id = input.closest('[data-selector]').id
       return document.querySelector(`[data-target=${id}]`)
   }

    _inputClicked() {
        let self = this
        for (let input of INPUTS) {
            input.onclick = function () {

                self.selected = true

                self._removeDefaultText(self._getRelatedTrigger(this))

                let data = self._getRelatedInputData(this)

                self._triggerData(data,self._getRelatedTrigger(this))

                self._closeModalAfterSelect(self._getRelatedTrigger(this))
            }
        }
    }

    initialSelector() {
        this._inputClicked()
        this.trigger.onclick = () => {
        }
    }

}

let selectorTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="selector"]'));
selectorTriggerList.map(function (selectorTriggerEl) {
    return new Selector(selectorTriggerEl);
});