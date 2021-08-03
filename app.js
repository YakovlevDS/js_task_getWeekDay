// ? Напишите функцию getWeekDay(myDate), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

 

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const myDate = (year, day, month) => getWeekDay(new Date(year, day, month))

const getWeekDay = date => days[date.getDay()];

console.log( myDate(2021, 3, 8));    // Thursday
console.log( myDate(2021, 23, 11));    // Sunday
console.log( myDate(2021, 12, 12));    // Wednesday
console.log( myDate(2021, 1, 7));// Sunday
console.log( myDate(2021, 5, 2));  // Wednesday



// ! Explanation:

// ** Метод getDay() возвращает порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью. Создадим массив дней недели, чтобы получить имя нужного дня по его номеру: