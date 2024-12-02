'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Define types for props
interface FeaturedProps<T> {
	title: string;
	items: T[];
	CardComponent: React.ComponentType<T>;
}

const Featured = <T,>({ title, items, CardComponent }: FeaturedProps<T>) => {
	return (
		<div className='featured-section py-10'>
			<h2 className='text-2xl font-bold text-center mb-6'>{title}</h2>
			<motion.div className='carousel-container overflow-hidden cursor-grab'>
				<motion.div
					className='carousel flex gap-6'
					drag='x'
					dragConstraints={{ left: -500 * (items.length - 1), right: 0 }}
					whileTap={{ cursor: 'grabbing' }}>
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
