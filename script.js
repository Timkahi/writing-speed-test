const mainBlock = document.getElementById('main')
const speedBlock = document.querySelector('.speed')
const quol = document.querySelector('.quolaty')
const string = 'Конечно же, эта невозможность происходит не от того, что философы не обладают достаточными талантами и навыками, а от того, что в неразрешимости и состоит специфика философских вопросов и проблем. Если на какой-то вопрос в принципе нельзя найти ответ, он признается философским.'
let counter = 0
let truType = 0
let falsesType = 0
let start = 0
let timeSec =0 
let speed
let quolty = 100
function calcSpeed () {
    return Math.round(((truType)/timeSec)*60)
}
function quality () {
    return quol.textContent = `${(quolty = quolty - 0.3).toFixed(2)} точность %`
}

function setInt () {
    if (start === 2) {
        clearTimeout(t)
    }
  const t= setTimeout(setInt, 1000)
   speed = calcSpeed()
   console.log(speed)
   speedBlock.textContent = `${speed} зн/мин`
   return timeSec++
}

function createElevents (text) {
    for (let word of text) {
        let span = document.createElement('div')
        span.classList.add('normalText')
        span.textContent = word
        mainBlock.append(span)
    }
}

function paintElem (text) {
    const arrayElem = document.querySelectorAll('.normalText')
    arrayElem[0].classList.add('backColor')
    document.addEventListener('keydown', (e) => {
        if (start === 0 && e.key != 'Shift' && e.key != 'Alt') {
            setInt()
            start = 1
        }
        if (text.length === counter+1) {
            return start = 2
        }
        if (e.key === text[counter] && e.key != 'Shift') {
            arrayElem[counter].classList.remove('normalText')
            arrayElem[counter].classList.remove('falsePresKey')
            arrayElem[counter].classList.add('truPresKey')
            arrayElem[counter].classList.remove('backColor')
            arrayElem[counter + 1].classList.add('backColor')
            return counter++, truType++
        } else if (e.key != 'Shift' && e.key != 'Alt'){
            arrayElem[counter].classList = ''
            arrayElem[counter].classList.add('falsePresKey')
            quality()
            return falsesType++
        }
    })
}
createElevents (string)
paintElem(string)