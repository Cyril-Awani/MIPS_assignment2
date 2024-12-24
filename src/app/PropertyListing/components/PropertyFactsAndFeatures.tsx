import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowForwardIos } from '@mui/icons-material';

interface FactsAndFeaturesProps {
	fact?: string; // Optional fact
	features: string[]; // List of features
}

const PropertyFactsAndFeatures: React.FC<FactsAndFeaturesProps> = ({
	fact,
	features,
}) => {
	return (
		<Disclosure>
			{({ open }) => (
				<div>
					<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
						<span className='text-base font-semibold text-gray-900'>
							Facts & Features
						</span>
						<ArrowForwardIos
							className={`w-5 h-5 text-btn transition-transform duration-300 ${
								open ? 'rotate-90' : ''
							}`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className='accordion-panel px-6 py-4 border-x bg-gray-50 border-b border-btn text-gray-700 text-base'>
						{fact && (
							<div className='mb-6'>
								<h3 className='font-bold text-base text-gray-800 mb-2'>Fact</h3>
								<p className='text-gray-600'>{fact}</p>
							</div>
						)}
						<div>
							<h3 className='font-bold text-base text-gray-800 mb-2'>
								Features
							</h3>
							<ul className='list-disc pl-5'>
								{features.map((feature, index) => (
									<li key={index} className='text-gray-600'>
										{feature}
									</li>
								))}
							</ul>
						</div>
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};

export default PropertyFactsAndFeatures;
