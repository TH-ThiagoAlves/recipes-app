import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import FormBusca from '../FormBusca';

function Header(props) {
  const { title } = props;
  const [InputSearch, toggleInputSearch] = useState(false);
  const arrayTitles = [
    'Explore',
    'Explore Foods',
    'Explore Drinks',
    'Explore Ingredients',
    'Profile',
    'Done Recipes',
    'Favorite Recipes',
  ];

  const contain = arrayTitles.some((element) => element === title);

  return (
    <>
      <header className="header">
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="profileIcon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {contain ? (
          ''
        ) : (
          <button type="button" onClick={ () => toggleInputSearch(!InputSearch) }>
            <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
          </button>
        )}
      </header>
      { InputSearch ? <FormBusca /> : '' }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
