import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowForwardIos } from '@mui/icons-material';

interface MonthlyPayments {
	security: string;
	garbage: string;
	water: string;
	electricity: string;
	internet: string;
}

interface PropertyPaymentProps {
	monthlyPayments: MonthlyPayments;
}

const PropertyPayment: React.FC<PropertyPaymentProps> = ({
	monthlyPayments,
}) => {
	const payments = [
		{ name: 'Security', value: monthlyPayments.security },
		{ name: 'Garbage', value: monthlyPayments.garbage },
		{ name: 'Water', value: monthlyPayments.water },
		{ name: 'Electricity', value: monthlyPayments.electricity },
		{ name: 'Internet', value: monthlyPayments.internet },
	];

	return (
		<li className='list-none'>
			<Disclosure>
				{({ open }) => (
					<div>
						<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-gray-900 hover:cursor-pointer hover:border-b-2 hover:border-btn'>
							<span className='text-base font-semibold text-gray-900'>
								Monthly Payments
							</span>
							<ArrowForwardIos
								className={`w-5 h-5 text-btn transition-transform duration-300 ${
									open ? 'rotate-90' : ''
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='accordion-panel px-4 pb-1 border-x border-b border-btn text-gray-700 text-base'>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
								{payments.map((payment, index) => (
									<div
										key={index}
										className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
										<div className='p-4'>
											<h4 className='text-sm font-bold text-gray-600'>
												{payment.name}
											</h4>
											<p className='text-lg font-semibold text-txt'>
												{payment.value}
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

export default PropertyPayment;
