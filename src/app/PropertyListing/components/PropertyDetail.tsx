'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FlagIcon from '@mui/icons-material/Flag';
import { PropertyData } from '@/app/types/propertyTypes';
import PropertyAmenities from './PropertyAmenities';
import PropertyPayment from './PropertyPayments';
import { AvTimer, Bed, OtherHouses, Pets, Shower } from '@mui/icons-material';
import PropertyFactsAndFeatures from './PropertyFactsAndFeatures';
import PropertyPolicies from './PropertyPolicies';
import ManagerCard from './ManagerCard';

type Category = 'livingRoom' | 'bedroom' | 'bathroom' | 'kitchen' | 'exterior';

interface PropertyDetailProps {
	property: PropertyData | null;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
	const router = useRouter();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectedCategories, setSelectedCategories] = useState<Category[]>([
		'livingRoom',
	]);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	// Optimized navigation functions using useCallback
	const nextSlide = useCallback(() => {
		if (property?.images) {
			const allImages = [
				...(property.images.livingRoom || []),
				...(property.images.bedroom || []),
				...(property.images.bathroom || []),
				...(property.images.kitchen || []),
				...(property.images.exterior || []),
			];
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
		}
	}, [property]);

	const prevSlide = useCallback(() => {
		if (property?.images) {
			const allImages = [
				...(property.images.livingRoom || []),
				...(property.images.bedroom || []),
				...(property.images.bathroom || []),
				...(property.images.kitchen || []),
				...(property.images.exterior || []),
			];
			setCurrentImageIndex(
				(prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length,
			);
		}
	}, [property]);

	const handleCategoryClick = useCallback(
		(category: Category) => {
			if (!property) return;

			setSelectedCategories((prev) =>
				prev.includes(category)
					? prev.filter((cat) => cat !== category)
					: [...prev, category],
			);

			// Calculate the index of the first image in the selected category
			let index = 0;
			for (const cat of Object.keys(property.images) as Category[]) {
				if (cat === category) break;
				index += property.images[cat].length;
			}

			setCurrentImageIndex(index);
		},
		[property],
	);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		setTouchEnd(e.changedTouches[0].clientX);
	};

	useEffect(() => {
		if (touchStart !== null && touchEnd !== null) {
			const swipeDistance = touchStart - touchEnd;
			const threshold = 50;

			if (swipeDistance > threshold) {
				nextSlide();
			} else if (swipeDistance < -threshold) {
				prevSlide();
			}

			setTouchStart(null);
			setTouchEnd(null);
		}
	}, [touchStart, touchEnd, nextSlide, prevSlide]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				nextSlide();
			} else if (event.key === 'ArrowLeft') {
				prevSlide();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [nextSlide, prevSlide]);

	if (!property) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
			</div>
		);
	}

	const formattedPrice = property.price.toLocaleString('en-NG', {
		style: 'currency',
		currency: 'NGN',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});

	const allImages = [
		...(property.images.livingRoom || []),
		...(property.images.bedroom || []),
		...(property.images.bathroom || []),
		...(property.images.kitchen || []),
		...(property.images.exterior || []),
	];

	return (
		<div className='mx-auto px-4'>
			<h1 className='text-lg font-light'>Bread Crumb</h1>
			<div className='flex items-center justify-between py-4'>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Go back'
						className='flex items-center text-hvr hover:text-btn transition group'
						onClick={() => router.back()}>
						<ArrowForwardIosIcon className='transform rotate-180' />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Back
						</span>
					</button>
				</div>
				<div className='flex-grow flex justify-center'>
					<Image
						src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
						alt='Company Logo'
						width={50}
						height={50}
						className='h-auto max-w-lg'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Share property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<IosShareIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Share
						</span>
					</button>
					<button
						aria-label='Save property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<SaveAltIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Save
						</span>
					</button>
					<button
						aria-label='Report property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<FlagIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Report
						</span>
					</button>
				</div>
			</div>

			<main className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-2'>
				<section className='flex justify-between items-center m-2 '>
					<h1 className='text-xl sm:text-3xl font-bold'>{property.name}</h1>

					<div>
						<h1 className='text-xl sm:text-3xl font-bold mr-8 sm:ml:auto'>
							{formattedPrice}
						</h1>
					</div>
				</section>

				<section className='bg-white rounded-lg overflow-hidden'>
					<div className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-2'>
						<div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
							{/* Carousel Section */}
							<div className='col-span-3 md:col-span-3 flex flex-col w-full'>
								<div
									className='relative mx-auto overflow-hidden rounded-lg'
									onTouchStart={handleTouchStart}
									onTouchEnd={handleTouchEnd}>
									{/* Image Numbering */}
									<div className='absolute top-4 left-4 z-10 text-white text-lg font-bold'>
										{currentImageIndex + 1} / {allImages.length}
									</div>

									<div
										className='flex transition-transform duration-500 max-h-[400px]'
										style={{
											transform: `translateX(-${currentImageIndex * 100}%)`,
										}}>
										{allImages.map((image, index) => (
											<div key={index} className='min-w-full'>
												<Image
													src={image}
													alt={`Property image ${index + 1}`}
													layout='responsive'
													width={800}
													height={400}
													className='rounded-lg'
													objectFit='cover'
												/>
											</div>
										))}
									</div>
									<button
										className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow hover:bg-white hover:text-gray-800 transition-colors duration-300 w-8 h-8 flex items-center justify-center'
										onClick={prevSlide}>
										&#10094;
									</button>
									<button
										className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow hover:bg-white hover:text-gray-800 transition-colors duration-300 w-8 h-8 flex items-center justify-center'
										onClick={nextSlide}>
										&#10095;
									</button>
								</div>
							</div>

							{/* Category Grid Section */}
							<div className='hidden col-span-3 md:col-span-2 md:flex flex-col rounded-lg'>
								<div className='grid gap-1 grid-cols-2 h-[400px]'>
									{(Object.keys(property.images) as Category[]).map(
										(category, index) => (
											<a
												key={index}
												href='#'
												onClick={(e) => {
													e.preventDefault();
													handleCategoryClick(category);
												}}
												className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 ${
													selectedCategories.includes(category)
														? 'border border-blue-500'
														: ''
												}`}>
												<Image
													src={property.images[category][0]}
													alt={`${category} Image`}
													layout='fill'
													objectFit='cover'
													className='absolute inset-0 rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out'
												/>

												<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 rounded-lg'></div>
												<p className='z-10 text-base font-medium text-white absolute bottom-0 right-0 p-2 lg:text-xl'>
													{category.charAt(0).toUpperCase() + category.slice(1)}
												</p>
											</a>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
				<p className='text-gray-600 capitalize'>
					Located at: {property.address}
				</p>

				<section className='flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between rounded-md border border-gray-100 text-gray-700 shadow-md mb-4 mt-4'>
					<div className='w-full lg:w-2/3'>
						<h2 className='text-2xl font-semibold mx-4 my-2'>Overview</h2>
						<p className='text-sm text-gray-700 capitalize ml-4'>description</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 mt-5'>
							<div className='flex items-center'>
								<div>
									<OtherHouses className='w-5 h-5 text-black' />{' '}
								</div>
								<div className='ml-2'>
									<p className='text-base font-semibold'>{property.type}</p>
									<p className='text-sm text-gray-500'>Property Type</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div>
									<Bed className='w-5 h-5 text-black' />
								</div>
								<div className='ml-2'>
									<p className='text-base font-semibold'>{property.beds}</p>
									<p className='text-sm text-gray-500'>Bedroom</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div>
									<Shower className='w-5 h-5 text-black' />
								</div>
								<div className='ml-2'>
									<p className='text-base font-semibold'>{property.baths}</p>
									<p className='text-sm text-gray-500'>Bathroom</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div>
									<AvTimer className='w-5 h-5 text-black' />
								</div>
								<div className='ml-2'>
									<p className='text-base font-semibold'>No Date Available</p>
									<p className='text-sm text-gray-500'>Available From</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div>
									<Pets className='w-5 h-5 text-black' />
								</div>
								<div className='ml-2'>
									<p className='text-base font-semibold'>Yes</p>
									<p className='text-sm text-gray-500'>Pets</p>
								</div>
							</div>
						</div>
						<PropertyAmenities amenities={property.amenities} />
						<PropertyFactsAndFeatures
							fact={property.fact}
							features={property.features}
						/>
						<PropertyPayment monthlyPayments={property.monthlyPayments} />
						<PropertyPolicies policies={property.policies} />
					</div>
					<div className='w-full lg:w-1/3 p-4'>
						<ManagerCard
							manager={{
								name: 'Don Toliver',
								image:
									'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900', // Replace with your local or remote image path
								isVerified: true,
								contact: 'don.toliver@example.com',
								socialLinks: {
									facebook: 'https://facebook.com/dontoliver',
									twitter: 'https://twitter.com/dontoliver',
									linkedin: 'https://linkedin.com/in/dontoliver',
								},
							}}
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
