import './styles.scss';
import fetchCountries from './js/fetchCountries';
import { inputRef, list } from './js/refs';
import debounce from 'lodash.debounce';

inputRef.addEventListener(
  'input',
  debounce(() => {
    const inputValue = inputRef.value;
    list.innerHTML = '';
    fetchCountries(inputValue);
  }, 500),
);
