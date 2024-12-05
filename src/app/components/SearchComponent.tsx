import React from 'react';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'; // Adjust this import based on your icon source

const SearchComponent = () => {
	return (
		<div className='relative mx-auto w-full max-w-lg pr-2'>
			<form className='relative mx-auto md:flex items-center rounded border shadow-md bg-white'>
				<input
					id='q'
					type='text'
					className='h-8 w-full rounded py-2 pl-6 px-4 pr-16 sm:px-8 outline-none focus:ring-2 focus:ring-btn'
					placeholder='Find location'
					autoFocus
					aria-label='Search location'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='h-5 w-5 absolute left-1 top-1/2 transform -translate-y-1/2 text-btn'>
					<path
						fillRule='evenodd'
						d='M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z'
						clipRule='evenodd'
					/>
				</svg>
				<button
					type='button'
					className='absolute right-0 flex items-center justify-center h-full px-3 top-0 rounded-r bg-btn text-white font-medium hover:bg-gray-700 focus:ring-4'
					aria-label='Search'>
					<LocationSearchingIcon className='size-6 animate-slow-spin hover:animate-none hover:scale-90 ease-in-out' />
				</button>
			</form>
		</div>
	);
};

export default SearchComponent;
