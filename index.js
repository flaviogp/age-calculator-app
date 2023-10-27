const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputDay = document.getElementById('day');

const resutMonth = document.getElementById('result-month');
const resutYear = document.getElementById('result-year');
const resutDay = document.getElementById('result-day');

const button = document.querySelector('.image-container')

function checkLength(value, min, max) {
    let valid = false;
    if (value.length < min) return valid;
    if (value.length > max) return valid;
    valid = true
    return valid;
}

function validInput(input, value) {
    let valid = false

    if (input === 'year') {

        if (!checkLength(value, 4, 4)) {
            return valid;
        } else {
            valid = true
            return valid;
        }
    }

    if (input === 'month') {

        if (!checkLength(value, 1, 2)) {
            return valid;
        } else if (Number(value) > 12 || Number(value) === 0) {
            return valid;
        } else {
            valid = true
            return valid;

        }
    }
    if (input === 'day') {
        if (!checkLength(value, 1, 2)) {
            return valid;
        } else if (Number(value) > 31 || Number(value) === 0) {
            return valid;
        } else {
            valid = true
            return valid;
        }
    }
}



button.addEventListener('click', (e) => {
    const currentDay = new Date().getDate();
    const currentMonth = Number(new Date().getUTCMonth()) + 1;
    const currentYear = new Date().getFullYear();

    const el = e.target;
    if (!validInput('day', inputDay.value)) return;
    if (!validInput('month', inputMonth.value)) return
    if (!validInput('year', inputYear.value)) return


    let month = 0;
    let day = 0
    let year = 0
    if (Number(inputMonth.value) > Number(currentMonth)) {
        year = (Math.abs(Number(inputYear.value) - Number(currentYear)) - 1)
        month = Math.abs(Math.abs(Number(inputMonth.value) - Number(currentMonth)) - 12)
        day = (Math.abs(Number(inputDay.value) - Number(currentDay)))

    } else {
        year = (Math.abs(Number(inputYear.value) - Number(currentYear)))
        month = Math.abs(Number(inputMonth.value) - Number(currentMonth))
        day = (Math.abs(Number(inputDay.value) - Number(currentDay)))


    }

    resutDay.innerHTML = day;
    resutMonth.innerHTML = month;
    resutYear.innerHTML = year;

})
