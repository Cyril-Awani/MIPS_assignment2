'use client';

import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Slider,
	FormControlLabel,
	Switch,
	Checkbox,
	Autocomplete,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const allAmenities = [
	'Pool',
	'Gym',
	'Parking',
	'Pet Friendly',
	'Balcony',
	'Air Conditioning',
	'Dishwasher',
	'Washer/Dryer',
	'High-Speed Internet',
	'Security System',
	'Elevator',
	'Doorman',
];

const propertyTypes = ['Apartment', 'House', 'Condo', 'Townhouse', 'Studio'];

const Filter = () => {
	const [open, setOpen] = React.useState(false);
	const [priceRange, setPriceRange] = React.useState<number[]>([10000, 800000]);
	const [beds, setBeds] = React.useState<string | null>(null);
	const [baths, setBaths] = React.useState<string | null>(null);
	const [amenities, setAmenities] = React.useState<string[]>([]);
	const [searchTerm, setSearchTerm] = React.useState('');
	const [noPets, setNoPets] = React.useState(false);
	const [petsAllowed, setPetsAllowed] = React.useState(false);
	const [tourOption, setTourOption] = React.useState<string | null>(null);
	const [newListings, setNewListings] = React.useState(false);
	const [selectedPropertyTypes, setSelectedPropertyTypes] = React.useState<
		string[]
	>([]);

	const filteredAmenities = React.useMemo(
		() =>
			allAmenities.filter((amenity) =>
				amenity.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		[searchTerm],
	);

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setPriceRange(newValue as number[]);
	};

	const handleInputChange =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = [...priceRange];
			newValue[index] =
				event.target.value === '' ? 10000 : Number(event.target.value);
			setPriceRange(newValue);
		};

	const handleBlur = (index: number) => () => {
		const newValue = [...priceRange];
		newValue[index] = Math.max(10000, Math.min(newValue[index], 1000000));
		setPriceRange(newValue);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('Filter Criteria:', {
			priceRange,
			beds,
			baths,
			amenities,

			noPets,
			petsAllowed,
			tourOption,
			newListings,
			selectedPropertyTypes,
		});
		handleClose();
	};

	const handleClear = () => {
		setSelectedPropertyTypes([]);
		setPriceRange([10000, 1000000]);
		setBeds(null);
		setBaths(null);
		setAmenities([]);
		setSearchTerm('');
		setNoPets(false);
		setPetsAllowed(false);
		setTourOption(null);
		setNewListings(false);
	};

	const handlePropertyTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const { value, checked } = event.target;
		setSelectedPropertyTypes((prev) =>
			checked ? [...prev, value] : prev.filter((type) => type !== value),
		);
	};

	const formatNumberWithCommas = (num: number) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	return (
		<div>
			<button
				onClick={handleClickOpen}
				className='flex flex-row items-center px-2 py-2 bg-white-500 text-black shadow border rounded-xl transition duration-300 ease-in-out hover:scale-110 hover:bg-grey-700'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='size-3 hover:fill-blue-500 hover:scale-110'>
					<path d='M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z' />
				</svg>
				<p className='text-[10px] ml-1'>Filter</p>
			</button>

			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{ component: 'form', onSubmit: handleSubmit }}
				fullWidth
				maxWidth='xs'>
				<DialogTitle className='flex justify-between items-center'>
					<p className='text-xl font-bold capitalize'>Filter Menu</p>
					<span
						onClick={() => {
							handleClose();
						}}
						className='cursor-pointer transition-transform transform hover:scale-110 hover:font-bold'>
						<CloseIcon />
					</span>
				</DialogTitle>
				<DialogContent>
					<div className='space-y-2'>
						{' '}
						{/* Property Type Section */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Property Type</h2>
							<div className='space-y-2'>
								{propertyTypes.map((type) => (
									<FormControlLabel
										key={type}
										control={
											<Checkbox
												checked={selectedPropertyTypes.includes(type)}
												onChange={handlePropertyTypeChange}
												value={type}
											/>
										}
										label={<span style={{ fontSize: '14px' }}>{type}</span>}
									/>
								))}
							</div>
						</div>
						{/* Price Range Section */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Price Range</h2>
							<div className='flex items-center space-x-4'>
								<label className='flex flex-col items-center'>
									<div className='relative flex items-center'>
										<span className='absolute left-2'>₦</span>
										<input
											type='number'
											value={priceRange[0]}
											onChange={handleInputChange(0)}
											onBlur={handleBlur(0)}
											className='w-25 border text-sm p-2 rounded-xl appearance-none text-center'
											min={10000}
											max={1000000}
											aria-label='price range'
										/>
									</div>
									<span className='text-sm text-gray-500'>Min</span>
								</label>

								{/* Slider Wrapper */}
								<div className='flex-1'>
									<Slider
										value={priceRange}
										onChange={handleSliderChange}
										min={10000}
										max={1000000}
										step={10000}
										className='my-4' // Added margin for spacing
									/>
								</div>

								<div className='flex flex-col items-center'>
									<div className='relative flex items-center'>
										<span className='absolute left-2'>₦</span>
										<input
											type='number'
											value={priceRange[1]}
											onChange={handleInputChange(1)}
											onBlur={handleBlur(1)}
											className='w-25 border text-sm p-2 rounded-xl appearance-none text-center'
											min={10000}
											max={1000000}
										/>
									</div>
									<span className='text-sm text-gray-500'>Max</span>
								</div>
							</div>
						</div>
						{/* Beds and Baths Section */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Beds</h2>
							<ToggleButtonGroup
								value={beds}
								exclusive
								onChange={(event, newBeds) => setBeds(newBeds)}
								className='flex justify-center'>
								{[1, 2, 3, '4+'].map((b) => (
									<ToggleButton
										key={b}
										value={b.toString()}
										className='px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300'>
										{b} Bed{b >= '2' ? 's' : ''}
									</ToggleButton>
								))}
							</ToggleButtonGroup>

							<h2 className='text-sm font-bold mt-4 mb-2'>Baths</h2>
							<ToggleButtonGroup
								value={baths}
								exclusive
								onChange={(event, newBaths) => setBaths(newBaths)}
								className='flex justify-center'>
								{[1, 2, 3, '4+'].map((b) => (
									<ToggleButton
										key={b}
										value={b.toString()}
										className='px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300'>
										{b} Bath{b >= '2' ? 's' : ''}
									</ToggleButton>
								))}
							</ToggleButtonGroup>
						</div>
						{/* Amenities Section */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Amenities</h2>
							<Autocomplete
								multiple
								options={filteredAmenities.sort((a, b) => a.localeCompare(b))} // Sort options in alphabetical order
								value={amenities}
								onChange={(event, newValue) => setAmenities(newValue)}
								renderInput={(params) => (
									<TextField
										{...params}
										variant='outlined'
										label='Select Amenities'
										placeholder='Amenities'
										size='small'
									/>
								)}
								onInputChange={(event, newInputValue) =>
									setSearchTerm(newInputValue)
								}
							/>
						</div>
						{/* Pet-Friendly Options */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Pet-Friendly Options</h2>
							<FormControlLabel
								control={
									<Switch
										checked={noPets}
										onChange={(e) => setNoPets(e.target.checked)}
										size='small' // Makes the switch smaller
									/>
								}
								label={<span style={{ fontSize: '0.8rem' }}>No Pets</span>} // Reduce font size
							/>

							<FormControlLabel
								control={
									<Switch
										checked={petsAllowed}
										onChange={(e) => setPetsAllowed(e.target.checked)}
										size='small' // Makes the switch smaller
									/>
								}
								label={<span style={{ fontSize: '0.8rem' }}>Pets Allowed</span>} // Reduce font size
							/>
						</div>
						{/* Tour Options */}
						<div>
							<h2 className='text-sm font-bold mb-2'>Tour Options</h2>
							<ToggleButtonGroup
								value={tourOption}
								exclusive
								onChange={(event, newTourOption) =>
									setTourOption(newTourOption)
								}
								className='flex space-x-2'>
								<ToggleButton
									value='3D Tour'
									className='px-2 py-1 border rounded text-sm' // Adjust padding and font size
								>
									<span className='text-xs'>3D Tour</span>{' '}
									{/* Reduce font size */}
								</ToggleButton>
								<ToggleButton
									value='Videos Included'
									className='px-2 py-1 border rounded text-sm' // Adjust padding and font size
								>
									<span className='text-xs'>Videos Included</span>{' '}
									{/* Reduce font size */}
								</ToggleButton>
							</ToggleButtonGroup>
						</div>
						{/* New Listings Only */}
						<div>
							<h2 className='text-sm font-bold mb-2'>New Listings Only</h2>
							<FormControlLabel
								control={
									<Switch
										checked={newListings}
										onChange={(e) => setNewListings(e.target.checked)}
										size='small' // Makes the switch smaller
									/>
								}
								label={<span className='text-xs'>New Listings Only</span>} // Reduce font size
							/>
						</div>
					</div>
				</DialogContent>
				<div className='bg-white shadow-2xl rounded-md p-4 border-t-2 border-gray-300'>
					<DialogActions className='flex justify-between'>
						<Button
							onClick={() => {
								handleClear();
								handleClose();
							}}
							className='text-gray-700 font-bold p-4 rounded-md capitalize'>
							Clear
						</Button>
						<Button
							type='submit'
							variant='contained'
							className='bg-blue-600 font-bold text-white capitalize'>
							700<span className='font-normal'>+ Result</span>
						</Button>
					</DialogActions>
				</div>
			</Dialog>
		</div>
	);
};

export default Filter;
