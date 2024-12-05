export const metadata = {
	title: 'Cawani',
	description: 'Dashboard',
};

export default function DashboardLayout({
	children,
	isLoggedIn,
}: {
	children: React.ReactNode;
	isLoggedIn: boolean;
}) {
	return <div className='w-full bg-white'>{children}</div>;
}
