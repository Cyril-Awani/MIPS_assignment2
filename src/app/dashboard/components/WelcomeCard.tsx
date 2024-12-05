import React from 'react';
import { BsFillPinMapFill } from 'react-icons/bs';

interface WelcomeCardProps {
	tenant: {
		name: string;
		rentedProperty: string;
		leaseStart: string;
		leaseEnd: string;
	};
}

const WelcomeCard = ({ tenant }: WelcomeCardProps) => {
	const { name, rentedProperty, leaseStart, leaseEnd } = tenant;

	// Function to format the date as "5th May 6788"
	const formatDate = (date: Date) => {
		const day = date.getDate();
		const month = date.toLocaleString('default', { month: 'long' });
		const year = date.getFullYear();

		// Add ordinal suffix to the day
		const getOrdinal = (n: number) => {
			const s = ['th', 'st', 'nd', 'rd'];
			const v = n % 100;
			return s[(v - 20) % 10] || s[v] || s[0];
		};

		return `${day}${getOrdinal(day)} ${month} ${year}`;
	};

	const nextPaymentDate = new Date(leaseEnd);
	nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
	const formattedNextPaymentDate = formatDate(nextPaymentDate);

	return (
		<div className='bg-white p-4 rounded-lg shadow-lg mx-4 mt-8'>
			<div>
				<h1 className='text-2xl font-bold text-gray-800'>
					Welcome back, {name}!
				</h1>

				{/* Overview of tenancy */}
				<p className='text-gray-600'>Here’s an overview of your tenancy.</p>
			</div>

			<div className='space-y-4'>
				{/* Rent payment due date */}
				<div className='mt-4'>
					<h2 className='text-gray-800 font-semibold'>
						Your next rent payment is due on:
					</h2>
					<p className='text-lg text-gray-600'>{formattedNextPaymentDate}</p>
				</div>

				{/* Rented property details */}
				<div className='flex items-center mt-4 space-x-2'>
					<span className='text-gray-600 font-bold'>
						<BsFillPinMapFill />{' '}
					</span>
					<p className='text-lg text-gray-900'>{rentedProperty}</p>
				</div>

				{/* Payment button */}
			</div>
			<div className='mt-2 flex justify-start'>
				<button className='py-2 px-6 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-200'>
					Make a Payment
				</button>
			</div>
		</div>
	);
};

export default WelcomeCard;
