const messageContainer = document.querySelector("#d-day-message");
messageContainer.textContent = "D-Day를 입력해주세요.";

const dateFormMaker = () => {
    const inputYear = document.querySelector("#target-year-input").value;
    const inputMonth = document.querySelector("#target-month-input").value;
    const inputDate = document.querySelector("#target-date-input").value;
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

    return dateFormat;
};
const counterMaker = () => {
    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);

    const remaining = (targetDate - nowDate) / 1000;
    const remainingDate = Math.floor(remaining / 3600 / 24);
    const remainingHours = Math.floor(remaining / 3600) % 24;
    const remainingMin = Math.floor(remaining / 60) % 60;
    const remainingSec = Math.floor(remaining) % 60;

    if (remaining <= 0) {
        console.log("타이머 종료!");
    } else if (isNaN(remaining)) {
        console.log("유효한 날짜가 아닙니다.");
    }

    console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
