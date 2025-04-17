import React from 'react';

const CategoryCard = ({name}) => {
    return (
      <div className="p-4 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center">
        <h2 className="font-semibold text-lg text-gray-800">{name}</h2>
      </div>
    );
};

export default CategoryCard;