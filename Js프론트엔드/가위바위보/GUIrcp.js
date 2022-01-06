const WIN = 'win'
const DRAW = 'draw'
const LOSS = 'loss'
let winC = 0
let drawC = 0
let lossC = 0

function counter(sel) { // 승, 패 , 무 전적을 알려주는 함수
    switch (sel) {
        case WIN:
            winC += 1
            break
        case DRAW:
            drawC += 1 
            break
        default:
            lossC += 1
            break
    }
    console.log('승: ' + winC + ', 패: ' + lossC + ', 무: ' + drawC)
}

function game(mySelect) { // 게임을 실행 할 수 있도록 하는 함수
    const ROCK = '바위'
    const SCIS = '가위'
    const PAPER = '보'

    let comNum = Math.floor(Math.random() * 3);  // 컴퓨터의 가위, 바위, 보 선택을 위해 0~2까지의 난수 발생
    let comSelect // 컴퓨터의 선택을 받을 변수
    if (comNum === 0) {
        comSelect = SCIS
    } else if (comNum === 1) {
        comSelect = ROCK
    } else { //comNum === 2
        comSelect = PAPER
    }

    if (mySelect !== SCIS && mySelect !== ROCK && mySelect !== PAPER) { // 가위, 바위, 보 중에서 다른 것을 입력했을 때
        alert('가위, 바위, 보 중에서 하나를 입력해주세요')
    } else { // 가위, 바위, 보 중에서 입력을 했을 때
        if (comSelect === SCIS) { //컴퓨터가 가위를 낸 경우
            if (mySelect === comSelect) {
                alert('컴퓨터:' + comSelect + ', 컴퓨터와 비겼습니다')
                counter(DRAW)
            } else if (mySelect === ROCK) {
                alert('컴퓨터:' + comSelect + ', 컴퓨터를 이겼습니다')
                counter(WIN)
            } else {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터 한테 졌습니다')
                counter(LOSS)
            }

        } else if (comSelect === ROCK) { //컴퓨터가 바위를 낸 경우
            if (mySelect === comSelect) {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터와 비겼습니다')
                counter(DRAW)
            } else if (mySelect === PAPER) {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터를 이겼습니다')
                counter(WIN)
            } else {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터 한테 졌습니다')
                counter(LOSS)
            }

        } else { //comSelect === PAPER
            if (mySelect === comSelect) { // 컴퓨터가 보를 낸 경우
                alert('컴퓨터: ' + comSelect + ', 컴퓨터와 비겼습니다')
                counter(DRAW)
            } else if (mySelect === SCIS) {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터를 이겼습니다')
                counter(WIN)
            } else {
                alert('컴퓨터: ' + comSelect + ', 컴퓨터 한테 졌습니다')
                counter(LOSS)
            }
        }
    }
}