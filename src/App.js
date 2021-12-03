import "./App.css";
import React, { useState, useEffect } from "react";

const API_URL = "https://node-movieapp.herokuapp.com";

function App() {
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}

function RecipeList() {
  // const recipes = [];
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    fetch(`${API_URL}/recipes`)
      .then((data) => data.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className="recipe-list-container">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe._id} />)
      ) : (
        <NoRecipes />
      )}
    </div>
  );
}

function NoRecipes() {
  return (
    <div>
      <p>No Recipes Available</p>
    </div>
  );
}

function Recipe({ recipe }) {
  return (
    <div className="recipe-container">
      <img className="recipe-picture" src={recipe.image} alt={recipe.name} />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}

export default App;
