'use client';
import React from 'react';
import { useParams } from 'next/navigation'; // Correct hook for path params in Next.js app directory
import { contractors } from '../../Data/contractorData';
import ContractorInfo from '../components/ContractorInfo';

const ContractorInfoPage: React.FC = () => {
	const { id } = useParams(); // Get the id from the URL path using useParams

	const contractor = contractors.find((contractor) => contractor.id === id);

	if (!contractor) {
		return <p>Contractor not found.</p>;
	}

	return (
		<ContractorInfo
			profileImage={contractor.profileImage}
			name={contractor.name}
			job={contractor.job}
			location={contractor.location}
			position={contractor.position}
			company={contractor.company}
			about={`About ${contractor.name}: Highly skilled in ${contractor.job}`}
			yOfExp={2024 - parseInt(contractor.joinedYear)}
			reviews={contractor.reviews}
		/>
	);
};

export default ContractorInfoPage;
