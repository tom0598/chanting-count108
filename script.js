let count = 0
let countEl = document.getElementById("count-el")
let historyEl = document.getElementById("history-el")


function increment() {
    if (count == 108) {
        reset()
    } else {
        count++
        countEl.innerText = count
    }
    
}

function reset() {
    historyEl.innerText += `\n${count}`
    if (count == 108) {
        count = 1
        countEl.innerText = count
    } else {
        count = 0
        countEl.innerText = count
    }
    
}

