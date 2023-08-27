/**
 * Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.
 *
 * Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
 *
 * Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.
 *
 * Примеры вызова:
 *
 * normalizeUrl("google.com"); // "https://google.com"
 * normalizeUrl("https://ai.fi"); // "https://ai.fi"
 */
// Begin
const normalizeUrl = (adress) =>{
    let Url = "google.com"
    if (Url.startsWith('https://')) {
        normalizeUrl = Url;
    }
    else {
        Url = `https://${Url}`
    }

    return normalizeUrl;
};
// END
export default normalizeUrl;

