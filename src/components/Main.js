import React from "react";

export default function Main() {
  return (
    <div className="">
      <div className="App-header">
        <div>
          <h1 className="text-lg">Simple Omelette Recipe</h1>

          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <h2>Preparation time</h2>

          <p>Total: Approximately 10 minutes</p>
          <p>Preparation: 5 minutes</p>
          <p>Cooking: 5 minutes</p>

          <h2>Ingredients</h2>

          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <h2>Instructions</h2>

          <ol>
            <li>
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>

            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>

            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>

            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>

            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>

            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>

          <h2>Nutrition</h2>

          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table>
            <tr>
              <th>Calories</th>
              <td>277kcal</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>0g</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>20g</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>22g</td>
            </tr>
          </table>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}
