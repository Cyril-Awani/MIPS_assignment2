import React from 'react';
import Image from 'next/image';

interface AgentCardProps {
	id: string;
	name: string;
	agency: string;
	location: string;
	profileImage: string;
	specialties: string[];
}

const AgentCard: React.FC<AgentCardProps> = ({
	id,
	name,
	agency,
	location,
	profileImage,
	specialties,
}) => {
	return (
		<div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
			<Image
				src={profileImage}
				alt={`${name} profile`}
				width={150}
				height={150}
				className='w-full h-48 object-cover rounded-md'
			/>
			<h2 className='text-xl font-semibold mt-4'>{name}</h2>
			<p className='text-sm text-gray-500'>
				{agency} | {location}
			</p>
			<p className='mt-2'>
				<strong>Specialties:</strong> {specialties.join(', ')}
			</p>
		</div>
	);
};

export default AgentCard;
