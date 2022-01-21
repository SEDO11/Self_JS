const SCORE1 = 0
const SCORE2 = 2
const SCORE3 = 3

let comSelect = 0
let userSelect = 0
let leftCount = document.getElementById('leftCount')
let comScore = document.getElementById('comScore')
let userScore = document.getElementById('userScore')

function gameOver() {
    alert('게임이 종료 되었습니다.')
}

function gameAlert() {
    alert('차례가 아닙니다.')
}

function gameStart(name) {
    let NumLC = parseInt(leftCount.innerText)
    let NumCS = parseInt(comScore.innerText)
    let NumUS = parseInt(userScore.innerText)
    let select = Math.random()
    if(NumLC === 0) { /* 남은 횟수가 0일때 */
        gameOver()
    } else if (NumLC % 2 === 1 && name === 'com') { /* 컴퓨터일때*/
        comSelect = select <= 0.3 ? SCORE1 : select <= 0.6 ? SCORE2 : SCORE3
        comScore.innerHTML = NumCS + comSelect
        leftCount.innerHTML = NumLC - 1
    } else if (NumLC % 2 === 0 && name === 'user') { /* 유저일때*/
        userSelect = select < 0.3 ? SCORE1 : select < 0.6 ? SCORE2 : SCORE3
        userScore.innerHTML = NumUS + userSelect
        leftCount.innerHTML = NumLC - 1
    } else { /* 차례가 아닐때 */
        gameAlert()
    }
}