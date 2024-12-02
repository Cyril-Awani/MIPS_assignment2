import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
	width: 100px;
`;

const histogramData = [
	5, 15, 25, 40, 35, 20, 42, 28, 22, 12, 10, 5, 7, 2, 3, 30, 38, 45, 20, 27, 12,
	18, 35, 40, 50, 25, 32, 15, 13, 18, 10, 100000,
]; // Expanded to 30 data points

export default function PriceRange() {
	const [value, setValue] = React.useState<number[]>([10000, 1000000]); // Initial values

	// Handle slider change
	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	// Handle input changes
	const handleInputChange =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = [...value];
			const inputValue =
				event.target.value === '' ? 10000 : Number(event.target.value);
			if (index === 0 && inputValue <= value[1]) {
				newValue[index] = inputValue; // Ensure left value <= right value
			} else if (index === 1 && inputValue >= value[0]) {
				newValue[index] = inputValue; // Ensure right value >= left value
			}
			setValue(newValue);
		};

	// Handle blur events to keep values within range
	const handleBlur = (index: number) => () => {
		const newValue = [...value];
		if (newValue[index] < 10000) {
			newValue[index] = 10000;
		} else if (newValue[index] > 1000000) {
			newValue[index] = 1000000;
		}
		setValue(newValue);
	};

	// Calculate opacity for each histogram bar based on the slider
	const calculateOpacity = (barIndex: number, min: number, max: number) => {
		const barRange = barIndex * (1000000 / histogramData.length);
		return barRange >= min && barRange <= max ? 1 : 0.3;
	};

	return (
		<div className='p-4'>
			<div className='relative w-full max-w-3xl mx-auto'>
				<h3 className='text-xl mb-2'>Price Range</h3>

				{/* Dynamic "From [min value] to [max value]" */}
				<h4 className='text-lg mb-2'>
					From ${value[0]} to ${value[1]}
				</h4>

				{/* Histogram */}
				<div>
					<div className='relative w-full h-[80%] flex items-end bg-gray-100 rounded-lg overflow-hidden mb-2'>
						{histogramData.map((barValue, index) => {
							// Calculate height relative to the largest value in histogramData
							const maxHeight = Math.max(...histogramData);
							const scaledHeight = (barValue / maxHeight) * 100; // Scale to percentage

							return (
								<div
									key={index}
									className='bg-blue-500 transition-opacity'
									style={{
										height: `${scaledHeight}%`, // Scaled bar height
										width: `${(100 / histogramData.length) * 0.3}%`, // Skinnier bars
										marginLeft: `${(100 / histogramData.length) * 0.1}%`, // Adding space between bars
										marginRight: `${(100 / histogramData.length) * 0.1}%`, // Adding space between bars
										opacity: calculateOpacity(index, value[0], value[1]),
									}}
								/>
							);
						})}
					</div>
					<div className='relative w-full h-[80%] flex items-end bg-gray-100 rounded-lg overflow-hidden mb-2'>
						{histogramData.map((barValue, index) => {
							// Calculate height relative to the largest value in histogramData
							const maxHeight = Math.max(...histogramData);
							const scaledHeight = (barValue / maxHeight) * 100; // Scale to percentage

							return (
								<div
									key={index}
									className='bg-blue-500 transition-opacity'
									style={{
										height: `${scaledHeight}%`, // Scaled bar height
										width: `${(100 / histogramData.length) * 0.3}%`, // Skinnier bars
										marginLeft: `${(100 / histogramData.length) * 0.1}%`, // Adding space between bars
										marginRight: `${(100 / histogramData.length) * 0.1}%`, // Adding space between bars
										opacity: calculateOpacity(index, value[0], value[1]),
									}}
								/>
							);
						})}
					</div>

					{/* Slider positioned at the bottom of the histogram */}
					<Slider
						value={value}
						onChange={handleSliderChange}
						aria-labelledby='price-slider'
						min={10000}
						max={1000000}
						step={1000}
						className='absolute bottom-[2rem] justify-center left-0 w-full z-10'
					/>
				</div>
				{/* Input Fields */}
				<div className='flex justify-between mt-4'>
					<div className='flex flex-col items-start'>
						<Input
							value={value[0]}
							size='small'
							onChange={handleInputChange(0)}
							onBlur={handleBlur(0)}
							inputProps={{
								step: 10000,
								min: 10000,
								max: 1000000,
								type: 'number',
								'aria-labelledby': 'input-slider-left',
							}}
							className='w-24'
						/>
					</div>
					<div className='flex flex-col items-end'>
						<Input
							value={value[1]}
							size='small'
							onChange={handleInputChange(1)}
							onBlur={handleBlur(1)}
							inputProps={{
								step: 10000,
								min: 10000,
								max: 1000000,
								type: 'number',
								'aria-labelledby': 'input-slider-right',
							}}
							className='w-24'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
