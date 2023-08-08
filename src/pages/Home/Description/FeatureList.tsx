import React from 'react';

interface FeatureListProps {
  heading: string;
  list: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ heading, list }) => {
  return (
    <div>
      <h2 className='text-center text-sm font-bold mb-2'>{heading}</h2>
      <ul className='pl-10 mb-4'>
        {list.map((item, index) => (
          <li className='text-sm list-disc text-gray-700' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureList;