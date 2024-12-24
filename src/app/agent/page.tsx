// AgentListPage.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AgentCard from './components/AgentCard'; // Path to AgentCard component
import { agents } from './data'; // Import your agents data

const AgentListPage: React.FC = () => {
	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/agent/${id}`); // Navigate to the individual agent page
	};

	return (
		<div className='max-w-6xl mx-auto p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Meet Our Agents</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{agents.map((agent) => (
					<div
						key={agent.id}
						className='cursor-pointer'
						onClick={() => handleCardClick(agent.id)}>
						<AgentCard
							id={agent.id}
							name={agent.name}
							agency={agent.agency}
							location={agent.location}
							profileImage={agent.profileImage}
							specialties={agent.specialties}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AgentListPage;
