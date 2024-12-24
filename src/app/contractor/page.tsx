// page.tsx - Contractor Grid Page
'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import to use `next/navigation`
import ContractorCard from './components/ContractorCard';
import { contractors } from '../Data/contractorData';

const Contractor: React.FC = () => {
	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/contractor/${id}`); // Navigate to /contractor/[id] path
	};

	return (
		<div className='max-w-6xl mx-auto p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Available Contractors</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{contractors.map((contractor) => (
					<div
						key={contractor.id}
						className='cursor-pointer'
						onClick={() => handleCardClick(contractor.id)}>
						<ContractorCard
							profileImage={contractor.profileImage}
							name={contractor.name}
							job={contractor.job}
							position={contractor.position}
							company={contractor.company}
							location={contractor.location}
							stars={contractor.stars}
							status={contractor.status}
							joinedYear={contractor.joinedYear}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Contractor;
