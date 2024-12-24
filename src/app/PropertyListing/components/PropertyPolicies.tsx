import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowForwardIos } from '@mui/icons-material';

interface Policies {
	pets: string; // "yes" or "no"
	smoking: string; // "yes" or "no"
	leaseTerm: string; // e.g., "6 months", "1 year"
	guests: string; // "yes" or "no"
}

interface PropertyPoliciesProps {
	policies: Policies;
}

const PropertyPolicies: React.FC<PropertyPoliciesProps> = ({ policies }) => {
	const policyItems = [
		{ name: 'Pets Allowed', value: policies.pets === 'yes' ? 'Yes' : 'No' },
		{
			name: 'Smoking Allowed',
			value: policies.smoking === 'yes' ? 'Yes' : 'No',
		},
		{ name: 'Lease Term', value: policies.leaseTerm },
		{ name: 'Guests Allowed', value: policies.guests === 'yes' ? 'Yes' : 'No' },
	];

	return (
		<li className='list-none'>
			<Disclosure>
				{({ open }) => (
					<div>
						<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-gray-900 hover:cursor-pointer hover:border-b-2 hover:border-btn'>
							<span className='text-base font-semibold text-gray-900'>
								Property Policies
							</span>
							<ArrowForwardIos
								className={`w-5 h-5 text-btn transition-transform duration-300 ${
									open ? 'rotate-90' : ''
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='accordion-panel px-4 pb-1 border-x border-b border-btn text-gray-700 text-base'>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
								{policyItems.map((policy, index) => (
									<div
										key={index}
										className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
										<div className='p-4'>
											<h4 className='text-sm font-bold text-gray-600'>
												{policy.name}
											</h4>
											<p className='text-lg font-semibold text-txt'>
												{policy.value}
											</p>
										</div>
									</div>
								))}
							</div>
						</Disclosure.Panel>
					</div>
				)}
			</Disclosure>
		</li>
	);
};

export default PropertyPolicies;
