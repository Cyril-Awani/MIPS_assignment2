'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Define the subset of PropertyData type
interface FeaturedPropertyCardProps {
	id: string;
	images: string[];
	price: number;
	address: string;
}

const FeaturedPropertyCard: React.FC<FeaturedPropertyCardProps> = ({
	id,
	images,
	price,
	address,
}) => {
	const router = useRouter();

	const handleCardClick = () => {
		if (id) {
			router.push(`/PropertyListing/${id}`);
		} else {
			console.error('Property ID is missing.');
		}
	};

	const formattedPrice = price.toLocaleString('en-NG', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const fallbackImage =
		'https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?t=st=1735037377~exp=1735040977~hmac=bef8c0ce6a5962438f24cfe01010bfab5649ce92862da5c1d184d72a3a0baf11&w=900';

	const randomImage =
		images.length > 0
			? images[Math.floor(Math.random() * images.length)]
			: fallbackImage;

	return (
		<div
			onClick={handleCardClick}
			className='w-72 h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer'>
			<div className='relative h-48 w-full'>
				<Image
					src={randomImage}
					alt={address || 'Property Image'}
					fill
					style={{ objectFit: 'cover' }}
					className='rounded-t-lg'
					onError={(e) => {
						const imgElement = e.target as HTMLImageElement;
						imgElement.src = fallbackImage;
					}}
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
			</div>
			<div className='p-4'>
				<p className='text-lg font-bold text-gray-800 dark:text-white'>
					₦{formattedPrice}
				</p>
				<p className='text-sm text-gray-600 dark:text-gray-300 mt-1'>
					{address || 'No address provided'}
				</p>
			</div>
		</div>
	);
};

export default FeaturedPropertyCard;
