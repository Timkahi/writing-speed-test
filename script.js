const mainBlock = document.getElementById('main')
const speedBlock = document.querySelector('.speed')
const quol = document.querySelector('.quolaty')
const ref = document.querySelector('.ref')
const string = [
    "27 марта 1964 года самое сильное из когда-либо зарегистрированных землетрясений произошло недалеко от пролива Принс-Уильям на Аляске и имело магнитуду 9,2 балла по шкале Рихтера.  Это вызвало цунами, которое опустошило прибрежные деревни и города.  Землетрясение длилось четыре с половиной минуты, сотрясения вызвали оползни, разрушение зданий и другие повреждения.  Общее число погибших составило около 139 человек.",
    "В 1977 году два пассажирских самолета Boeing 747 столкнулись на взлетно-посадочной полосе острова Тенерифе, Канарские острова.  Авария, вызванная недопониманием между авиадиспетчерами и пилотами, привела к гибели 583 человек, что сделало ее самой смертоносной авиационной катастрофой в истории.",
    "Океан покрывает более 70 % поверхности Земли и содержит около 97 % воды Земли.  Это самая большая среда обитания на Земле, где обитают разнообразные морские организмы, поддерживающие экосистему планеты.  Кроме того, океан играет решающую роль в регулировании нашего климата и погодных условий.",
    "Знаете ли вы, что океан покрывает около 71% поверхности Земли и содержит 97% воды Земли?  Кроме того, океан отвечает за производство более половины кислорода, которым мы дышим, и играет решающую роль в регулировании климата Земли.  Однако на него также сильно влияет деятельность человека, такая как загрязнение и чрезмерный вылов рыбы.",
    "Один интересный факт о Греции заключается в том, что здесь находится самое глубокое ущелье в мире - ущелье Викос.  Расположенный в районе Загори в северо-западной части страны, он имеет глубину 1700 метров и формировался в течение миллионов лет рекой Войдоматис.  Густые леса, богатая дикая природа и живописные пейзажи делают его популярным местом для любителей пеших прогулок и приключений на свежем воздухе.",
    'Конечно же, эта невозможность происходит не от того, что философы не обладают достаточными талантами и навыками, а от того, что в неразрешимости и состоит специфика философских вопросов и проблем. Если на какой-то вопрос в принципе нельзя найти ответ, он признается философским.'
]
let counter = 0
let truType = 0
let falsesType = 0
let start = 0
let timeSec =0 
let speed
let quolty = 100
let textToWrite = string[randomVal()]

function randomVal () {
    return Math.floor(Math.random() * 5);
}
/*const addData = async () => {
    try {
        const url = 'https://raw.githubusercontent.com/Timkahi/json/main/texts.json';
        const res = await fetch(url);
        const data = await res.json()
        return this.please = data.text[randomVal()]
    }
    catch {
        return string
    }
}
console.log(addData())*/

function calcSpeed () {
    return Math.round(((truType)/timeSec)*60)
}
function quality () {
    return quol.textContent = `${(quolty = quolty - 0.3).toFixed(2)} точность %`
}

function setInt () {
   const t= setTimeout(setInt, 1000)
   if (start === 2) {
    clearTimeout(t)
   }
   speed = calcSpeed()
   console.log(speed)
   speedBlock.textContent = `${speed} зн/мин`
   return timeSec++
}

function createElevents (text) {
    for (let word of text) {
        let span = document.createElement('span')
        span.classList.add('normalText')
        span.textContent = `${word}`
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
ref.addEventListener('click', ()=> {
    window.location.reload()
})
createElevents (textToWrite)
paintElem(textToWrite)
