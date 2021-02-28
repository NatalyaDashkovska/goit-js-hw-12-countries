import { inputRef, list } from './refs';
import insertList from './insert_list';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function fetchCountries(value) {
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(res => res.json())
    .then(country_list => {
      insertList(country_list);
    })
    .catch(error => console.log(error));
}
export default fetchCountries;
