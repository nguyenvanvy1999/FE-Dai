import React from 'react';

interface CategoryItemProps {
  title: string;
  imageSrc: string;
  description: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, imageSrc, description }) => {
  return ( 
    
    <div className="w-full flex flex-col items-center border border-solid bg-gray-100 border-green-400 bg-opacity-100 rounded-md text-center pb-7 pl-7 pr-7 pt-8">
      <img className="mb-3" src={imageSrc} alt="" /> 
      <h3 className="mb-2 text-md text-green-600 font-bold">{title}</h3> 
      <span className="text-sm">{description}</span>
    </div>
  );
};

export default CategoryItem;