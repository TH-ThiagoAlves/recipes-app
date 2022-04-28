import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cards from '../components/Cards';

function Foods(props) {
  const { history } = props;
  const foods = useSelector((state) => state.foods.meals);

  const redirectDetails = () => {
    const id = Number(foods[0].idMeal);
    return history.push(`/foods/${id}`);
  };

  const checkCard = () => (foods.length === 1
    ? redirectDetails()
    : <Cards foods={ foods } />
  );

  return (
    <>
      <Header title="Foods" />
      <h1>Food</h1>
      {foods !== null
        ? checkCard()
        : global.alert(
          'Sorry, we haven\'t found any recipes for these filters.',
        )}
      <Footer />
    </>
  );
}
Foods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Foods;
