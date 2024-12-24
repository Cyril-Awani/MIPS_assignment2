import React, { useState } from 'react';

interface ContactCardProps {
	onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ onSubmit }) => {
	// State for form inputs
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (name && email && message) {
			onSubmit({ name, email, message });
			// Optionally, reset form fields after submission
			setName('');
			setEmail('');
			setMessage('');
		} else {
			alert('Please fill in all fields');
		}
	};

	return (
		<div className='max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200'>
			<h2 className='text-2xl font-semibold mb-4 text-center'>
				Contact John Doe
			</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700'>
						Name
					</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Your Name'
					/>
				</div>

				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Your Email'
					/>
				</div>

				<div className='mb-4'>
					<label
						htmlFor='message'
						className='block text-sm font-medium text-gray-700'>
						Message
					</label>
					<textarea
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={4}
						className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Your Message'
					/>
				</div>

				<div className='flex justify-center'>
					<button
						type='submit'
						className='w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
						Reach Out
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactCard;
