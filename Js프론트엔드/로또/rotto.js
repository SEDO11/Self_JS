const COUNT = 6
let list = []
let rotto = []

for (let i = 1; i <= 45; i++) { // 1부터 45까지 배열에 저장
    list.push(i)
}

for (let i = 0; i < COUNT; i++) {
    let index = Math.floor(Math.random() * list.length)
    rotto.push(list[index]) //랜덤으로 선택된 인덱스 값 저장
    list.splice(index, 1) //선택된 인덱스 값 제거  
}

rotto.sort(function (a, b) { // 오름차순
    return a - b;
});

for (let i = 0; i < COUNT; i++) {
    document.write('<span class="ball">' + rotto[i] + '</span>')
}