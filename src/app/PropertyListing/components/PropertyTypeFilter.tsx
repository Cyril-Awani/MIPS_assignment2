import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const availablePropertyTypes = [
	{ label: 'Any', value: 'any' },
	{ label: 'Apartment', value: 'apartment' },
	{ label: 'House', value: 'house' },
	{ label: 'Condo', value: 'condo' },
	{ label: 'Villa', value: 'villa' },
	{ label: 'Townhouse', value: 'townhouse' },
];

const PropertyTypeFilter = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const toggleType = (type: string) => {
		if (type === 'any') {
			setSelectedTypes(['any']);
		} else {
			setSelectedTypes((prevTypes) => {
				const isAnySelected = prevTypes.includes('any');
				if (isAnySelected) {
					return [type]; // Replace "Any" with the selected type
				}
				if (prevTypes.includes(type)) {
					return prevTypes.filter((item) => item !== type); // Deselect type
				}
				return [...prevTypes, type]; // Add type
			});
		}
	};

	const handleReset = () => {
		setSelectedTypes([]);
		setIsDropdownOpen(false);
	};

	const handleApply = () => {
		setIsDropdownOpen(false);
		// Handle apply action here
	};

	return (
		<div
			className='relative flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'
			ref={dropdownRef}>
			{/* Property Type Button */}
			<div
				className='flex items-center md:gap-2'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<p className='text-sm md:text-md whitespace-nowrap font-semibold'>
					Property Types
				</p>
				<IoIosArrowDown
					style={{
						fontSize: 15,
						stroke: 'currentColor',
						strokeWidth: 2,
					}}
					className={`text-lg font-bold text-gray-600 transition-transform duration-300 transform ${
						isDropdownOpen ? 'rotate-180' : ''
					}`}
				/>
			</div>

			{/* Dropdown Menu */}
			{isDropdownOpen && (
				<div className='absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-[1000px] max-w-sm'>
					{/* Property Type Checkboxes */}
					<div className='px-4 py-2'>
						{availablePropertyTypes.map((option) => (
							<div key={option.value} className='flex items-center gap-2'>
								<input
									type='checkbox'
									id={option.value}
									checked={selectedTypes.includes(option.value)}
									onChange={() => toggleType(option.value)}
									className='w-4 h-4 accent-blue-500 border-gray-300 rounded'
								/>
								<label htmlFor={option.value} className='text-sm'>
									{option.label}
								</label>
							</div>
						))}
					</div>

					{/* Reset and Apply Buttons */}
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

export default PropertyTypeFilter;
