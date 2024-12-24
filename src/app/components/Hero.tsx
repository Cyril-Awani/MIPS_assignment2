'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search'; // Import the MUI Search icon
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Hero: React.FC = () => {
	const [category, setCategory] = useState('rent'); // Track the selected category
	const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track the dropdown state

	const handleCategorySelect = (value: string) => {
		setCategory(value);
		setIsDropdownOpen(false); // Close the dropdown after selection
	};

	return (
		<div className='relative w-full h-[500px] md:h-[50vh] rounded-lg bg-gray-800 overflow-hidden'>
			{/* Image Background */}
			<div className='absolute top-0 left-0 w-full h-full'>
				<Image
					src='https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2256.jpg?t=st=1735024893~exp=1735028493~hmac=610c4c5b443af0963c8575e19200181e21cc7a1edd46f245e36520f7e36d5ff5&w=900'
					alt='Living Room'
					layout='fill'
					objectFit='cover'
					priority
				/>
			</div>

			{/* Vignette Overlay */}
			<div className='absolute inset-0 bg-black opacity-50'></div>

			{/* Hero Content */}
			<div className='relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-8 md:px-16'>
				<h1 className='text-4xl md:text-5xl font-bold text-white'>
					Find Your Dream Home
				</h1>
				<p className='text-lg md:text-xl text-gray-300 mt-4'>
					Explore the best real estate deals and find the perfect place for you.
				</p>

				{/* New Search Bar */}
				<div className='mt-6 md:bg-white rounded-full p-4 shadow-lg flex items-center justify-between max-w-3xl w-full flex-col md:flex-row'>
					{/* Category Dropdown */}
					<div className='relative flex items-center bg-white rounded p-2 md:p-0 w-full md:w-fit mb-4 md:mb-0'>
						<label className='text-sm whitespace-nowrap font-medium text-gray-600 w-auto mr-2'>
							Category :
						</label>
						<div
							className='relative group cursor-pointer'
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
							<div className='min-w-[290px] md:min-w-full flex items-center justify-between p-2 border-none focus:outline-none'>
								{/* Category Name */}
								<span className='flex-grow text-gray-500'>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</span>

								{/* Animated Arrow */}
								<div
									className={`transition-transform duration-300 transform md:ml-4 ${
										isDropdownOpen ? 'rotate-180' : 'rotate-0'
									}`}>
									<KeyboardArrowDownRoundedIcon />
								</div>
							</div>

							{/* Custom Dropdown Menu */}
							{isDropdownOpen && (
								<div className='absolute left-0 mt-2 w-[290px] md:w-20 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
									<div
										className='px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer'
										onClick={() => handleCategorySelect('buy')} // Select Buy
									>
										Buy
									</div>
									<div
										className='px-1 py-2 hover:bg-gray-100 rounded-lg  cursor-pointer'
										onClick={() => handleCategorySelect('rent')} // Select Rent
									>
										Rent
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Location Input and Search Button */}
					<div className='flex items-center bg-white rounded md:bg-transparent p-2 md:p-0 w-full md:w-full md:ml-4'>
						<label className='text-sm whitespace-nowrap font-medium text-gray-600 w-auto mr-2'>
							Keyword :
						</label>
						<div className='flex flex-row w-full'>
							<input
								type='text'
								placeholder='Type, Rooms, City, or Landmark'
								className='w-full capitalize bg-transparent p-2 border-none focus:outline-none'
							/>
							{/* Search Button with MUI Icon */}
							<div className='ml-2'>
								<button className='bg-black text-white p-2 rounded-full hover:bg-gray-900'>
									<SearchIcon className='text-white' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
