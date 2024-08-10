/*
뽑을 캐릭터수: a
10회티켓 수: b
1회 타켓 수: c
현재 청휘석 : d

공식
(2400a - 1200b - 120c) - d

*/

let calculate_start_btn = document.getElementById("start");
let text1 = document.getElementById("count");
let text2 = document.getElementById("count2");
let select_character_count = document.getElementById("person_count");
let input_10ticket_count = document.getElementById("10ticket_count");
let input_1ticket_count = document.getElementById("1ticket_count");
let now_stones = document.getElementById("now_stones");

let d_day = document.getElementById("d-day");

let want_character_count = 0;
let have_10tickets_count = 0;
let have_1tickets_count = 0;
let have_stones = 0;

calculate_start_btn.addEventListener("click", function () {
    console.log("calculate start.");
    console.log(`현재 청휘석 : ${now_stones.value}`);
    console.log(`뽑을 캐릭터 수 : ${select_character_count.value}`);
    console.log(`10회 모집 티켓 수 : ${input_10ticket_count.value}`);
    console.log(`1회 모집 티켓 수: ${input_1ticket_count.value}`);

    // 현재 청휘석 수 입력이 안되었거나 문자일 경우
    if (now_stones.value == "" || isNaN(now_stones.value)) { 
        text1.innerHTML = `[ ? ] 개`;
        text2.innerHTML = `전부 얻었을때 청휘석 수: ?개`;
        console.log("calculator fail. / ERROR");
        return;
    } else {
        have_stones = now_stones.value;
    }

    // 뽑을 캐릭터 수가 0인 경우, 모을 청휘석이 없으므로
    if (select_character_count.value == "0명") {
        text1.innerHTML = "[ 0 ] 개";
    } else {
        want_character_count = select_character_count.value;
    }

    // 10회 모집 티켓 수 입력
    if (input_10ticket_count.value != "") {
        have_10tickets_count = input_10ticket_count.value;
    }

    // 1회 모집 티켓 수 입력
    if (input_1ticket_count.value != "") {
        have_1tickets_count = input_1ticket_count.value;
    }


    let extra_need_stones = 
        (
            24000 * want_character_count -
            1200 * have_10tickets_count -
            120 * have_1tickets_count
        ) - have_stones;
    text1.innerHTML = `[ ${extra_need_stones} ] 개`;
    text2.innerHTML = `전부 얻었을때 청휘석 수: ${
        ( 24000 * want_character_count - 1200 * have_10tickets_count - 120 * have_1tickets_count)
    }개`
});



const today = new Date();
const targetDate = new Date('2025-01-19');

// 밀리초 단위 차이 계산
const diffTime = targetDate - today;

// 밀리초를 일수로 변환
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

if (diffDays < 0) { // 0 이하, 지났다면
    d_day.innerHTML = `D+${diffDays * (-1)}`;
} else {
    d_day.innerHTML = `D-${diffDays}`;
}

const targetDate2 = new Date("2025-01-26");
const diffTime2 = targetDate2 - today;

const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));

if (diffDays2 < 0) { // 지났다면
    calculate_start_btn.style = "background-color: dodgerblue; color: white";
} else {
    if (Math.random() > 0.45) {
        calculate_start_btn.style = "background-color: #8cb3ce; color: white";
    } else {
        calculate_start_btn.style = "background-color: #e4a6b9; color: white";
    }
}