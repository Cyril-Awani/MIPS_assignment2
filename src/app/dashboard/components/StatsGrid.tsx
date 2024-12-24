import React from 'react';
import { FaHouseUser, FaCreditCard, FaCalendarCheck } from 'react-icons/fa';
import { TbMessageReportFilled } from 'react-icons/tb';

const stats = [
	{
		title: 'Total Rent',
		value: '$1,200',
		icon: FaHouseUser,
		description: 'Monthly rent amount',
	},
	{
		title: 'Last Payment',
		value: '$1,200',
		icon: FaCreditCard,
		description: 'Paid on May 1, 2023',
	},
	{
		title: 'Lease Ends',
		value: '243 days',
		icon: FaCalendarCheck,
		description: 'Renewal coming up',
	},
	{
		title: 'Open Requests',
		value: '2',
		icon: TbMessageReportFilled,
		description: 'Maintenance requests',
	},
];

const StatsGrid = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4'>
			{stats.map((stat, index) => {
				const IconComponent = stat.icon;
				return (
					<div
						key={index}
						className='bg-white rounded-lg shadow p-4 flex flex-col space-y-4'>
						{/* Icon and Title */}
						<div className='flex items-center justify-between'>
							<h4 className='text-sm font-medium text-gray-700'>
								{stat.title}
							</h4>
							<div className='text-gray-600 text-3xl'>
								<IconComponent />
							</div>
						</div>

						{/* Value and Description */}
						<div className='items-start'>
							<div className='text-2xl font-bold text-gray-900'>
								{stat.value}
							</div>
							<div className='text-xs text-gray-500'>{stat.description}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StatsGrid;
