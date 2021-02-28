const list = document.querySelector(`.list`);

const inputRef = document.querySelector(`.placeholder`);

export { inputRef, list };

// // Alona Harnyk
// // Для пустого запроса или запроса, который состоит из одних пробелов в консоль выдается ошибка:
// // Uncaught (in promise) SyntaxError: Unexpected end of JSON input at eval (fetchCountries.js:9)

// // Нужно удалять лишние пробелы (trim()) и проверять, что получившееся значение
// - не пустое, до отправки запроса.

// // В функцию fetchCountries передается содержимое поля (inputValue),
// но в самой функции это значение игнорируется и вытягивается заново(const inputText = inputRef.value)

//     // В функции insertList неправильно организовано ветвление,
//     из-за чего при возврате сервером ошибки({ "status": 404, "message": "Not Found" })
// // код пытается вывести его как список стран.
