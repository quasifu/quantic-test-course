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
        .then((response) => {
          console.log(response);
        });
    }
  }, [categories]);
  return <>Categories</>;
}
