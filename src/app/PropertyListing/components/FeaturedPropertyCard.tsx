'use client';
import React from 'react';
import Image from 'next/image';

type FeaturedPropertyCardProps = {
	images: string[];
	price: number;
	address: string;
};

const FeaturedPropertyCard: React.FC<FeaturedPropertyCardProps> = ({
	images,
	price,
	address,
}) => {
	const formattedPrice = price.toLocaleString('en-NG', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const fallbackImage =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBGOs2225fFqTfnl5EKlrEUBn5-drby1x3Q&s'; // Replace with a valid fallback image URL

	return (
		<div className='w-72 h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105'>
			{/* Image */}
			<div className='relative h-48 w-full'>
				<Image
					src={images[0] || fallbackImage}
					alt={address}
					layout='fill'
					objectFit='cover'
					className='rounded-t-lg'
					onError={(e) => {
						(e.currentTarget as HTMLImageElement).src = fallbackImage;
					}}
				/>
			</div>
			{/* Price and Address */}
			<div className='p-4'>
				<p className='text-lg font-bold text-gray-800 dark:text-white'>
					₦{formattedPrice}
				</p>
				<p className='text-sm text-gray-600 dark:text-gray-300 mt-1'>
					{address}
				</p>
			</div>
		</div>
	);
};

export default FeaturedPropertyCard;
