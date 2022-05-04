import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  getFoodsByIngredient,
  getFoodsByName,
  getFoodsByFLetter,
  getDrinksByIngredient,
  getDrinksByName,
  getDrinksByFLetter,

} from '../../redux/actions';
// import './styles.css';

function FormBusca(props) {
  const { title } = props;
  const [textSearch, setTextSearch] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const dispatch = useDispatch();

  const searchDrinks = () => {
    if (searchType === 'ingredient') {
      dispatch(getDrinksByIngredient(textSearch));
    } else if (searchType === 'name') {
      dispatch(getDrinksByName(textSearch));
    } else if (searchType === 'firstLetter') {
      if (textSearch.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      dispatch(getDrinksByFLetter(textSearch));
    }
  };

  const searchFoods = () => {
    if (searchType === 'ingredient') {
      dispatch(getFoodsByIngredient(textSearch));
    } else if (searchType === 'name') {
      dispatch(getFoodsByName(textSearch));
    } else if (searchType === 'firstLetter') {
      if (textSearch.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      dispatch(getFoodsByFLetter(textSearch));
    }
  };

  const handleSearch = () => (title === 'Drinks' ? searchDrinks() : searchFoods());

  return (
    <form>
      <label htmlFor="textSearch">
        <input
          data-testid="search-input"
          id="textSearch"
          type="text"
          value={ textSearch }
          onChange={ (event) => setTextSearch(event.target.value) }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="searchType"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ (event) => setSearchType(event.target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="searchType"
          value="name"
          data-testid="name-search-radio"
          onClick={ (event) => setSearchType(event.target.value) }
        />
        Name
      </label>
      <label htmlFor="firstLetter">
        <input
          type="radio"
          id="firstLetter"
          name="searchType"
          value="firstLetter"
          data-testid="first-letter-search-radio"
          onClick={ (event) => setSearchType(event.target.value) }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        SEARCH
      </button>
    </form>
  );
}
FormBusca.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormBusca;
