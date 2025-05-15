const language = prompt('Какой язык пользователя в браузере?');

switch (true) {
    case language === String(language.match(/^ru$/i)):
        console.log('Добрый день!');
        break;
    case language === String(language.match(/^en$/i)):
        console.log('Good afternoon!');
        break;
    case language === String(language.match(/^de$/i)):
        console.log('Guten Tag!');
        break;
    case language === String(language.match(/^it$/i)):
        console.log('Buon pomeriggio');
        break;
    case language === String(language.match(/^fr$/i)):
        console.log('Bonjour!');
        break;
    default:
        console.log('Указанный язык на текущий момент не поддерживается');
}