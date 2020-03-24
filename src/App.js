import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from './Header'
import Recipe from './Recipe';
import Pagination from './Pagination'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import sushi from './img/sushi.svg'


const App = () => {
  const APP_ID = '7570c869';
  const APP_KEY = '5dbde407febe17d64586062bbdad10e6'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')
  const [page, setPage] = useState({ from: 0, to: 12 })

  const observer = useRef()
  const lastElementRef = useCallback(node => {
    console.log(node);
  })

  useEffect(() => {
    getServer()
  }, [query, page])

  const getServer = async () => {

    const { from, to } = page;
    const URL_Req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`
    //console.log(URL_Req);

    const response = await fetch(URL_Req)
    const data = await response.json()
    setRecipes([...recipes, ...data.hits]);
    //console.log(data.hits);

  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault()
    setRecipes([])
    setQuery(search)
    setPage({ from: 0, to: 12 })
  }





  const loadResults = e => {
    let nextFrom = page.from + 12;
    let nextTo = page.to + 12;
    setPage({ from: nextFrom, to: nextTo })
  }


  return (
    <div className="App" >
      <Header />
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submoit" className="submit-btn">SEARCH</button>
      </form>

      <div className="img-container" ><img className='sushi' src={(recipes.length > 0) ? null : sushi} alt='' /></div>

      <div className="results-div">
        {recipes.map((recipe, index) => {
          if (recipes.length === index + 1) {
            console.log("last element")
            return (
              <Recipe
                ref={lastElementRef}
                key={uuidv4()}
                title={recipe.recipe.label}
                dietLabel={recipe.recipe.dietLabels}
                image={recipe.recipe.image}
                time={recipe.recipe.totalTime}
                ingredients={recipe.recipe.ingredientLines}
                healthLabels={recipe.recipe.healthLabels}
                calories={recipe.recipe.calories}
                cautions={recipe.recipe.cautions}
              />
            )
          } else {
            return (
              <Recipe
                key={uuidv4()}
                title={recipe.recipe.label}
                dietLabel={recipe.recipe.dietLabels}
                image={recipe.recipe.image}
                time={recipe.recipe.totalTime}
                ingredients={recipe.recipe.ingredientLines}
                healthLabels={recipe.recipe.healthLabels}
                calories={recipe.recipe.calories}
                cautions={recipe.recipe.cautions}
              />
            )
          }
        })}
      </div>

      <Pagination loadResults={loadResults} recipes={recipes} />


    </div>
  );
}

export default App;
