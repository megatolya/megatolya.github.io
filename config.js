
module.exports = {
    ru: {
        title: 'Анатолий Островский',
        author: 'Анатолий Островский',
        description: 'Домашняя страница Анатолия Островского',
        buildUrl: 'index.html',
        get text() {
            return [
                'Привет!',
                'Меня зовут Толя Островский, и это портал имени меня.'
            ];
        },
        changeLocale: 'In english',
    },
    en: {
        title: 'Anatoly Ostrovsky',
        author: 'Anatoly Ostrovsky',
        description: 'Anatoly Ostrovsky homepage',
        buildUrl: 'en/index.html',
        get text() {
            return [
                'Hi!',
                'My name is Anatoly Ostrovsky. Welcome to my homepage.'
            ];
        },
        changeLocale: 'По-русски'
    }
};
