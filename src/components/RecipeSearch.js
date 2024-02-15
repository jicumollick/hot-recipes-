import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeSearch.css';
import RecipeCard from './RecipeCard';
import CardSkeleton from './CardSkeleton';

const RecipeSearch = () => {
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('burger');
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');
    const recipesPerPage = 8;

    useEffect(() => {
        // applying debounce here 
        const delayTimer = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayTimer);
    }, [query, filter]);

    const fetchData = async () => {
        try {
            if (!query) return;
            const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
            setLoading(true);
            setTimeout(() => {
                setRecipes(response.data?.hits || []);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setLoading(false);
        }
    };

    const handleFilterChange = (event) => {
        const selectedFilter = event?.target?.value;
        setFilter(selectedFilter);
        setQuery(selectedFilter === 'all' ? 'all' : selectedFilter);
    };

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
    const prevPage = () => setCurrentPage(prevPage => prevPage - 1);
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    return (
        <div className='container mx-auto px-4'>
            <header className="md:flex items-center justify-between mb-4">
                <div className="logo flex items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" className="w-16" alt="Logo" />
                    <h2 className='font-bold'>Hot Recipes</h2>
                </div>
                <div className="md:flex items-center justify-between">
                    <div className="filter me-4 my-4">
                        <select value={filter} onChange={handleFilterChange} className="border-2 border-gray-300 rounded-md p-2">
                            <option value="all">All</option>
                            <option value="chicken">Chicken</option>
                            <option value="beef">Beef</option>
                            <option value="vegetarian">Vegetarian</option>
                        </select>
                    </div>
                    <div className="search-input">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e?.target?.value)}
                            placeholder="Search for recipes..."
                            className="border-2 border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
            </header>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: recipesPerPage }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <>
                    {currentRecipes.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentRecipes.map((recipe) => (
                                <RecipeCard key={recipe?.recipe?.uri} recipe={recipe?.recipe} />
                            ))}
                        </div>
                    ) : (
                        <div className="not-found">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPW8Mt7o6I5XNi7tz0T083WeQv-XZ7fMW_qsLq1uCPk5wU66awPg3CFnJ5riSD_qqmYZI&usqp=CAU" alt="404 Image" style={{ width: '50vw', margin: '0 auto' }} />
                        </div>
                    )}
                    <div className="pagination mb-5">
                        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
                            <i className="fas fa-chevron-left"></i> Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button key={index + 1} onClick={() => paginate(index + 1)} className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}>
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-btn">
                            Next <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RecipeSearch;
