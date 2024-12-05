import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// Styled Input component
const Input = styled(InputBase)`
	width: 80px;
	padding: 4px 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
	text-align: center;

	/* Hide default increment/decrement arrows */
	input[type='number'] {
		-moz-appearance: textfield;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const PriceFilter = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [value, setValue] = useState<number[]>([10000, 800000]);
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

	// Handle slider change
	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	// Handle input change
	const handleInputChange =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = [...value];
			newValue[index] =
				event.target.value === '' ? 1000 : Number(event.target.value);
			setValue(newValue);
		};

	// Handle blur to ensure values stay within range
	const handleBlur = (index: number) => () => {
		const newValue = [...value];
		if (newValue[index] < 10000) {
			newValue[index] = 10000;
		} else if (newValue[index] > 1000000) {
			newValue[index] = 1000000;
		}
		setValue(newValue);
	};

	// Reset values
	const handleReset = () => {
		setValue([10000, 800000]);
		setIsDropdownOpen(false);
	};

	// Apply values
	const handleApply = () => {
		setIsDropdownOpen(false);
		// Handle apply logic here
	};

	return (
		<div
			className='relative flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200'
			ref={dropdownRef}>
			{/* Price Filter Button */}
			<div
				className='flex items-center gap-2'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<p className='text-sm md:text-md whitespace-nowrap font-semibold'>
					Price Range
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
				<div className='absolute -left-44  md:left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-[1000px] max-w-sm'>
					<Box sx={{ padding: '16px' }}>
						{/* Dynamic "From [min value] to [max value]" */}
						<p className='text-sm font-medium mb-4'>
							From ${value[0]} to ${value[1]}
						</p>

						<div className='block items-center gap-2'>
							{/* Left Input */}

							{/* Slider */}
							<div className='p-2 mx-2'>
								<Slider
									value={value}
									onChange={handleSliderChange}
									aria-labelledby='price-slider'
									min={10000}
									max={1000000}
									step={10000}
									sx={{ flex: 1 }}
								/>
							</div>

							<div className='flex flex-row items-center justify-between pb-4 border-b border-gray-200'>
								<div className='flex items-center border-2 rounded-lg border-gray-800 relative'>
									<Input
										value={value[0]}
										onChange={handleInputChange(0)}
										onBlur={handleBlur(0)}
										className='w-[120px] border-none text-lg font-semibold'
										inputProps={{
											step: 10000,
											min: 10000,
											max: 1000000,
											type: 'number',
											'aria-labelledby': 'input-slider-left',
										}}
									/>
									<div className='flex flex-col absolute right-2 -top-2'>
										<button
											onClick={() => {
												const newValue = Math.min(value[0] + 10000, 1000000);
												setValue([newValue, value[1]]);
											}}
											className='cursor-pointer p-0 hover:text-blue-500'>
											<KeyboardArrowUpRoundedIcon fontSize='small' />
										</button>
										<button
											onClick={() => {
												const newValue = Math.max(value[0] - 10000, 10000);
												setValue([newValue, value[1]]);
											}}
											className='cursor-pointer p-0 hover:text-blue-500'>
											<KeyboardArrowDownRoundedIcon fontSize='small' />
										</button>
									</div>
								</div>

								<div className='flex items-center border-2 rounded-lg border-gray-800 mr-2 relative'>
									<Input
										value={value[1]}
										onChange={handleInputChange(1)}
										onBlur={handleBlur(1)}
										className='w-[120px] border-none text-lg font-semibold'
										inputProps={{
											step: 10000,
											min: 10000,
											max: 1000000,
											type: 'number',
											'aria-labelledby': 'input-slider-right',
										}}
									/>
									<div className='flex flex-col absolute right-2 -top-2'>
										<button
											onClick={() => {
												const newValue = Math.min(value[1] + 10000, 1000000);
												setValue([value[0], newValue]);
											}}
											className='cursor-pointer p-0 hover:text-blue-500'>
											<KeyboardArrowUpRoundedIcon fontSize='small' />
										</button>
										<button
											onClick={() => {
												const newValue = Math.max(value[1] - 10000, 10000);
												setValue([value[0], newValue]);
											}}
											className='cursor-pointer p-0 hover:text-blue-500'>
											<KeyboardArrowDownRoundedIcon fontSize='small' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Box>

					{/* Reset and Apply Buttons */}
					<div className='flex gap-2 px-4 pt-2 pb-4'>
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

export default PriceFilter;
