import Link from 'next/link';
import {
	FaHome,
	FaUser,
	FaBuilding,
	FaClipboardList,
	FaCalendarAlt,
	FaEnvelope,
	FaCog,
	FaSignOutAlt,
	FaChartLine,
	FaUsers,
	FaKey,
	FaTools,
	FaHandshake,
	FaClipboardCheck,
	FaTags,
	FaQuestionCircle, // New icon for Help & Support
} from 'react-icons/fa';
// Import the role from lib/data.ts
import { role } from '@/app/lib/data';

const menuItems = [
	{
		title: 'MENU',
		items: [
			{
				icon: <FaHome />,
				label: 'Overview',
				href: `/dashboard/${role}/Overview`,
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
			{
				icon: <FaUser />,
				label: 'Profile',
				href: `/dashboard/${role}/Profile`,
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
			{
				icon: <FaBuilding />,
				label: 'Properties',
				href: `/dashboard/${role}/Properties`,
				visible: ['landlord', 'agent'],
			},
			{
				icon: <FaClipboardList />,
				label: 'Lease Agreements',
				href: `/dashboard/${role}/Agreement`,
				visible: ['landlord', 'tenant', 'agent'],
			},
			{
				icon: <FaKey />,
				label: 'Manage Keys',
				href: `/dashboard/${role}/Mykeys`,
				visible: ['landlord', 'agent'],
			},
			{
				icon: <FaCalendarAlt />,
				label: 'Appointments',
				href: `/dashboard/${role}/Appointment`,
				visible: ['landlord', 'agent', 'contractor'],
			},
			{
				icon: <FaEnvelope />,
				label: 'Notifications',
				href: `/dashboard/${role}/messages`,
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
			{
				icon: <FaChartLine />,
				label: 'Analytics',
				href: `/dashboard/${role}/Analytics`,
				visible: ['landlord', 'agent'],
			},
			{
				icon: <FaClipboardCheck />,
				label: 'Unlisted',
				href: `/dashboard/${role}/Unlisted`,
				visible: ['landlord', 'agent'],
			},
			{
				icon: <FaTags />,
				label: 'Offers',
				href: `/dashboard/${role}/Offers`,
				visible: ['landlord', 'agent'],
			},
			{
				icon: <FaUsers />,
				label: 'Tenants',
				href: `/dashboard/${role}/tenants`,
				visible: ['landlord'],
			},
			{
				icon: <FaUsers />,
				label: 'Clients',
				href: `/dashboard/${role}/Clientele`,
				visible: ['agent'],
			},
			{
				icon: <FaTools />,
				label: 'Maintenance Requests',
				href: `/dashboard/${role}/Maintenance`,
				visible: ['landlord', 'tenant', 'contractor'],
			},
			{
				icon: <FaHandshake />,
				label: 'Negotiations',
				href: `/dashboard/${role}/Negotiations`,
				visible: ['landlord', 'tenant', 'agent'],
			},
		],
	},
	{
		title: 'OTHER',
		items: [
			{
				icon: <FaCog />,
				label: 'Settings',
				href: `/dashboard/${role}/Settings`,
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
			{
				icon: <FaQuestionCircle />,
				label: 'Help & Support',
				href: '/dashboard/Support',
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
			{
				icon: <FaSignOutAlt />,
				label: 'Logout',
				//onClick: logout,
				href: '/',
				visible: ['landlord', 'tenant', 'agent', 'contractor'],
			},
		],
	},
];

const Menu = () => {
	return (
		<div className='flex flex-col mt-10 text:xs lg:text-md'>
			{/* MENU items at the top */}
			<div className='flex flex-col gap-2'>
				{menuItems[0].items.map((item) => {
					if (item.visible.includes(role)) {
						return (
							<Link
								href={item.href}
								key={item.label}
								className='relative group flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-4 rounded-md transition-all duration-300 ease-in-out hover:text-gray-700 hover:bg-gray-200 hover:scale-95'>
								<span className='text-sm'>{item.icon}</span>
								<span className='hidden lg:block'>{item.label}</span>

								{/* Tooltip */}
								<span className='absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-md transition-all duration-75 ease-in-out'>
									{item.label}
								</span>
							</Link>
						);
					}
					return null;
				})}
			</div>

			{/* Horizontal line after MENU items */}
			<hr className='border-gray-300 my-2' />

			{/* OTHER items at the bottom */}
			<div className='flex flex-col gap-2 mt-auto'>
				{menuItems[1].items.map((item) => {
					if (item.visible.includes(role)) {
						return (
							<Link
								href={item.href}
								key={item.label}
								className='relative group flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-4 rounded-md transition-all duration-300 ease-in-out hover:text-gray-700 hover:bg-gray-200 hover:scale-95'>
								<span className='text-sm'>{item.icon}</span>
								<span className='hidden lg:block'>{item.label}</span>

								{/* Tooltip */}
								<span className='absolute -top-8 right-0 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-md transition-all duration-75 ease-in-out'>
									{item.label}
								</span>
							</Link>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
};

export default Menu;
