'use client'; // Mark this component as a Client Component

import React from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CtaBtn from '../PropertyListing/components/CtaBtn';

const cardData = [
	{
		id: 1,
		users: '600 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Real Estate Marketing Pro',
		description:
			'Maximize your outreach with advanced email marketing strategies designed for real estate agents and agencies. Drive engagement and close more deals.',
	},
	{
		id: 2,
		users: '400 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Relocation Services',
		description:
			'Support homebuyers and renters in transitioning seamlessly with relocation services. Enhance your client experience with hassle-free solutions.',
	},
	{
		id: 3,
		users: '200 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Home Improvement Contractors',
		description:
			'Connect clients with trusted contractors for home improvements. Elevate your real estate offering by providing renovation and upgrade services.',
	},
	{
		id: 4,
		users: '300 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Mortgaging and Financing',
		description:
			'Guide your clients through financing options with personalized mortgage and financing solutions. Streamline the home buying process with tailored advice.',
	},
	{
		id: 5,
		users: '500 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Legal and Insurance',
		description:
			'Ensure your clients’ assets are protected with reliable legal and insurance services. Secure their peace of mind with expert guidance.',
	},
	{
		id: 6,
		users: '100 Users',
		imageUrl:
			'https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp',
		title: 'Brand and Local Advertisement',
		description:
			'Boost visibility for your real estate brand with tailored local advertising. Attract more clients by strategically placing your business in front of the right audience.',
	},
];

const faqData = [
	{
		question: 'How to create an account?',
		answer:
			"To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
	},
	{
		question: 'Have any trust issue?',
		answer:
			'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.',
	},
	{
		question: 'How can I reset my password?',
		answer:
			'To reset your password, go to the login page and click on the "Forgot Password?" link. Follow the prompts to receive a password reset email and create a new password.',
	},
	{
		question: 'What is the payment process?',
		answer:
			'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.',
	},
];

const Advertise = () => {
	return (
		<div className='mx-auto my-2 p-4 bg-white rounded-lg max-w-7xl'>
			<div className='flex flex-col lg:flex-row'>
				<div className='text-left lg:text-left lg:w-1/2 py-8'>
					<h4 className='text-3xl md:text-4xl xl:text-6xl font-bold leading-tight'>
						Transform millions of curious visitors at Cawani.com®
					</h4>
					<p className='text-base lg:text-md mt-2 font-medium'>
						Free landing page template to promote your business startup and
						generate leads for the offered services
					</p>
					<p className='mt-4'>
						<CtaBtn text='Get Started' className='py-4 px-12' />
					</p>
				</div>
				<div className='lg:w-1/2 flex justify-center items-center'>
					<Image
						src='/path/to/your/img.png'
						alt='Ad Hero Img'
						width={50}
						height={50}
						className='h-8 w-auto'
					/>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				{' '}
				s
				<h1 className='text-center text-xl lg:text-2xl font-semibold '>
					What Category Soothes Your Niche?
				</h1>{' '}
				<p className='text-center '>
					Let's help the millions of visitors find what you have
				</p>{' '}
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
				{cardData.map((card) => (
					<div
						key={card.id}
						className='relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105'>
						<div className='absolute text-xs md:text-base p-2 top-5 right-5 rounded-full bg-violet-600 text-gray-200 text-center'>
							{card.users}
						</div>
						<div className='p-2 flex justify-center'>
							<a href='#'>
								<img
									className='rounded-md'
									src={card.imageUrl}
									loading='lazy'
									alt={`Image for ${card.title}`}
								/>
							</a>
						</div>
						<div className='px-4 pb-3'>
							<div>
								<a href='#'>
									<h5 className='text-md md:text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white'>
										{card.title}
									</h5>
								</a>
								<p className='antialiased text-xs md:text-sm text-gray-600 dark:text-gray-400 break-all'>
									{card.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='py-24'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full'>
						<div className='w-full lg:w-1/2'>
							<img
								src='https://pagedone.io/asset/uploads/1696230182.png'
								alt='FAQ section illustration'
								className='w-full rounded-xl object-cover'
							/>
						</div>
						<div className='w-full lg:w-1/2'>
							<div className='lg:max-w-xl'>
								<div className=''>
									<h6 className='text-5xl sm:text-4xl text-center font-medium text-gray-600 mb-2 lg:text-left'>
										FAQs
									</h6>
									<h2 className='text-lg text-center font-light text-gray-900 leading-[2.25rem] lg:text-left'>
										Looking for answers?
									</h2>
								</div>
								<div className='accordion-group'>
									{faqData.map((faq, index) => (
										<Disclosure
											key={index}
											as='div'
											className='py-8 border-b border-solid border-gray-200'>
											{({ open }) => (
												<>
													<DisclosureButton className='group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600'>
														<h5>{faq.question}</h5>
														<svg
															className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${
																open ? 'rotate-180' : ''
															}`}
															width='22'
															height='22'
															viewBox='0 0 22 22'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
																stroke='currentColor'
																strokeWidth='1.6'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</DisclosureButton>
													<DisclosurePanel className='px-0 overflow-hidden pr-4'>
														<p className='text-base text-gray-500 font-normal'>
															{faq.answer}
														</p>
													</DisclosurePanel>
												</>
											)}
										</Disclosure>
									))}
								</div>
								<div className='flex justify-center mt-4'>
									<Link href='javascript:;' passHref>
										<button className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold bg-indigo-50 text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-indigo-100 group'>
											<span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
												<ArrowRightAltIcon className='w-5 h-5 text-indigo-700' />
											</span>
											<span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-700'>
												View More
											</span>
											<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
												<ArrowRightAltIcon className='w-5 h-5 text-indigo-600' />
											</span>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertise;
