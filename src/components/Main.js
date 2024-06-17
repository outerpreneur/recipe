import React from "react";

export default function Main() {
  return (
    <div className="py-10">
      <div className="App-header">
        <div>
          <h1 className="text-black font-bold text-4xl font-youngSerif mb-4">
            Simple Omelette Recipe
          </h1>
          <section className="flex flex-col gap-8">
            <div>
              <p>
                An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
              </p>
            </div>
            <div className="bg-snow p-6">
              <h2 className="text-raspberry text-xl font-bold mb-3">
                Preparation time
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-3">
                  <span className="font-bold">Total:</span> Aproximately 10
                  minutes
                </li>
                <li className="mb-3">
                  <span className="font-bold">Preparation:</span> 5 minutes
                </li>
                <li className="mb-3">
                  <span className="font-bold">Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-brandyred text-3xl font-youngSerif mb-3">
                Ingredients
              </h2>

              <ul className="list-disc list-inside">
                <li className="mb-3">2-3 large eggs</li>
                <li className="mb-3">Salt, to taste</li>
                <li className="mb-3">Pepper, to taste</li>
                <li className="mb-3">1 tablespoon of butter or oil</li>
                <li className="mb-3">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-brandyred text-3xl font-youngSerif mb-3">
                Instructions
              </h2>

              <ol className="list-decimal list-inside">
                <li className="mb-3">
                  <span className="font-bold">Beat the eggs:</span> In a bowl,
                  beat the eggs with a pinch of salt and pepper until they are
                  well mixed. You can add a tablespoon of water or milk for a
                  fluffier texture.
                </li>

                <li className="mb-3">
                  <span className="font-bold">Heat the pan:</span> Place a
                  non-stick frying pan over medium heat and add butter or oil.
                </li>

                <li className="mb-3">
                  <span className="font-bold">Cook the omelette:</span> Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </li>

                <li className="mb-3">
                  <span className="font-bold">Add fillings (optional):</span>{" "}
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </li>

                <li className="mb-3">
                  <span className="font-bold">Fold and serve: </span> As the
                  omelette continues to cook, carefully lift one edge and fold
                  it over the fillings. Let it cook for another minute, then
                  slide it onto a plate.
                </li>

                <li className="mb-3">
                  <span className="font-bold">Enjoy:</span> Serve hot, with
                  additional salt and pepper if needed.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-brandyred text-3xl font-youngSerif mb-3">
                Nutrition
              </h2>

              <p>
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>

              <table className="table-auto w-full border-none">
                <tr className="border border-b-brandyred py-6">
                  <th className="text-wedgebrown ">Calories</th>
                  <td className="text-brandyred">277kcal</td>
                </tr>
                <tr className="border border-b-brandyred py-3">
                  <th className="text-wedgebrown">Carbs</th>
                  <td className="text-brandyred">0g</td>
                </tr>
                <tr className="border border-b-brandyred py-3">
                  <th className="text-wedgebrown">Protein</th>
                  <td className="text-brandyred">20g</td>
                </tr>
                <tr className="border border-b-brandyred py-3">
                  <th className="text-wedgebrown">Fat</th>
                  <td className="text-brandyred">22g</td>
                </tr>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
