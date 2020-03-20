import React, { useEffect, useState } from 'react';
import Header from './Header'
import Recipe from './Recipe';
import './App.css';


const App = () => {
  const APP_ID = '7570c869';
  const APP_KEY = '5dbde407febe17d64586062bbdad10e6'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    getServer()

  }, [query])

  const getServer = async () => {
    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(exampleReq)
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);

  }
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);

  }
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App" >
      <Header getSearch={getSearch} />
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submoit" className="submit-btn">SEARCH</button>
      </form>
      <div className="results-div">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            dietLabel={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            time={recipe.recipe.totalTime}
            ingredients={recipe.recipe.ingredientLines}
            healthLabels={recipe.recipe.healthLabels}
            calories={recipe.recipe.calories}
            cautions={recipe.recipe.cautions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
