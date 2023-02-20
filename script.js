const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

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

    if (remaining <= 0) {
        messageContainer.innerHTML = "<h3>타이머가 종료됐습니다.</h3>";
        messageContainer.style.display = "flex";
        return;
    } else if (isNaN(remaining)) {
        container.style.display = "none";
        messageContainer.innerHTML = "<h3>유효한 날짜가 아닙니다.</h3>";
        messageContainer.style.display = "flex";
        return;
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60,
    };

    const documentArr = ["days", "hours", "min", "sec"];
    const timeKeys = Object.keys(remainingObj);

    let i = 0;
    for (let tag of documentArr) {
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
        i++;
    }
};

const starter = () => {
    container.style.display = "flex";
    messageContainer.style.display = "none";
    counterMaker();
    setInterval(counterMaker, 1000);
};
