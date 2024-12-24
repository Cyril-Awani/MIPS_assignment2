import React, { useState } from 'react';
import Image from 'next/image';
import {
	FaCheckCircle,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';

interface ManagerDetails {
	name: string;
	image: string;
	isVerified: boolean;
	contact: string;
	socialLinks: {
		facebook?: string;
		twitter?: string;
		linkedin?: string;
	};
}

interface ManagerCardProps {
	manager: ManagerDetails;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const ManagerCard: React.FC<ManagerCardProps> = ({ manager }) => {
	// State for managing form inputs and errors
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState<FormErrors>({});

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Validate form data
		const newErrors: FormErrors = {};

		if (!formData.name) newErrors.name = 'Name is required';
		if (!formData.email) newErrors.email = 'Email is required';
		if (!formData.message) newErrors.message = 'Message is required';

		setErrors(newErrors);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<div className='sticky top-20 w-full p-4 bg-white shadow-lg rounded-lg border border-gray-200'>
			<div className='flex flex-col items-center text-center'>
				{/* Profile Image with Gradient Spinner */}
				<div className='relative'>
					<div className='w-28 h-28 relative'>
						{/* Spinner for verified profile */}
						{manager.isVerified && (
							<div className='absolute z-10 inset-0 gradient-spinner'></div>
						)}
						<Image
							src={manager.image}
							alt={manager.name}
							layout='fill'
							objectFit='cover'
							className='rounded-full border-4 border-white'
							priority // Optimize LCP
						/>
					</div>
				</div>

				{/* Manager Name & Verification */}
				<div className='mt-4 flex items-center justify-center gap-2'>
					<h3 className='text-xl font-semibold text-gray-800'>
						{manager.name}
					</h3>
					{manager.isVerified && (
						<FaCheckCircle className='text-blue-500 w-5 h-5' />
					)}
				</div>
				{/* Contact */}
				<p className='text-gray-600 text-sm mt-2'>Contact: {manager.contact}</p>
			</div>

			{/* Social Icons */}
			<div className='flex justify-center gap-4 mt-4'>
				{manager.socialLinks.facebook && (
					<a
						href={manager.socialLinks.facebook}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 hover:text-blue-800 transition'>
						<FaFacebook className='w-5 h-5' />
					</a>
				)}
				{manager.socialLinks.twitter && (
					<a
						href={manager.socialLinks.twitter}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-400 hover:text-blue-600 transition'>
						<FaTwitter className='w-5 h-5' />
					</a>
				)}
				{manager.socialLinks.linkedin && (
					<a
						href={manager.socialLinks.linkedin}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-700 hover:text-blue-900 transition'>
						<FaLinkedin className='w-5 h-5' />
					</a>
				)}
			</div>

			{/* Enquiry Form */}
			<div className='mt-6'>
				<h4 className='text-lg font-semibold text-gray-800'>Enquire Now</h4>
				<form className='mt-4' onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700'>
							Your Name
						</label>
						<input
							type='text'
							id='name'
							placeholder='Enter your name'
							value={formData.name}
							onChange={handleChange}
							className='w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none'
						/>
						{/* Display error message for name */}
						{errors.name && (
							<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700'>
							Your Email
						</label>
						<input
							type='email'
							id='email'
							placeholder='Enter your email'
							value={formData.email}
							onChange={handleChange}
							className='w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none'
						/>
						{/* Display error message for email */}
						{errors.email && (
							<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-700'>
							Your Message
						</label>
						<textarea
							id='message'
							rows={4}
							placeholder='Write your message here...'
							value={formData.message}
							onChange={handleChange}
							className='w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none'
						/>
						{/* Display error message for message */}
						{errors.message && (
							<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
						)}
					</div>
					<button
						type='submit'
						className='w-full bg-grey-900 text-white bg-gray-700 py-2 px-4 rounded-lg shadow hover:bg-white hover:border-2 hover:border-gray-700 hover:text-gray-700 transition duration-150 focus:outline-none focus:ring focus:ring-gray-500'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ManagerCard;
