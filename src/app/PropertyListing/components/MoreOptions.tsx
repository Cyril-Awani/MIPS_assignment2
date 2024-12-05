import React, { useState, useRef } from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';

const predefinedAmenities = [
	'Basement',
	'Gated',
	'Pond',
	'Boat Dock',
	'Golf Course',
	'Water Front',
	'Pool',
	'Lake View',
];

const bedOptions = [
	{ label: 'Any', value: 0 },
	{ label: '1+', value: 1 },
	{ label: '2+', value: 2 },
	{ label: '3+', value: 3 },
	{ label: '4+', value: 4 },
	{ label: '5+', value: 5 },
];

const bathOptions = [
	{ label: 'Any', value: 0 },
	{ label: '1+', value: 1 },
	{ label: '2+', value: 2 },
	{ label: '3+', value: 3 },
	{ label: '4+', value: 4 },
];

const houseTypeOptions = [
	{
		label: 'Apartments',
		value: 'apartments',
		icon: <ApartmentIcon fontSize='large' />,
	},
	{ label: 'Houses', value: 'houses', icon: <HomeIcon fontSize='large' /> },
	{
		label: 'Condos',
		value: 'condos',
		icon: <ApartmentIcon fontSize='large' />,
	},
	{
		label: 'Townhomes',
		value: 'townhomes',
		icon: <VillaIcon fontSize='large' />,
	},
];
const listingTypeOptions = [
	{ label: 'Strictly by Agent', value: 'agent' },
	{ label: 'Strictly by Owners', value: 'owners' },
];
const daysOnWebsiteOptions = [
	{ label: 'Less than 1 Day', value: '1_day' },
	{ label: 'Less than 1 Week', value: '1_week' },
	{ label: 'Less than 1 Month', value: '1_month' },
	{ label: 'Less than 3 Months', value: '3_months' },
	{ label: 'Less than 6 Months', value: '6_months' },
	{ label: 'Less than 1 Year', value: '1_year' },
	{ label: 'Less than 2 Years', value: '2_years' },
	{ label: '2+ Years', value: '2_plus_years' },
];
const paymentOptions = [
	{ label: 'Per Unit', value: 'per_unit' },
	{ label: 'Per Person', value: 'per_person' },
];

