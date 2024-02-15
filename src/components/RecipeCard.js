import React from 'react'

function RecipeCard(props) {
    // console.log(props);
    const { recipe } = props;
    console.log(recipe);

    return (
        <div className="recipe-card bg-white rounded-lg overflow-hidden shadow-md" >
            <img src={recipe?.image} alt={recipe?.label} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 ">{recipe?.label}</h2>
                <p className="text-gray-700">Yield: {recipe?.yield}</p>
                <p className="text-gray-700">Calories: {Math.round(recipe?.calories)}</p>
                <a href={recipe?.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Recipe</a>
            </div>
        </div>

    )
}

export default RecipeCard;