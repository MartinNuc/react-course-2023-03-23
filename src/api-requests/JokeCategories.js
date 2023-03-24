import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';

export const JokeCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
    .then(response => {
      setCategories(response.data);
    });
  }, []);

  return <ul>
    {categories.map(category => 
      <li>
        <Link to={`categories/${category}`}>
          {category}
        </Link>
      </li>
    )}
  </ul>
}