const list = document.querySelector('.list');
const cities =['Москве','Санкт-Петербурге','Токио','Нью-Йорке'];
let temperatures = [];

//ввод температуры
for (let i = 0; i < cities.length; i+=1) {
    let temperature = prompt(`Введите температуру в ${cities[i]}`);
    temperatures.push(Number(temperature));
    }

// добавление в список города и температуры
for (let i = 0; i < cities.length; i+=1) {
const cityTemperature = document.createElement('li');
cityTemperature.textContent=`Температура в ${cities[i]}: ${temperatures[i]} °C`;
    list.append(cityTemperature);
}

//min температура
const minTemperature= Math.min(...temperatures);
const minTemp = document.createElement('p');
minTemp.textContent = `Минимальная температура: ${minTemperature}°C`;
list.after(minTemp);

//max температура
const maxTemperature= Math.max(...temperatures);
const maxTemp = document.createElement('p');
maxTemp.textContent = `Максимальная температура: ${maxTemperature}°C`;
minTemp.after(maxTemp);