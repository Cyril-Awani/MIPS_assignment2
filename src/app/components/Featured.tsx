'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define types for props
interface FeaturedProps<T extends object> {
	title: string;
	items: T[]; // Ensure that items is always an array of objects
	CardComponent: React.ComponentType<T>; // CardComponent should accept props of type T
}

const Featured = <T extends object>({
	title,
	items = [],
	CardComponent,
}: FeaturedProps<T>) => {
	// Handle the case when items is empty or undefined
	if (!Array.isArray(items) || items.length === 0) {
		return (
			<div className='featured-section py-10'>
				<h2 className='text-2xl font-bold text-center mb-6'>{title}</h2>
				<p className='text-center text-gray-500'>No items available</p>
			</div>
		);
	}

	// Dynamically calculate drag constraints based on the container width
	const containerWidth = 320; // Min width of each card
	const gap = 10; // Gap between cards
	const totalWidth = items.length * (containerWidth + gap); // Total width of all items
	const dragConstraints = { left: -totalWidth + containerWidth, right: 0 };

	// Function to handle mouse scroll
	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY !== 0) {
			e.preventDefault();
			e.currentTarget.scrollLeft += e.deltaY; // Scroll horizontally
		}
	};

	return (
		<div className='featured-section py-2 m-4'>
			<h2 className='text-2xl font-bold mb-4'>{title}</h2>
			<motion.div
				className='carousel-container overflow-x-auto px-5 md:px-12 cursor-grab'
				onWheel={handleWheel} // Enable mouse wheel scrolling
			>
				<motion.div
					className='carousel py-4 flex gap-4'
					drag='x'
					dragConstraints={dragConstraints}
					whileTap={{ cursor: 'grabbing' }}
					dragElastic={0.1} // Adjust the drag elasticity for smoother scrolling
				>
					{items.map((item, index) => (
						<motion.div key={index} className='min-w-[320px]'>
							<CardComponent {...item} />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Featured;
