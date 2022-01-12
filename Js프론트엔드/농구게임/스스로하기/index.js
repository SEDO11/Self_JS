const ROCK = '바위'
const SCI = '가위'
const PAPER = '보'

let comSelect = ''
let userSelect = ''

function com() {
    let leftCount = document.getElementById('leftCount')
    let NumLC = parseInt(leftCount)
    console.log('버튼 확인')
    if (NumLC % 2 === 1) {
        let select = Math.floor(Math.random())
        comSelect = select <= 0.3 ? SCI : select <= 0.6 ? ROCK : PAPER
        leftCount.innerHTML = NumLC - 1
        console.log(NumLC)
    }
}

function user() {
    let leftCount = document.getElementById('leftCount')
    let NumLC = parseInt(leftCount)
    console.log('버튼 확인')
    if (NumLC % 2 === 0) {
        let select = Math.floor(Math.random())
        comSelect = select < 0.3 ? SCI : select < 0.6 ? ROCK : PAPER
        leftCount.innerHTML = NumLC - 1
    }
}