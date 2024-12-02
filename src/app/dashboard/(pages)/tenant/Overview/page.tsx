import WelcomeCard from '../../../components/WelcomeCard';
import React from 'react';
import { tenantData } from '@/app/lib/data';
import TenantNotificationCard from '@/app/dashboard/components/TenantNotificationCard';
import MaintenanceView from '@/app/dashboard/components/MaintenanceView';
import StatsGrid from '@/app/dashboard/components/StatsGrid';

const Overview = () => {
	const tenant = tenantData[0];
	return (
		<div className='gap-2'>
			<div className='flex flex-col lg:flex-row w-full'>
				{/* Left Section */}
				<div className='w-full lg:w-1/2'>
					<WelcomeCard tenant={tenant} />
				</div>

				{/* Right Section */}
				<div className='w-full lg:w-1/2 py-2 md:py-4'>
					<TenantNotificationCard />
				</div>
			</div>
			<StatsGrid /> <MaintenanceView role='tenant' />
		</div>
	);
};

export default Overview;
