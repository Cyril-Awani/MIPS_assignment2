import React from 'react';
import Image from 'next/image';

interface ContractorCardProps {
	profileImage: string; // Path or URL to the profile image
	name: string;
	job: string;
	position?: string;
	company?: string; // Optional company field
	location: string;
	stars: number; // Number of stars (0 to 5)
	status: 'active' | 'inactive'; // Status type
	joinedYear: string; // Year the contractor joined
}

const ContractorCard: React.FC<ContractorCardProps> = ({
	profileImage,
	name,
	job,
	position,
	company, // company is now optional
	location,
	stars,
	status,
	joinedYear,
}) => {
	const statusColor = status === 'active' ? 'bg-green-500' : 'bg-red-500';
	const starsArray = React.useMemo(() => [...Array(5)], []);

	return (
		<div className='max-w-xs sm:max-w-md w-full h-96 sm:h-auto p-8 bg-white rounded-lg shadow-md border border-gray-200 mx-auto hover:bg-gray-100 transition-all'>
			{/* Profile Section */}
			<div className='flex flex-col items-center'>
				<div className='relative w-32 h-32 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gray-300'>
					<Image
						src={profileImage}
						alt={name}
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
				<div className='mt-4 text-center'>
					<h3 className='text-lg font-semibold'>{name}</h3>
					<p className='text-gray-500'>{job}</p>
				</div>
			</div>

			{/* Job Details */}
			<div className='mt-4 text-center'>
				<p>
					{position} {company && <span className='mr-2'>{company}</span>}{' '}
					{/* Conditionally render company */}
				</p>
				<p className='text-gray-500'>{location}</p>
			</div>

			{/* Stars and Status */}
			<div className='mt-3 flex items-center justify-between'>
				<div className='flex items-center'>
					{/* Render Stars */}
					{starsArray.map((_, index) => (
						<svg
							key={index}
							className={`w-5 h-5 ${
								index < stars ? 'text-yellow-500' : 'text-gray-300'
							}`}
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'>
							<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
						</svg>
					))}
				</div>
				<div
					className={`flex items-center gap-2 text-white text-sm px-3 py-1 rounded-full ${statusColor}`}>
					<span className='w-2 h-2 rounded-full bg-white'></span>
					{status
						? status.charAt(0).toUpperCase() + status.slice(1)
						: 'Unknown Status'}
				</div>
			</div>

			{/* Joined Year */}
			<div className='mt-3 flex text-sm justify-start text-gray-500'>
				<p>
					<span className='font-medium mr-2'>Joined :</span>
				</p>
				<p className='font-medium'>{joinedYear}</p>
			</div>
		</div>
	);
};

export default ContractorCard;
