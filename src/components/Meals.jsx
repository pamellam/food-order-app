import { useEffect, useState } from 'react';
import { fetchMeals } from '../http';
import MealItem from './MealItem';
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMealsData() {
      setIsLoading(true);
      try {
        const meals = await fetchMeals();
        setMeals(meals);
        setIsLoading(false);
      } catch (error) {
        console.log('Error');
        setIsLoading(false);
      }
    }
    fetchMealsData();
  }, []);

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
