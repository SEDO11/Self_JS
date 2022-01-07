let textElm = document.getElementById('text')
let shotsLeft = document.getElementById('shotsLeft')
let computerScore = document.getElementById('computer_score')
let userScore = document.getElementById('user_score')

const COM = "컴퓨터"
const USER = "유저"
const SCORE_SHOT = "점 슛"

function alertFunc(name) {
    alert('지금은 ' + name + ' 차례가 아닙니다.')
}

function textInfo(name, score, shot) {
    textElm.innerHTML = name + ': ' + score + shot
}

function gameOver() {
    let computerScoreValue = document.getElementById('computer_score').innerText /* 컴퓨터 점수 값 불러오기 */
    let comScoreLeft = parseInt(computerScoreValue) /* 불러온 값을 숫자형으로 변환 */
    let userScoreValue = document.getElementById('user_score').innerText /* 유저 점수 값 불러오기 */
    let userScoreLeft = parseInt(userScoreValue) /* 불러온 값을 숫자형으로 변환 */
    alert('게임이 종료되었습니다.')
    if(comScoreLeft > userScoreLeft) {
        alert(COM + ': ' + comScoreLeft + ' / ' + USER + ': ' + userScoreLeft + '로 ' + COM + ' 이(가) 이겼습니다.')
    } else if( comScoreLeft < userScoreLeft) {
        alert(COM + ': ' + comScoreLeft + ' / ' + USER + ': ' + userScoreLeft + '로 ' + COM + ' 이(가) 이겼습니다.')
    } else {
        alert(COM + ': ' + comScoreLeft + ' / ' + USER + ': ' + userScoreLeft + '로 ' + COM + ' 비겼습니다.')
    }
    shotsLeft.innerHTML = "Game Over"
}

function onComputerShoot() {
    let shotsLeftValue = document.getElementById('shotsLeft').innerText /* 남은 횟수 값 불러오기 */
    let computerScoreValue = document.getElementById('computer_score').innerText /* 컴퓨터 점수 값 불러오기 */
    let scoreLeft = parseInt(computerScoreValue) /* 불러온 값을 숫자형으로 변환 */
    let numLeft = parseInt(shotsLeftValue) /* 불러온 값을 숫자형으로 변환 */
    if(numLeft % 2 === 1) {
        let score = Math.random() < 0.3 ? 0 : Math.random() < 0.6 ? 2 : 3 /* 0.3보다 작으면 t, 0 / 0.6보다 작으면 t, 2 / 크면 f, 3점 슛이 된다 */
        textInfo(COM, score, SCORE_SHOT)
        computerScore.innerHTML = scoreLeft + score /* 컴퓨터 점수 갱신 */
        shotsLeft.innerHTML = numLeft - 1 /* 남은 횟수 차감 */
    } else {
        alertFunc(COM)
        console.log(numLeft / 2)
    }
}

function onUserShoot2() {
    let shotsLeftValue = document.getElementById('shotsLeft').innerText /* 남은 횟수 값 불러오기 */
    let userScoreValue = document.getElementById('user_score').innerText /* 유저 점수 값 불러오기 */
    let scoreLeft = parseInt(userScoreValue) /* 불러온 값을 숫자형으로 변환 */
    let numLeft = parseInt(shotsLeftValue) /* 불러온 값을 숫자형으로 변환 */
    if(numLeft % 2 === 0) {
        let score = Math.random() < 0.6 ? 2 : 0 /* 0.5보다 작으면 t, 2 / 0.5보다 크면 f, 0점 슛이 된다*/
        textInfo(USER, score, SCORE_SHOT)
        if(numLeft === 0) {
            userScore.innerHTML = scoreLeft + score /* 유저 점수 갱신 */
            gameOver()
        } else {
            userScore.innerHTML = scoreLeft + score /* 유저 점수 갱신 */
            shotsLeft.innerHTML = numLeft - 1 /* 남은 횟수 차감 */
        }
    } else {
        alertFunc(USER)
    }
}

function onUserShoot3() {
    let shotsLeftValue = document.getElementById('shotsLeft').innerText /* 남은 횟수 값 불러오기 */
    let userScoreValue = document.getElementById('user_score').innerText /* 유저 점수 값 불러오기 */
    let scoreLeft = parseInt(userScoreValue) /* 불러온 값을 숫자형으로 변환 */
    let numLeft = parseInt(shotsLeftValue) /* 불러온 값을 숫자형으로 변환 */
    if(numLeft % 2 === 0) {
        let score = Math.random() < 0.6 ? 0 : 3 /* 0.6보다 작으면 t, 0 / 0.6보다 크면 f, 3점 슛이 된다 */
        textInfo(USER, score, SCORE_SHOT)
        if(numLeft === 0) {
            userScore.innerHTML = scoreLeft + score /* 유저 점수 갱신 */
            gameOver()
        } else {
            userScore.innerHTML = scoreLeft + score /* 유저 점수 갱신 */
            shotsLeft.innerHTML = numLeft - 1 /* 남은 횟수 차감 */
        }
    } else {
        alertFunc(USER)
    }
}