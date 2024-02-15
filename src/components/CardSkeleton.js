import React from 'react'

function CardSkeleton() {
    return (
        <div className="recipe-card bg-white rounded-lg overflow-hidden shadow-md" >
            <div className="skeleton-image animate-pulse"></div>
            <div className="skeleton-info">
                <div className="skeleton-text w-3/4 h-4 mt-2 animate-pulse"></div>
                <div className="skeleton-text w-1/2 h-4 mt-2 animate-pulse"></div>
                <div className="skeleton-text w-1/3 h-4 mt-2 animate-pulse"></div>
            </div>
        </div>
    )
}

export default CardSkeleton