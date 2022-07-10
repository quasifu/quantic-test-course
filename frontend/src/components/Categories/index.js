import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Categories.module.scss';

export default function Categories({ onSelect }) {
  const [categories, setCategories] = useState();
  const [selectedCat, setSelectedCat] = useState();
  useEffect(() => {
    if (!categories) {
      axios
        .get(
          'http://hangry-api-dev.us-east-1.elasticbeanstalk.com/api/category/?format=json'
        )
        .then(({ data }) => {
          if (data.status === 'success') setCategories(data.data);
        });
    }
  }, [categories]);
  return (
    <div className={style.wrapper}>
      {categories &&
        categories.map((category) => (
          <span
            className={style.item}
            style={{
              borderBottom: `${
                selectedCat === category.name ? '1px solid black' : ''
              }`,
            }}
            key={category.name}
            onClick={() => {
              setSelectedCat(category.name);
              onSelect(category.name);
            }}
          >
            {category.name}
          </span>
        ))}
    </div>
  );
}
