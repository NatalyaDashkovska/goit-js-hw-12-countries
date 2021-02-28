import './styles.scss';
import fetchCountries from './js/fetchCountries';
import { inputRef, list } from './js/refs';
import debounce from 'lodash.debounce';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

inputRef.addEventListener(
  'input',
  debounce(() => {
    const inputValue = inputRef.value;
    list.innerHTML = '';
    if (!inputValue) {
      console.log(inputValue);
      error({
        title: 'Пустой запрос',
        text: 'Введите значение',
      });
    } else {
      fetchCountries(inputValue.trim());
    }
  }, 500),
);
