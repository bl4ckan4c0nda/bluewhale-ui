const faName = document.querySelectorAll('.currency-selector-content .fa-name')
const shortName = document.querySelectorAll('.currency-selector-content .title')
const fullName = document.querySelectorAll('.currency-selector-content .sub-title')


const lists = [...faName,...shortName,...fullName]

let items = []

lists.forEach((item) => {
    items.push(item.textContent)
});



// get search bar element
const searchInput = document.getElementById("search-input");

// store name elements in array-like object
const namesFromDOM = document.querySelectorAll(".currency-selector-content");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    const startsWithN = items.filter((item) => item.startsWith(searchQuery));

    for(let nameElement of namesFromDOM) {
        nameElement.style.display = "none";
    }

    const filterSearchRes = (result) => {
        for (const nameElement of namesFromDOM) {
            // store name text and convert to lowercase
            let name = nameElement.textContent.toLowerCase();

            // compare current name to search input
            if (name.includes(result)) {
                // found name matching search, display it
                nameElement.style.display = "flex";
            }
        }
    }

    for(let i of startsWithN) {
        filterSearchRes(i)
    }
});

function Stopwatch(){
    let startTime,endTime,running=false,duration=0
    this.start = () => {
        if(duration) throw new Error("stopWatch is already start")
        running = true
        startTime = new Date()
    }
    this.stop = () => {
        if(!duration) throw new Error("stopWatch is already stopped")
        running = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }
    this.reset = () => {
        startTime=null
        endTime=null
        running=false
        duration=0
    }
    Object.defineProperty(this,'duration',{
        get: () => {return duration}
    })
}
