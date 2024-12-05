//import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata = {
	title: 'Cawani',
	description: 'Easy Home Finds',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={'debug-screens antialiased'}>
				<NavBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
