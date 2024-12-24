'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { PropertyData } from '@/app/types/propertyTypes';

const PropertyCard: React.FC<PropertyData> = ({
	id,
	name,
	address,
	images,
	price,
	viewsCount,
	beds,
	baths,
}) => {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/PropertyListing/${id}`);
	};
	const [isFavorited, setIsFavorited] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [touchStart, setTouchStart] = useState<number | null>(null); // Track the start of a swipe

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsFavorited((prev) => !prev);
	};

	const handleNextImage = (e: React.MouseEvent | React.TouchEvent) => {
		e.stopPropagation();
		const totalImages = allImages.length;
		setCurrentImageIndex((prev) => (prev + 1) % totalImages);
	};

	const handlePrevImage = (e: React.MouseEvent | React.TouchEvent) => {
		e.stopPropagation();
		const totalImages = allImages.length;
		setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
	};

	// Handle swipe gestures
	const handleTouchStart = (e: React.TouchEvent) => {
		const touchStartPosition = e.touches[0].clientX;
		setTouchStart(touchStartPosition);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (touchStart === null) return;
		const touchMovePosition = e.touches[0].clientX;
		if (touchMovePosition - touchStart > 100) {
			handlePrevImage(e);
			setTouchStart(null);
		} else if (touchStart - touchMovePosition > 100) {
			handleNextImage(e);
			setTouchStart(null);
		}
	};

	const handleTouchEnd = () => {
		setTouchStart(null); // Reset touch start position
	};

	const allImages = [
		...images.kitchen,
		...images.bathroom,
		...images.bedroom,
		...images.livingRoom,
		...images.exterior,
	];

	const formattedPrice = price.toLocaleString('en-NG', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const formattedAddress =
		address.length > 30 ? `${address.substring(0, 27)}...` : address;

	const hasImages = allImages.length > 0;

	const fallbackImage =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBGOs2225fFqTfnl5EKlrEUBn5-drby1x3Q&s'; // Replace with a valid fallback image URL

	return (
		<div
			onClick={handleCardClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='mx-4 sm:mx-1 my-1 w-xl bg-bck rounded-xl shadow-md hover:shadow-2xl overflow-hidden transform transition duration-500 cursor-pointer xl:max-w-screen-xl 2xl:max-w-screen-sm'>
			<div className='absolute top-4 right-4 cursor-pointer z-50 transition-transform duration-300 ease-in-out transform hover:scale-110'>
				<div onClick={toggleFavorite}>
					{isFavorited ? (
						<FavoriteIcon
							color='error'
							aria-label='Remove from favorites'
							className='text-4xl text-red-500'
						/>
					) : (
						<FavoriteTwoToneIcon
							aria-label='Add to favorites'
							className='text-4xl text-white'
						/>
					)}
				</div>
			</div>
			<div
				className='relative h-[270px]'
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}>
				{hasImages && (
					<motion.div
						className='absolute inset-0 flex justify-center items-center overflow-hidden'
						key={currentImageIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<Image
							src={allImages[currentImageIndex] || fallbackImage}
							alt={name}
							className='w-full h-full object-cover'
							width={500}
							height={430}
							onError={(e) => {
								e.currentTarget.src = fallbackImage;
							}}
							aria-label={`Image of ${name}`}
						/>
					</motion.div>
				)}
				{hasImages && isHovered && (
					<div className='relative w-full h-full flex items-center'>
						{/* Previous Image Button */}
						{currentImageIndex > 0 && (
							<button
								className='absolute left-2 border-2 bg-gray-800 bg-opacity-70 hover:bg-gray-500 rounded-full p-1 focus:outline-none transition z-10000'
								onClick={handlePrevImage}
								aria-label='Previous Image'>
								<KeyboardArrowLeftIcon className='h-6 w-6 text-bck hover:text-bck' />
							</button>
						)}
						{/* Next Image Button */}
						{currentImageIndex < allImages.length - 1 && (
							<button
								className='absolute right-2 border-2 bg-gray-800 bg-opacity-70 hover:bg-gray-500 rounded-full p-1 focus:outline-none transition z-10000'
								onClick={handleNextImage}
								aria-label='Next Image'>
								<KeyboardArrowRightIcon className='h-6 w-6 text-bck hover:text-bck' />
							</button>
						)}
					</div>
				)}
				{/* Carousel Dots */}
				{hasImages && (
					<div className='absolute bottom-2 w-full flex justify-center space-x-1'>
						{[...Array(5)].map((_, index) => {
							const distanceFromActive = Math.abs(index - currentImageIndex);
							const scale = Math.max(0.5, 1.5 - distanceFromActive * 0.2);
							const isActive = index === currentImageIndex;

							return (
								<button
									key={index}
									className={`w-2 h-2 rounded-full transition duration-300 ease-in-out ${
										isActive
											? 'bg-white transform scale-150'
											: 'bg-gray-600 opacity-70 hover:opacity-100'
									}`}
									style={{ transform: `scale(${scale})` }}
									aria-label={`Dot ${index + 1} of 5`}
									role='button'
								/>
							);
						})}
					</div>
				)}
			</div>

			{/* Property Details */}
			<div className='py-2 px-3 max-h-[220px] mx-auto'>
				<h2 className='text-lg font-bold mb-1 text-gray-800'>{name}</h2>
				<p className='text-sm text-gray-600 mb-1'>{formattedAddress}</p>
				<div className='flex items-center justify-between space-y-1'>
					<div className='flex space-x-1 items-center'>
						<span className='flex items-center space-x-1 text-gray-600'>
							<BedIcon aria-label='Number of beds' />
							<span className='text-sm'>
								{beds} bed{beds > 1 ? 's' : ''}
							</span>
						</span>
						<span className='flex items-center space-x-1 text-gray-600'>
							<ShowerIcon aria-label='Number of baths' />
							<span className='text-sm'>
								{baths} bath{baths > 1 ? 's' : ''}
							</span>
						</span>
					</div>
					{viewsCount > 0 && (
						<span className='text-gray-600 text-sm'>({viewsCount} saves)</span>
					)}
				</div>
				<div className='flex justify-between items-center mt-2'>
					<p className='text-xl tracking-wide font-bold text-gray-800'>
						₦{formattedPrice}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
