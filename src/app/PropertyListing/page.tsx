'use client';
import React, { useState, useEffect, useRef } from 'react';
import FeaturedPropertyCard from './components/FeaturedPropertyCard';
import PropertyCard from '@/app/PropertyListing/components/PropertyCard';
import propertyData from '@/app/Data/propertyData';
import AdCard from '@/app/components/AdCard';
import { motion } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import BedsFilter from './components/BedsFilter';
import BathsFilter from './components/BathsFilter';
import PropertyTypeFilter from './components/PropertyTypeFilter';
import PriceFilter from './components/PriceFilter';
import MoreOptions from './components/MoreOptions';

interface Property {
	id: number;
	name: string;
	address: string;
	images: {
		livingRoom: string[];
		bedroom: string[];
		bathroom: string[];
		kitchen: string[];
		exterior: string[];
	};
	price: number;
	viewsCount: number;
	beds: number;
	baths: number;
	type?: string;
}

interface FilterState {
	propertyType: string;
	minPrice: number;
	maxPrice: number;
	beds: number;
	baths: number;
}

const getRandomProperties = (data: Property[], count: number): Property[] => {
	const shuffled = [...data].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
};

const Listings = () => {
	const [visibleCount, setVisibleCount] = useState<number>(5);
	const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
	const [selected, setSelected] = useState('recent');
	const options = [
		{ label: 'Recent', value: 'recent' },
		{ label: 'Highest Price First', value: 'highest_price' },
		{ label: 'Lowest Price First', value: 'lowest_price' },
		{ label: 'Best Matches', value: 'best_matches' },
	];
	const [filteredProperties, setFilteredProperties] =
		useState<Property[]>(propertyData);
	const carouselRef = useRef<HTMLDivElement | null>(null);

	const handleFilterChange = (filters: FilterState) => {
		const filtered = propertyData.filter((property) => {
			return (
				(filters.propertyType === '' ||
					property.type === filters.propertyType) &&
				property.price >= filters.minPrice &&
				property.price <= filters.maxPrice &&
				property.beds >= filters.beds &&
				property.baths >= filters.baths
			);
		});
		setFilteredProperties(filtered);
	};

	useEffect(() => {
		const randomProperties = getRandomProperties(propertyData, 11);
		setFeaturedProperties(randomProperties);
	}, []);

	const showMoreProperties = () => {
		setVisibleCount((prevCount) =>
			Math.min(prevCount + 5, propertyData.length),
		);
	};

	const chunks: Property[][] = [];
	for (
		let i = 0;
		i < Math.min(visibleCount, filteredProperties.length);
		i += 5
	) {
		chunks.push(filteredProperties.slice(i, i + 5));
	}

	const scrollCarousel = (direction: 'left' | 'right') => {
		if (carouselRef.current) {
			const scrollAmount = direction === 'left' ? -340 : 340;
			carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<div className='mx-auto my-2 p-2 bg-gray-50'>
			<div className='max-w-[1920px]'>
				<div>
					<div className='flex flex-row my-2 mx-4 justify-between items-center gap-4'>
						<div className='flex flex-row my-2 md:mx-4 justify-start items-center gap-4'>
							<BedsFilter />
							<BathsFilter />
							<PropertyTypeFilter />
							<PriceFilter />
						</div>
						<div>
							<MoreOptions />
						</div>
					</div>
					<div className='flex flex-row items-center p-4'>
						<label
							htmlFor='sortDropdown'
							className='block text-sm mr-1 font-medium text-gray-700 whitespace-nowrap'>
							Sort by :
						</label>
						<select
							id='sortDropdown'
							value={selected}
							onChange={(e) => setSelected(e.target.value)}
							className='block w-xs max-w-xs rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Property Listings */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 7xl:grid-cols-5 gap-2 xl:gap-4 sm:px-2'>
					{chunks.map((chunk, chunkIndex) => (
						<React.Fragment key={chunkIndex}>
							{chunk.map((property) => (
								<PropertyCard
									key={property.id}
									id={property.id}
									name={property.name}
									address={property.address}
									images={property.images}
									price={property.price}
									viewsCount={property.viewsCount}
									beds={property.beds}
									baths={property.baths}
								/>
							))}
							{chunkIndex < chunks.length - 1 && <AdCard />}
						</React.Fragment>
					))}
				</div>

				{visibleCount < filteredProperties.length && (
					<div className='flex justify-center mt-4'>
						<button
							onClick={showMoreProperties}
							aria-label='Show more properties'
							className='bg-blue-500 text-white py-2 px-4 rounded'>
							Show More
						</button>
					</div>
				)}

				{/* Featured Properties Carousel */}
				<div className='mt-12 relative'>
					<h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-6'>
						Featured Properties
					</h2>
					<div
						className='overflow-hidden overflow-x-auto scrollbar-hide h-[27rem] snap-x snap-mandatory'
						ref={carouselRef}>
						<div className='flex flex-nowrap pl-4'>
							{featuredProperties.map((property, index) => (
								<motion.div
									className={`p-2 flex-shrink-0 snap-start ${
										index === featuredProperties.length - 1 ? 'mr-0' : 'mr-1'
									}`}
									key={property.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}>
									<FeaturedPropertyCard
										id={property.id}
										images={[
											...property.images.kitchen,
											...property.images.bathroom,
											...property.images.bedroom,
											...property.images.livingRoom,
											...property.images.exterior,
										]}
										price={property.price}
										address={property.address}
									/>
								</motion.div>
							))}
						</div>
					</div>
					<button
						className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-gray-500 rounded-full p-1 focus:outline-none transition z-10'
						onClick={() => scrollCarousel('left')}
						aria-label='Scroll left'>
						<ArrowBackIos className='h-6 w-6 text-white' />
					</button>
					<button
						className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-gray-500 rounded-full p-1 focus:outline-none transition z-10'
						onClick={() => scrollCarousel('right')}
						aria-label='Scroll right'>
						<ArrowForwardIos className='h-6 w-6 text-white' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Listings;
