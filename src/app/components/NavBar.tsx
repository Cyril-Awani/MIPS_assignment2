'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaSearch, FaRegEnvelope, FaBell } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import {
	MdSegment,
	MdClose,
	MdCottage,
	MdMapsHomeWork,
	MdTour,
	MdCalculate,
	MdLocationCity,
} from 'react-icons/md';
import Link from 'next/link';

interface ChildItem {
	label: string;
	link: string;
	iconImage?: string;
}

interface NavItem {
	label: string;
	link: string;
	children?: ChildItem[];
	current?: boolean;
}

const navItems: NavItem[] = [
	{
		label: 'Buy',
		link: '#',
		children: [
			{ label: 'Houses', link: '#', iconImage: 'buy' },
			{ label: 'Land', link: '#', iconImage: 'myrental' },
			{ label: 'Commercial', link: '#', iconImage: 'calculator' },
			{ label: 'Guide', link: '#', iconImage: 'guide' },
		],
	},
	{
		label: 'Rent',
		link: '#',
		children: [
			{ label: 'Apartments', link: '#', iconImage: 'rent' },
			{ label: 'Land/Lots', link: '#', iconImage: 'myrental' },
			{ label: 'Stores/Warehouses', link: '#', iconImage: 'calculator' },
			{ label: 'Renters Guide', link: '#', iconImage: 'guide' },
		],
	},
	{ label: 'Agents', link: '/agent' },
	{ label: 'Contractors', link: '/contractor' },
	{ label: 'Advertise', link: '/advertise' },
	{ label: 'Blog', link: '/blog' },
];

const iconMap: Record<string, React.ReactNode> = {
	rent: <MdCottage />,
	myrental: <MdMapsHomeWork />,
	calculator: <MdCalculate />,
	guide: <MdTour />,
	buy: <MdLocationCity />,
};

const getIcon = (iconName?: string) => {
	return iconName ? iconMap[iconName] : null;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleItemClick = () => {
		setMenuOpen(false);
	};

	const toggleMenu = (e: React.MouseEvent) => {
		e.stopPropagation();
		setMenuOpen(!menuOpen);
	};

	return (
		<div className='mx-auto max-w-full justify-between space-x-4 '>
			<div className='flex items-center justify-between w-full p-2 bg-white text-gray-800 shadow-lg'>
				{/* Mobile Menu Button */}
				<div className='relative inset-y-0 left-0 flex items-center md:hidden'>
					<button
						ref={buttonRef}
						onClick={toggleMenu}
						className='group relative inline-flex items-center rounded-md bg-black p-2 mr-2 text-white hover:bg-txt hover:text-white focus:outline-none focus:ring-1 focus:ring-inset'
						aria-haspopup='true'
						aria-expanded={menuOpen ? 'true' : 'false'}>
						<span className='sr-only'>Open main menu</span>
						{menuOpen ? (
							<MdClose className='block h-5 w-5' />
						) : (
							<MdSegment className='block h-5 w-5' />
						)}
					</button>
				</div>

				{/* Desktop Logo */}
				<div className='hidden md:flex flex-shrink-0 items-center'>
					<div className='flex-shrink-0 mr-5'>
						<Link href='/'>
							<Image
								src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
								alt='Your Company Logo'
								width={50}
								height={50}
								className='h-8 w-auto'
								priority
							/>
						</Link>
					</div>
					{/* Desktop Navigation */}
					<div className='hidden md:flex flex-shrink-0 items-center'>
						<div className='flex gap-2'>
							{navItems.map((item) => (
								<div key={item.label} className='relative group'>
									<a
										href={item.link}
										className={classNames(
											item.current
												? 'bg-txt text-white'
												: 'text-txt hover:border-b-2 border-btn hover:text-btn',
											'px-3 py-2 text-sm font-medium',
										)}>
										{item.label}
									</a>
									{item.children && (
										<div className='absolute left-0 z-20 hidden min-w-52 bg-white shadow-lg group-hover:block delay-150'>
											{item.children.map((child) => (
												<a
													key={child.label}
													href={child.link}
													className='flex flex-row gap-1 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
													{child.iconImage && getIcon(child.iconImage)}
													{child.label}
												</a>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					{/* Desktop Search Bar */}
					<div className='flex items-center gap-2 text-xs rounded ring-gray-300 px-3 py-1 bg-gray-100 hover:ring-gray-500 transition-all duration-200'>
						<input
							type='text'
							placeholder='Search...'
							className='w-[200px] md:w-[280px] lg:[300] p-2 bg-transparent outline-none text-gray-800 placeholder-gray-500'
						/>
						<FaSearch size={16} color='gray' />
					</div>
					{/* Icons and User Info */}
					<div className='flex items-center gap-3 w-full'>
						{/* Message Icon */}
						<div className='hidden lg:flex bg-gray-100 ml-4 rounded-full w-8 h-8 items-center justify-center cursor-pointer hover:bg-gray-200 transition-all'>
							<FaRegEnvelope size={20} color='gray' />
						</div>

						{/* Notification Icon */}
						<div className='hidden lg:flex bg-gray-100 rounded-full w-8 h-8 items-center justify-center cursor-pointer relative hover:bg-gray-200 transition-all'>
							<FaBell size={20} color='gray' />
							<div className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-semibold'>
								1
							</div>
						</div>

						{/* User Info and Dropdown */}
						<div className='flex items-center gap-2 relative group'>
							<div className='hidden lg:flex flex-col text-right'>
								<span className='text-sm font-medium text-gray-800'>
									John Doe
								</span>
								<span className='text-xs text-gray-500'>Admin</span>
							</div>

							<div className='flex items-center cursor-pointer'>
								<MdAccountCircle
									size={30}
									color='gray'
									className='rounded-full'
								/>
								<IoIosArrowDown
									size={16}
									className='text-gray-600 transition-transform duration-300 transform group-hover:rotate-180'
								/>
							</div>

							{/* Dropdown Menu */}
							<div className='absolute right-0 mt-40 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50'>
								<div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
									Profile
								</div>
								<div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
									Settings
								</div>
								<div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
									Logout
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div
						ref={menuRef}
						className='md:hidden fixed top-0 -left-3 w-full bg-white shadow-lg z-50 h-full overflow-y-auto'>
						<div className='pt-2 pb-2 space-y-1'>
							{/* Close Button */}
							<div className='flex justify-between items-center p-4'>
								<div className='px-4 py-2 items-center'>
									<Image
										src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
										alt='Cawani Logo'
										width={50}
										height={50}
										className='h-8 w-auto'
										priority
									/>
								</div>
								<button
									onClick={() => setMenuOpen(false)}
									className='text-gray-800 hover:text-black'>
									<MdClose className='block h-6 w-6 mr-6' />
								</button>
							</div>

							{/* Mobile Navigation */}
							<div className='space-y-1 ml-2'>
								{navItems.map((item) => (
									<div key={item.label} className='relative group'>
										<a
											href={item.link}
											className='text-txt hover:font-extrabold block rounded-md px-3 py-2 text-base font-medium'
											onClick={handleItemClick}>
											{item.label}
										</a>
										{item.children && (
											<div className='ml-4'>
												{item.children.map((child) => (
													<a
														key={child.label}
														href={child.link}
														className='flex items-center py-1 text-sm text-gray-600 hover:text-black hover:font-bold'
														onClick={handleItemClick}>
														<span className='mr-2'>
															{child.iconImage &&
																React.cloneElement(
																	getIcon(
																		child.iconImage,
																	) as React.ReactElement,
																	{
																		sx: { color: 'txt' },
																	},
																)}
														</span>
														{child.label}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
