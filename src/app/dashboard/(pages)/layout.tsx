import Menu from '../components/Menu';
import NavigationBar from '../components/Dashboardnav';
import Link from 'next/link';

export const metadata = {
	title: 'Cawani Dashboard',
	description: 'Dashboard',
};

export default function DashboardLayout({
	children,
	isLoggedIn,
}: {
	children: React.ReactNode;
	isLoggedIn: boolean;
}) {
	return (
		<div className='h-screen flex'>
			{/* Left Sidebar */}
			<div className='w-[14%] md:w-[16%] lg:w-[16%]'>
				<Link
					href='/'
					className='flex items-center justify-center lg:justify-start gap-2'>
					{/* Uncomment the Image tag if you have a logo */}
					{/* <Image src="logo.png" alt="Cawani Logo" width={32} height={32} /> */}
					<span className='hidden lg:block '>LoGo</span>
				</Link>
				<Menu />
			</div>
			{/* Main Content */}
			<div className='w-[86%] md:w-[92%] lg:w-[84%] bg-gray-100 overflow-scroll'>
				{isLoggedIn && <NavigationBar />}
				{children}
			</div>
		</div>
	);
}
