'use client';

import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import FeaturedPropertyCard from './PropertyListing/components/FeaturedPropertyCard';
import CategoryCards from './components/CategoryCards';
import propertyData from '@/app/Data/propertyData'; // Assuming you have the property data
import Image from 'next/image';

// Define the type with id as string
interface FeaturedProperty {
	id: string; // id as a string
	images: string[];
	price: number;
	address: string;
}

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'Recommended Homes',
			imageSrc: '/images/home1.jpg',
			count: 7,
		},
		{ id: 2, title: 'New Listings', imageSrc: '/images/home2.jpg', count: 700 },
		{
			id: 3,
			title: 'Price Reduced',
			imageSrc: '/images/home3.jpg',
			count: 897,
		},
		{ id: 4, title: 'New Listings', imageSrc: '/images/home2.jpg', count: 700 },
		// ...more categories
	];

	// Select only the necessary data to pass to Featured component
	const featuredProperties: FeaturedProperty[] = propertyData
		.slice(0, 5)
		.map((property) => ({
			id: property.id.toString(), // Convert id to string
			images: property.images.livingRoom, // Assuming you want to use living room images
			price: property.price,
			address: property.address,
		}));

	// Log the featuredProperties to see what is being passed
	console.log('Featured Properties:', featuredProperties);

	return (
		<div className='mx-auto my-2 p-4 max-w-[1920px]'>
			<Hero />
			<div>
				{/* Featured component with required props */}
				<Featured
					title='Featured Properties'
					items={featuredProperties} // Pass the selected properties
					CardComponent={FeaturedPropertyCard} // Pass the card component to render properties
				/>
			</div>
			<div>
				<CategoryCards
					categories={categories}
					sectionTitle='Browse homes in Los Angeles, CA'
				/>
			</div>
			<section className='relative w-full h-[250px] bg-gray-100'>
				{/* Background Image */}
				<div className='absolute inset-0 w-full h-full'>
					<Image
						src='https://img.freepik.com/free-photo/toy-house-copyspace_23-2148144856.jpg?t=st=1735062700~exp=1735066300~hmac=43669de30ff1165e9121b396a54b81f8481baa7940455983541fe23f176596bc&w=1060'
						alt='Real Estate'
						layout='fill'
						objectFit='cover'
						className='opacity-50'
					/>
				</div>

				{/* Overlay and content */}
				<div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white text-center p-4'>
					<div className='space-y-4 max-w-lg mx-auto'>
						<h2 className='text-3xl font-bold'>
							Ready to Sell or Rent Your Property?
						</h2>
						<p className='text-lg'>
							List your property with us and get it in front of thousands of
							potential buyers and renters.
						</p>
						<a
							href='/list-property' // Replace with your actual route to the listing page
							className='bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all'>
							List Your Property
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
