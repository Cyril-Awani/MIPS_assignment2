'use client';
import React from 'react';
import { useParams } from 'next/navigation'; // Correct hook for path params in Next.js app directory
import { agents } from '../data'; // Import agents data
import Image from 'next/image'; // Import Image from next/image

const AgentDetailPage: React.FC = () => {
	const { id } = useParams(); // Get the id from the URL path

	const agent = agents.find((agent) => agent.id === id);

	if (!agent) {
		return <p>Agent not found.</p>;
	}

	return (
		<div className='max-w-4xl mx-auto p-8'>
			<h1 className='text-3xl font-semibold mb-4'>{agent.name}</h1>
			<p className='text-sm text-gray-500'>
				{agent.agency} | {agent.location}
			</p>

			{/* Use Image component for agent's profile image */}
			<Image
				src={agent.profileImage}
				alt={`${agent.name} profile`}
				width={200}
				height={200}
				className='w-48 h-48 object-cover rounded-full mt-4'
			/>

			<div className='mt-6'>
				<h3 className='text-lg font-semibold'>Bio:</h3>
				<p className='text-gray-700 mt-2'>{agent.bio}</p>
			</div>

			<div className='mt-6'>
				<h3 className='text-lg font-semibold'>Contact Info:</h3>
				<p className='text-gray-700 mt-2'>Phone: {agent.contactInfo.phone}</p>
				<p className='text-gray-700'>Email: {agent.contactInfo.email}</p>
			</div>

			<div className='mt-6'>
				<h3 className='text-lg font-semibold'>Listings:</h3>
				<ul className='list-disc pl-5'>
					{agent.listings.map((listing, index) => (
						<li key={index}>{listing}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AgentDetailPage;
