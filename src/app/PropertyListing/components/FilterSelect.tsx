'use client';

import React, { useState } from 'react';
import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Slider as MuiSlider,
	Button as MuiButton,
	Box,
	TextField,
} from '@mui/material';
import { PropertyType } from '@/app/types/propertyTypes';

interface FilterSelectProps {
	onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
	propertyType: PropertyType | '';
	minPrice: number;
	maxPrice: number;
	beds: number;
	baths: number;
}

const initialState: FilterState = {
	propertyType: '',
	minPrice: 0,
	maxPrice: 15000000,
	beds: 0,
	baths: 0,
};

export function FilterSelect({ onFilterChange }: FilterSelectProps) {
	const [filters, setFilters] = useState<FilterState>(initialState);

	const handleFilterChange = (key: keyof FilterState, value: any) => {
		setFilters((prev) => ({ ...prev, [key]: value }));
	};

	const applyFilters = () => {
		onFilterChange(filters);
	};

	const resetFilters = () => {
		setFilters(initialState);
		onFilterChange(initialState);
	};

	return (
		<Box className='space-y-4 p-4 bg-gray-100 rounded-lg'>
			<FormControl fullWidth>
				<InputLabel>Property Type</InputLabel>
				<Select
					value={filters.propertyType}
					onChange={(e) => handleFilterChange('propertyType', e.target.value)}
					label='Property Type'>
					{Object.values(PropertyType).map((type) => (
						<MenuItem key={type} value={type}>
							{type}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Box>
				<Box className='mb-2'>
					<TextField
						label='Min Price'
						type='number'
						value={filters.minPrice}
						onChange={(e) =>
							handleFilterChange('minPrice', Number(e.target.value))
						}
						fullWidth
						variant='outlined'
						margin='normal'
					/>
				</Box>
				<Box className='mb-2'>
					<TextField
						label='Max Price'
						type='number'
						value={filters.maxPrice}
						onChange={(e) =>
							handleFilterChange('maxPrice', Number(e.target.value))
						}
						fullWidth
						variant='outlined'
						margin='normal'
					/>
				</Box>
			</Box>

			<Box>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Bedrooms: {filters.beds}
				</label>
				<MuiSlider
					min={0}
					max={10}
					step={1}
					value={filters.beds}
					onChange={(e, value) => handleFilterChange('beds', value)}
					valueLabelDisplay='auto'
				/>
			</Box>

			<Box>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Bathrooms: {filters.baths}
				</label>
				<MuiSlider
					min={0}
					max={10}
					step={0.5}
					value={filters.baths}
					onChange={(e, value) => handleFilterChange('baths', value)}
					valueLabelDisplay='auto'
				/>
			</Box>

			<Box className='flex space-x-2'>
				<MuiButton variant='contained' onClick={applyFilters}>
					Apply Filters
				</MuiButton>
				<MuiButton variant='outlined' onClick={resetFilters}>
					Reset
				</MuiButton>
			</Box>
		</Box>
	);
}
