let selectorInputs = document.querySelectorAll('.form-selectgroup-input')
let checkedInput = document.querySelector('.form-selectgroup-input:checked')
let cryptoSelectors = document.querySelectorAll('.crypto-selector')

/* Selector Trigger Variables */
let selectorTriggerTitle = document.querySelector('.title')
let selectorTriggerSubTitle = document.querySelector('.sub-title')
let selectorTriggerSymbol = document.querySelector('.symbol > i')
let noSelectedTxt = document.querySelector('.no-selected-txt')

for(let selectorInput of selectorInputs) {
    selectorInput.addEventListener('click',function (){

        /* Get data from input */
        let data = getDataFromCheckedInput(this)

        /* Put data */
        putDataToSelectorTrigger(data)

        /* remove please choose your coin text */
        noSelectedTxt.remove()

        /* close selector after click */
        $('#select-currency').modal('toggle')
    })
}

function getDataFromCheckedInput(el){
    let Data = {}
    for(let i in el.dataset) Data[i] = el.dataset[i]
    return Data
}
function putDataToSelectorTrigger(data){
    selectorTriggerTitle.innerHTML = data.coinShortName.toUpperCase()
    selectorTriggerSubTitle.innerHTML = data.coinFullName
    selectorTriggerSymbol.className = data.symbol
}

class Selector {
    constructor() {
    }
}
class RadioSelector extends Selector {

}