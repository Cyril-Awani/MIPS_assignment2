import React from 'react';
import { GoBellFill } from 'react-icons/go';

const notifications = [
	{ message: 'Your rent is due in 7 days', type: 'warning' },
	{
		message: 'Maintenance will be visiting on 05/15 between 2-4 PM',
		type: 'info',
	},
];

const TenantNotificationCard = () => {
	return (
		<div className='bg-white p-4 rounded-lg shadow-lg mx-2 my-2 md:my-4 h-full'>
			{/* Header Section */}
			<div className='flex items-center gap-2 mb-4'>
				<GoBellFill className='h-5 w-5 text-yellow-600' />
				<h2 className='text-lg font-semibold'>Notice</h2>
			</div>
			{/* Notifications List */}
			<div className='overflow-auto'>
				<ul className='space-y-4'>
					{notifications.map((notification, index) => (
						<li
							key={index}
							className={`p-3 rounded-md ${
								notification.type === 'warning'
									? 'bg-yellow-100 text-yellow-800'
									: 'bg-blue-100 text-blue-800'
							}`}>
							{notification.message}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TenantNotificationCard;
