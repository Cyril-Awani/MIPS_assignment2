import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ContactCard from '../components/ContractorCard';
import { ArrowForwardIos, Flag, IosShare, SaveAlt } from '@mui/icons-material';

interface Review {
	clientName: string;
	rating: number;
	reviewText: string;
	jobDate: string;
	location: string;
}

interface ContractorInfoPageProps {
	profileImage: string;
	name: string;
	job: string;
	location: string;
	position?: string;
	company?: string;
	about: string;
	yOfExp: number;
	reviews: Review[];
}

const ContractorInfo: React.FC<ContractorInfoPageProps> = ({
	profileImage,
	name,
	job,
	location,
	position,
	company,
	about,
	yOfExp,
	reviews,
}) => {
	const handleContactSubmit = (data: {
		name: string;
		email: string;
		message: string;
	}) => {
		console.log('Form submitted with data:', data);
		// Handle the form data (e.g., send it to an API)
		alert(`Thank you for your message, ${data.name}!`);
	};
	const router = useRouter();

	return (
		<div className='max-w-4xl mx-auto p-8'>
			<h1 className='text-lg font-light'>Bread Crumb</h1>
			<div className='flex items-center justify-between py-4'>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Go back'
						className='flex items-center text-hvr hover:text-btn transition group'
						onClick={() => router.back()}>
						<ArrowForwardIos className='transform rotate-180' />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Back
						</span>
					</button>
				</div>
				<div className='flex-grow flex justify-center'>
					<Image
						src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
						alt='Company Logo'
						width={50}
						height={50}
						className='h-auto max-w-lg'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Share property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<IosShare />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Share
						</span>
					</button>
					<button
						aria-label='Save property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<SaveAlt />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Save
						</span>
					</button>
					<button
						aria-label='Report property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<Flag />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Report
						</span>
					</button>
				</div>
			</div>

			<div className='flex items-center mb-4'>
				<div className='relative w-28 h-28 rounded-full overflow-hidden border border-gray-300'>
					<Image
						src={profileImage}
						alt={name}
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
				<div className='ml-6'>
					<h1 className='text-3xl font-semibold'>{name}</h1>
					<p className='text-gray-500 text-lg'>
						{job}, {location}
					</p>
					<p className='text-gray-700 text-lg'>
						{position} {company}
					</p>
					<p className='text-gray-500 mt-2'>
						<span className='font-medium'>Years of Experience: </span>
						{yOfExp}
					</p>
				</div>
			</div>

			<section className='flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between rounded-md border border-gray-100 text-gray-700 shadow-md mb-4 mt-4'>
				{/* Left Section: Reviews */}
				<div className='w-full lg:w-2/3'>
					<div className='mx-4 mt-4 pb-4 border-b border-gray-200'>
						<h2 className='text-2xl font-semibold mb-2'>About Me</h2>
						<p className='mt-2 text-gray-400'>{about}</p>
					</div>
					<div className='mx-4 mt-4'>
						<h2 className='text-2xl font-semibold mb-2'>Client Reviews</h2>
						{reviews.length === 0 ? (
							<p>No reviews available</p>
						) : (
							reviews.map((review, index) => (
								<div
									key={index}
									className='border-b border-gray-200 py-4 last:border-none'>
									<div className='flex justify-between'>
										<div>
											<h3 className='text-xl font-semibold'>
												{review.clientName}
											</h3>
											<p className='text-gray-500'>{review.jobDate}</p>
										</div>
										<div className='flex items-center'>
											{[...Array(5)].map((_, i) => (
												<svg
													key={i}
													className={`w-5 h-5 ${
														i < review.rating
															? 'text-yellow-500'
															: 'text-gray-300'
													}`}
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'>
													<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
												</svg>
											))}
										</div>
									</div>
									<p className='mt-2 text-gray-700'>{review.reviewText}</p>
									<p className='mt-1 text-gray-500 text-sm'>
										<span className='font-medium'>Location:</span>{' '}
										{review.location}
									</p>
								</div>
							))
						)}
					</div>
				</div>

				{/* Right Section: Sticky Contact Card */}
				<div className='w-full lg:w-1/3 p-4'>
					<div className='min-h-screen relative'>
						{/* Sticky Contact Card */}
						<div className='sticky top-6 w-full'>
							<ContactCard onSubmit={handleContactSubmit} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContractorInfo;
