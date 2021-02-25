import { inputRef, list } from './refs';
import updates from '../templates/country-name.hbs';
import updateOne from '../templates/country-card.hbs';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function insertList(country_list) {
  if (country_list.length > 10) {
    error({
      title: 'Найдено слишком много совпадений',
      text: 'Введите более конкретные данные',
    });
  } else if (country_list.length === 1) {
    const makeList = updateOne(country_list);
    list.insertAdjacentHTML('beforeend', makeList);
    return;
  } else {
    const makeList = updates(country_list);
    list.insertAdjacentHTML('beforeend', makeList);
    return;
  }
}
export default insertList;
