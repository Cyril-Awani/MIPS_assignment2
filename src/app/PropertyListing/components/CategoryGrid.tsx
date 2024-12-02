import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import propertyData from '@/app/Data/propertyData';

type Category = 'kitchen' | 'bathroom' | 'bedroom' | 'livingRoom' | 'exterior';

const CategoryGrid: React.FC = () => {
	const [selectedCategories, setSelectedCategories] = useState<Category[]>([
		'livingRoom',
	]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	// Combine all images from all properties
	const allImages = propertyData.reduce((acc, property) => {
		Object.entries(property.images).forEach(([category, images]) => {
			if (!acc[category as Category]) {
				acc[category as Category] = [];
			}
			acc[category as Category].push(...images);
		});
		return acc;
	}, {} as Record<Category, string[]>);

	// Get unique images for each category
	const uniqueImages = Object.entries(allImages).reduce(
		(acc, [category, images]) => {
			acc[category as Category] = Array.from(new Set(images));
			return acc;
		},
		{} as Record<Category, string[]>,
	);

	// Filter images based on selected categories
	const filteredImages = selectedCategories.flatMap(
		(category) => uniqueImages[category],
	);

	if (filteredImages.length === 0) {
		setSelectedCategories(['livingRoom']);
	}

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
	}, [filteredImages.length]);

	const prevSlide = useCallback(() => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + filteredImages.length) % filteredImages.length,
		);
	}, [filteredImages.length]);

	const handleCategoryClick = (category: Category) => {
		setSelectedCategories((prev) => {
			const newCategories = prev.includes(category)
				? prev.filter((cat) => cat !== category)
				: [...prev, category];
			return newCategories.length > 0 ? newCategories : [category];
		});
		setCurrentIndex(0);
	};

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

	return (
		<section className='bg-white p-2 rounded-lg overflow-hidden'>
			<div className='px-2 mx-auto max-w-screen-xl sm:py-4'>
				<div className='grid md:grid-cols-12 gap-4'>
					{/* Carousel Section */}
					<div className='md:col-span-8 bg-gray-100'>
						<div
							className='relative flex flex-row mx-auto overflow-hidden rounded-lg'
							onTouchStart={handleTouchStart}
							onTouchEnd={handleTouchEnd}>
							{/* Image Numbering */}
							<div className='absolute bottom-4 right-4 md:top-4 md:left-4 z-10 text-white text-lg font-bold'>
								{currentIndex + 1} / {filteredImages.length}
							</div>

							<div className='relative w-full h-300px md:h-[400px]'>
								<AnimatePresence initial={false}>
									<motion.div
										key={currentIndex}
										className='flex flex-row'
										style={{
											width: '100%',
											height: 'auto',
										}}
										initial={{ x: '100%' }}
										animate={{ x: 0 }}
										exit={{ x: '-100%' }}
										transition={{ duration: 0.5 }}>
										<div className='relative w-full h-[300px] max-w-[1200px] md:h-[400px] '>
											<Image
												src={filteredImages[currentIndex]}
												alt={`Slide ${currentIndex}`}
												width={1200}
												height={400}
												className='w-full h-full object-cover rounded-lg'
											/>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>

							{/* Left Navigation Button */}
							<button
								className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
								onClick={(e) => {
									e.preventDefault();
									prevSlide();
								}}
								aria-label='Previous image'>
								&#10094;
							</button>

							{/* Right Navigation Button */}
							<button
								className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
								onClick={(e) => {
									e.preventDefault();
									nextSlide();
								}}
								aria-label='Next image'>
								&#10095;
							</button>
						</div>
					</div>

					{/* Category Grid Section */}
					<div className='hidden col-span-4 md:flex flex-col rounded-lg'>
						<div className='grid gap-1 grid-cols-2 h-[400px]'>
							{Object.keys(uniqueImages).map((category, index) => (
								<a
									key={index}
									href='#'
									onClick={(e) => {
										e.preventDefault();
										handleCategoryClick(category as Category);
									}}
									className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 ${
										selectedCategories.includes(category as Category)
											? 'border border-blue-500'
											: ''
									}`}>
									<Image
										src={uniqueImages[category as Category][0]}
										alt={`${category} Image`}
										layout='responsive'
										width={500}
										height={400}
										className='absolute inset-0 h-full w-full object-fill rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out'
									/>
									<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 rounded-lg'></div>
									<p className='z-10 text-base font-medium text-white absolute bottom-0 right-0 p-2 lg:text-xl'>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</p>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategoryGrid;
