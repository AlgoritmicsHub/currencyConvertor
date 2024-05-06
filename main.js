const rubInput = document.querySelector('#rub')
const startBtn = document.querySelector('#start')
const usdValue = document.querySelector('#usd_value')
const eurValue = document.querySelector('#eur_value')
const cnyValue = document.querySelector('#cny_value')

// ! получать данные с сервера
const getData = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}`);
    } else {
        return await response.json();
    }
};

startBtn.addEventListener('click', () => {
    getData('https://www.cbr-xml-daily.ru/latest.js')
        .then((courses) => {
            usdValue.textContent = `USD: ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR: ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyValue.textContent = `CNY: ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`
        })
})

