// AdCard.tsx
import React from 'react';

const AdCard: React.FC = () => {
	return (
		<div className='ad-card border p-4 bg-gray-100 text-center'>
			<h2 className='font-bold text-xl'>Sponsored</h2>
			<p>Check out our special offers!</p>
			<button className='mt-2 bg-blue-500 text-white py-1 px-4 rounded'>
				Learn More
			</button>
		</div>
	);
};

export default AdCard;
