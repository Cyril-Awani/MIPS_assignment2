import React from 'react';
import { role } from '../lib/data';

const Dashboard = () => {
	if (!role) {
		return (
			<div className='flex items-center justify-center h-full text-gray-500'>
				Please log in to access the menu.
			</div>
		);
	}
	return <div>Dashboard</div>;
};

export default Dashboard;
