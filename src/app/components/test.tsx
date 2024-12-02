'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import propertyData from '@/app/Data/propertyData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FlagIcon from '@mui/icons-material/Flag';
import PropertyInquiry from '../components/proprtyinquiryform';
import CategoryGrid from '../components/CategoryGrid';
import Overview from '@/app/components/Overview';
import PropertyTab from '@/app/components/PropertyTab';

export default function PropertyDetail({ params }: { params: { id: string } }) {
	const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
		null,
	);

	useEffect(() => {
		// Simulate asynchronous behavior by waiting for params
		async function fetchParams() {
			if (params) {
				setUnwrappedParams(params); // Set params after async unwrapping
			}
		}

		fetchParams();
	}, [params]);

	if (!unwrappedParams) {
		return <div>Loading...</div>; // Wait for params to be available
	}

	const { id } = unwrappedParams;

	const property = propertyData.find((p) => p.id === parseInt(id));

	if (!property) {
		return <div>Property not found</div>;
	}
	return (
		<div className=' mx-auto px-4'>
			<h1 className='text-xl font-extrabold'>Property Detail:</h1>
			<div className='flex items-center justify-between py-4'>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Go back'
						className='flex items-center text-hvr hover:text-btn transition group'>
						<ArrowForwardIosIcon className='transform rotate-180' />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Back
						</span>
					</button>
				</div>
				<div className='flex-grow flex justify-center'>
					<Image
						src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
						alt='Company Logo'
						layout='intrinsic' // Maintain the aspect ratio of the image
						width={50} // Base width for the image
						height={50} // Base height for the image
						className='h-auto max-w-lg'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Share property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<IosShareIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Share
						</span>
					</button>
					<button
						aria-label='Save property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<SaveAltIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Save
						</span>
					</button>
					<button
						aria-label='Report property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<FlagIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Report
						</span>
					</button>
				</div>
			</div>

			<main className='py-4'>
				<section className='flex justify-between items-center m-2 '>
					<div>
						<h1 className='text-xl sm:text-3xl  font-bold'>{property.name}</h1>
						<p className='text-gray-600 capitalize'>
							Location: {property.address}
						</p>
					</div>
					<div>
						<h1 className='text-xl sm:text-3xl font-bold mr-8 sm:ml:auto'>
							{property.price}
						</h1>
					</div>
				</section>
				<div className='w-full '>
					<CategoryGrid />
				</div>

				<section className='flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between rounded-md border border-gray-100 text-gray-700 shadow-md mb-4'>
					<div className='w-full lg:w-2/3'>
						<Overview />
						<PropertyTab />
					</div>
					<div className='w-full lg:w-1/3 p-4'>
						<PropertyInquiry />
					</div>
				</section>
			</main>
			<div>
				<p className='font-bold text-lg leading-1 text-gray-900 leading-10 pb-1 border-b border-gray-200 cursor-pointer'></p>
			</div>
		</div>
	);
}
