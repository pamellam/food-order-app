/**
 * @fileOverview Meals component
 * @author <NAME>
 */

import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

// only creating object once to avoid infinite loop
const requestConfig = {};

/**
 * Meals component
 */
const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  /**
   * Render loading state while fetching meals
   */
  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }

  /**
   * Render error state if meals could not be fetched
   */
  if (error) {
    return <Error title="Failed to fetch meals." message={error} />;
  }

  /**
   * Render meals
   */
  return (
    <div>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Meals;
