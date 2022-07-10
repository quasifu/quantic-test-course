import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Foods.module.scss';
import FoodItem from '../FoodItem';

export default function Foods({ category }) {
  const [food, setFood] = useState();

  useEffect(() => {
    if (!food) {
      axios
        .get(
          'http://hangry-api-dev.us-east-1.elasticbeanstalk.com/api/food/?format=json'
        )
        .then(({ data }) => {
          if (data.status === 'success') {
            setFood(data.data);
          }
        });
    }
  }, [food]);

  const renderFood = (category) => {
    let filteredFood = food.filter((item) => item.category === category);
    return filteredFood.map((food) => <FoodItem key={food.id} food={food} />);
  };
  return (
    <div className={style.wrapper}>
      {food ? renderFood(category) : 'No food for you.'}
    </div>
  );
}
