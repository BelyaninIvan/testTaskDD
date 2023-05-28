const modalWindow = document.querySelector('.modal');
const openButtonArr = document.querySelectorAll('.card__btn');
const closeButton = document.querySelector('#closeModal');
const modalForm = document.querySelector('.modal__form');
const scrollButton = document.querySelector('.page__button');

const toggleModalWindow = () => {
    modalWindow.classList.toggle('modal_opened');
};

modalForm.addEventListener('submit', () => {
    alert("Вы оформили заказ!");
});

openButtonArr.forEach((item) => {
    item.addEventListener('click', toggleModalWindow);
});

closeButton.addEventListener('click', toggleModalWindow);

scrollButton.addEventListener('click',() => {
    window.scrollTo(pageXOffset, 0);
});

window.addEventListener('scroll', () => {
    scrollButton.hidden = (pageYOffset < 150);
});

const chooseThemeButton = document.querySelector('.categories__button');
chooseThemeButton.addEventListener('click', () => {
    const bodyElement = document.querySelector('.body');
    bodyElement.classList.toggle('body_theme_dark');
    const categoriesElement = document.querySelector('.categories');
    categoriesElement.classList.toggle('categories_theme_dark');
    const categoriesLinksArray = document.querySelectorAll('.categories__name');
    categoriesLinksArray.forEach((item) => {
        item.classList.toggle('categories__name_theme_dark');
    });
    const cardsArray = document.querySelectorAll('.card');
    cardsArray.forEach((item) => {
        item.classList.toggle('card_theme_dark');
    });
    const cardsTitleArray = document.querySelectorAll('.card__title');
    cardsTitleArray.forEach((item) => {
        item.classList.toggle('card__title_theme_dark');
    });
    const navigationLinkArray = document.querySelectorAll('.navigation__link');
    navigationLinkArray.forEach((item) => {
        item.classList.toggle('navigation__link_theme_dark');
    });
});

function getDayInfo(date) {
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Дукабря'];
    return `${days[date.getDay()]}, ${parseInt(((date.getDate()-1)/7)+1)} неделя ${months[date.getMonth()]} ${date.getFullYear()} года`;
}

const cardDate = document.querySelectorAll('.card__date');
cardDate.forEach((item) => {
    item.textContent = getDayInfo(new Date());
})