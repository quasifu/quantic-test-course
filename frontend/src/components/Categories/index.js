import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Categories() {
  const [categories, setCategories] = useState();
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
    <ul>
      {categories &&
        categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
    </ul>
  );
}