const MoreOptions = () => {
	const [open, setOpen] = useState(false);
	const [beds, setBeds] = useState(0);
	const [baths, setBaths] = useState(0);
	const [selectedHouseTypes, setSelectedHouseTypes] = useState<string[]>([]);
	const [majorOccupants, setMajorOccupants] = useState('');
	const [listingType, setListingType] = useState('');
	const [daysOnWebsite, setDaysOnWebsite] = useState('');
	const [university, setUniversity] = useState(''); // State for university selection
	const [paymentType, setPaymentType] = useState(''); // State for payment type
	const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
	const [searchKeyword, setSearchKeyword] = useState('');
	const modalRef = useRef<HTMLDivElement>(null);

	// Toggle house type selection
	const toggleHouseType = (type: string) => {
		setSelectedHouseTypes((prev) =>
			prev.includes(type)
				? prev.filter((item) => item !== type)
				: [...prev, type],
		);
	};
	const toggleAmenity = (amenity: string) => {
		setSelectedAmenities((prev) =>
			prev.includes(amenity)
				? prev.filter((item) => item !== amenity)
				: [...prev, amenity],
		);
	};
	const filteredAmenities = predefinedAmenities.filter((amenity) =>
		amenity.toLowerCase().includes(searchKeyword.toLowerCase()),
	);

	// Reset all filters
	const handleReset = () => {
		setBeds(0);
		setBaths(0);
		setSelectedHouseTypes([]);
		setMajorOccupants('');
		setUniversity('');
		setPaymentType('');
		setListingType('');
		setDaysOnWebsite('');
		setSelectedAmenities([]);
		setSearchKeyword('');
	};

	return (
		<div>
			{/* More Options Button */}
			<button
				onClick={() => setOpen(true)}
				className='flex items-center gap-2 cursor-pointer border bg-gray-400 hover:bg-gray-100 rounded-lg p-2 transition duration-200'>
				<FilterListRoundedIcon className=' text-sm md:text-md text-black whitespace-nowrap font-semibold' />
				<span className=' text-sm md:text-md text-black whitespace-nowrap font-semibold'>
					More
				</span>
			</button>

			{/* Modal Box */}
			{open && (
				<div
					onClick={(e) => {
						if (
							modalRef.current &&
							!modalRef.current.contains(e.target as Node)
						) {
							setOpen(false);
						}
					}}
					className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
					<div
						ref={modalRef}
						className='bg-white p-6 rounded-lg w-[96%] md:w-5/12 max-h-[80vh] overflow-auto shadow-lg relative'>
						{/* Close Icon */}
						<button
							onClick={() => setOpen(false)}
							className='absolute top-4 right-4 p-1 text-gray-600 hover:text-gray-900'>
							<CloseRoundedIcon />
						</button>

						<div className='text-xl font-semibold mb-4'>More Options</div>

						{/* Beds Section */}
						<div className='px-4 py-2'>
							<span className='font-semibold'>Max Beds</span>
							<div className='flex flex-row justify-start items-start gap-2'>
								{bedOptions.map((option) => (
									<button
										key={option.value}
										className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
											option.value === beds
												? 'bg-blue-500 text-white'
												: 'text-black'
										}`}
										onClick={() => setBeds(option.value)}>
										{option.label}
									</button>
								))}
							</div>
						</div>

						{/* Baths Section */}
						<div className='px-4 py-2'>
							<span className='font-semibold'>Min Baths</span>
							<div className='flex flex-row justify-start items-start gap-2'>
								{bathOptions.map((option) => (
									<button
										key={option.value}
										className={`w-full px-4 py-2 text-xs border rounded hover:bg-gray-200 active:bg-gray-300 ${
											option.value === baths
												? 'bg-blue-500 text-white'
												: 'text-black'
										}`}
										onClick={() => setBaths(option.value)}>
										{option.label}
									</button>
								))}
							</div>
						</div>

						{/* House Types Section */}
						<div className='px-4 py-2'>
							<span className='font-semibold text-lg'>Home Type</span>
							<div className='grid grid-cols-2 gap-4 mt-4'>
								{houseTypeOptions.map((option) => (
									<button
										key={option.value}
										className={`flex flex-col items-center justify-center border rounded-lg p-4 hover:shadow-md transition ${
											selectedHouseTypes.includes(option.value)
												? 'bg-blue-100 border-blue-500 text-blue-500'
												: 'bg-white border-gray-300 text-gray-700'
										}`}
										onClick={() => toggleHouseType(option.value)}>
										{option.icon}
										<div className='mt-2 font-medium'>{option.label}</div>
									</button>
								))}
							</div>
						</div>

						{/* Major Occupants Section */}
						<div className='px-4 py-2'>
							<span className='font-semibold'>Major Occupants</span>
							<select
								value={majorOccupants}
								onChange={(e) => setMajorOccupants(e.target.value)}
								className='w-full mt-2 border px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
								<option value=''>Select Occupants</option>
								<option value='couples'>Couples</option>
								<option value='retirees'>Retirees</option>
								<option value='bachelors'>Bachelors</option>
								<option value='spinsters'>Spinsters</option>
								<option value='students'>Students</option>
							</select>
						</div>

						{/* Students Section */}
						{majorOccupants === 'students' && (
							<div className='px-4 py-2'>
								{/* University Dropdown */}
								<div className='mb-4'>
									<span className='font-semibold'>Select University</span>
									<select
										value={university}
										onChange={(e) => setUniversity(e.target.value)}
										className='w-full mt-2 border px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
										<option value=''>Select University</option>
										<option value='university_a'>University A</option>
										<option value='university_b'>University B</option>
										<option value='university_c'>University C</option>
									</select>
								</div>

								{/* Payment Type Selection */}
								<div>
									<span className='font-semibold'>Payment Type</span>
									<div className='grid grid-cols-2 gap-4 mt-4'>
										{paymentOptions.map((option) => (
											<button
												key={option.value}
												className={`flex flex-col items-center justify-center border rounded-lg p-4 hover:shadow-md transition ${
													paymentType === option.value
														? 'bg-blue-100 border-blue-500 text-blue-500'
														: 'bg-white border-gray-300 text-gray-700'
												}`}
												onClick={() => setPaymentType(option.value)}>
												<div className='font-medium'>{option.label}</div>
											</button>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Amenities Section */}
						<div className='px-6 py-4'>
							<span className='font-semibold'>Keyword Search</span>
							<div className='border rounded-lg p-2 mt-2'>
								{/* Selected Amenities as Tags */}
								<div className='flex flex-wrap gap-2'>
									{selectedAmenities.map((amenity) => (
										<div
											key={amenity}
											className='flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm'>
											{amenity}
											<button
												onClick={() => toggleAmenity(amenity)}
												className='ml-2 text-gray-500 hover:text-gray-700'>
												✕
											</button>
										</div>
									))}
								</div>
								{/* Search Input */}
								<input
									type='text'
									value={searchKeyword}
									onChange={(e) => setSearchKeyword(e.target.value)}
									placeholder='Select a keyword or type here'
									className='w-full mt-2 border-none outline-none text-gray-700 placeholder-gray-400'
								/>
							</div>
							{/* Filtered Amenities */}
							<div className='grid grid-cols-2 gap-2 mt-4'>
								{filteredAmenities.map((amenity) => (
									<button
										key={amenity}
										onClick={() => toggleAmenity(amenity)}
										className={`flex items-center justify-center border rounded-lg py-2 px-4 text-sm ${
											selectedAmenities.includes(amenity)
												? 'bg-blue-100 border-blue-500 text-blue-500'
												: 'bg-white border-gray-300 text-gray-700'
										}`}>
										+ {amenity}
									</button>
								))}
								{/* No Matches Message */}
								{filteredAmenities.length === 0 && (
									<div className='col-span-2 text-center text-gray-500'>
										No matching amenities found.
									</div>
								)}
							</div>
						</div>

						<div className='px-6'>
							<span className='font-semibold'>Days on Website</span>
							<select
								value={daysOnWebsite}
								onChange={(e) => setDaysOnWebsite(e.target.value)}
								className='w-full mt-2 border px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
								<option value=''>Select Duration</option>
								{daysOnWebsiteOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>

						<div className='px-6 py-4'>
							<span className='font-semibold'>Listing Type</span>
							<div className='grid grid-cols-2 gap-4 mt-4'>
								{listingTypeOptions.map((option) => (
									<button
										key={option.value}
										className={`flex flex-col items-center justify-center border rounded-lg p-4 hover:shadow-md transition ${
											listingType === option.value
												? 'bg-blue-100 border-blue-500 text-blue-500'
												: 'bg-white border-gray-300 text-gray-700'
										}`}
										onClick={() => setListingType(option.value)}>
										<div className='font-medium'>{option.label}</div>
									</button>
								))}
							</div>
						</div>

						{/* Buttons Section */}
						<div className='flex justify-end gap-2 mt-4'>
							<button
								onClick={handleReset}
								className='py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400 text-sm'>
								Reset
							</button>
							<button
								onClick={() => setOpen(false)}
								className='py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-sm'>
								Apply Filters
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MoreOptions;
