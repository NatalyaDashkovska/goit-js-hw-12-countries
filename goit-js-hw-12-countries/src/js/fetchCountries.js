import { inputRef, list } from './refs';
import insertList from './insert_list';

function fetchCountries() {
  const inputText = inputRef.value;
  fetch(`https://restcountries.eu/rest/v2/name/${inputText}`)
    .then(res => res.json())
    .then(country_list => {
      insertList(country_list);
    });
}
export default fetchCountries;
