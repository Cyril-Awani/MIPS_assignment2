import React, { useState } from 'react';

interface PropertyTab {
	label: string;
	properties: string[];
}

const propertyTabs: PropertyTab[] = [
	{ label: '1 Bed', properties: ['Property A', 'Property E'] },
	{ label: '2 Beds', properties: ['Property B', 'Property G', 'Property H'] },
	{ label: '3 Beds', properties: ['Property J'] },
	{
		label: '4+ Beds',
		properties: ['Property F', 'Property D', 'Property J', 'Property K'],
	},
];

const allProperties = propertyTabs.reduce(
	(acc, tab) => acc.concat(tab.properties),
	[] as string[],
);

const updatedPropertyTabs: PropertyTab[] = [
	{ label: 'All', properties: allProperties },
	...propertyTabs,
];

const PropertyTab: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className='m-6'>
			{/* Header */}
			<p className='text-sm font-semibold border-y border-gray-300'>
				Other Apartments in Property
			</p>

			{/* Tabs Section */}
			<div
				role='tablist'
				className='tabs flex justify-between p-2 border-y-txt'>
				{updatedPropertyTabs.map((tab, index) => (
					<button
						key={index}
						role='tab'
						id={`tab-${index}`}
						aria-selected={activeTab === index}
						aria-controls={`tabpanel-${index}`}
						className={`tab-button px-4 py-2 rounded-md ${
							activeTab === index
								? 'border border-btn text-btn'
								: 'bg-bck text-gray-600'
						}`}
						onClick={() => setActiveTab(index)}>
						{tab.label}
					</button>
				))}
			</div>

			{/* Properties List */}
			<div
				id={`tabpanel-${activeTab}`}
				role='tabpanel'
				aria-labelledby={`tab-${activeTab}`}
				className='grid md:grid-cols-2 sm:gap-2 lg:grid-cols-4 justify-between p-2 border-y-txt'>
				<ul>
					{updatedPropertyTabs[activeTab].properties.map((property, index) => (
						<li key={index} className='py-1 px-4'>
							{property}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PropertyTab;
