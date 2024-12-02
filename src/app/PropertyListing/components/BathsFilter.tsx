import React, { useState, useEffect, useRef } from 'react';
import { Bathtub } from '@mui/icons-material';
import { IoIosArrowDown } from 'react-icons/io';

const bathOptions = [
	{ label: 'Any', value: 0 },
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
	{ label: '4', value: 4 },
	{ label: '5+', value: 5 },
];

const BathsFilter = () => {
	const [minBaths, setMinBaths] = useState<number>(0);
	const [maxBaths, setMaxBaths] = useState<number>(0);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

	// Close the dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false); // Close dropdown if clicked outside
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		// Cleanup the event listener
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Handler to reset the values to 'Any' (0) and close the dropdown
	const handleReset = () => {
		setMinBaths(0);
		setMaxBaths(0);
		setIsDropdownOpen(false); // Close the dropdown
	};

	// Handler to apply the selected values and close the dropdown
	const handleApply = () => {
		// Here, you can pass the values to the parent component if needed
		// Example: onBathsChange(minBaths, maxBaths);
		setIsDropdownOpen(false); // Close the dropdown when Apply is clicked
	};

	// Handler for selecting baths
	const handleBathsChange = (min: number, max: number) => {
		setMinBaths(min);
		setMaxBaths(max);
	};

	return (
		<div className='hidden md:flex items-center gap-2 relative'>
			{/* Icon and Label */}
			<div
				className='flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<Bathtub className='text-lg font-semibold' />
				<p className='text-md font-semibold'>Baths</p>
				<IoIosArrowDown
					style={{
						fontSize: 15, // Adjust size
						stroke: 'currentColor', // Optional: Set stroke color
						strokeWidth: 2, // Set the thickness (only works if the icon supports strokeWidth)
					}}
					className={`text-lg font-bold text-gray-600 transition-transform duration-300 transform ${
						isDropdownOpen ? 'rotate-180' : ''
					}`}
				/>
			</div>

			{/* Dropdown Menu */}
			{isDropdownOpen && (
				<div
					ref={dropdownRef}
					className='absolute flex flex-col top-0 mt-10 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-auto'>
					{/* Min Baths Option */}
					<div className='px-4 py-2'>
						<span className='font-semibold'>Min Baths</span>
						<div className='flex flex-row justify-start items-start'>
							{bathOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === minBaths
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBathsChange(option.value, maxBaths)}>
									{option.label}
								</button>
							))}
						</div>
					</div>

					{/* Max Baths Option */}
					<div className='px-4 py-2'>
						<span className='font-semibold'>Max Baths</span>
						<div className='flex flex-row justify-start items-start'>
							{bathOptions.map((option) => (
								<button
									key={option.value}
									className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
										option.value === maxBaths
											? 'bg-blue-500 text-white'
											: 'text-black'
									}`}
									onClick={() => handleBathsChange(minBaths, option.value)}>
									{option.label}
								</button>
							))}
						</div>
					</div>

					{/* Apply and Reset Buttons */}
					<div className='flex gap-2 px-4 py-2'>
						<button
							className='w-full py-2 px-4 text-xs bg-gray-300 rounded hover:bg-gray-400'
							onClick={handleReset}>
							Reset
						</button>
						<button
							className='w-full py-2 px-4 text-xs bg-blue-500 text-white rounded hover:bg-blue-600'
							onClick={handleApply}>
							View {/*number of properties with this filter*/} properties
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BathsFilter;
