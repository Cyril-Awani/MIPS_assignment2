import React, { useState, useRef } from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded'; // Icon for the button
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'; // Icon for closing the modal

const MoreOptions = () => {
	const [open, setOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	// Handle modal open
	const handleClickOpen = () => {
		setOpen(true);
	};

	// Handle modal close
	const handleClose = () => {
		setOpen(false);
	};

	// Close the modal when clicking outside
	const handleOutsideClick = (event: React.MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	return (
		<div>
			{/* More Options Button */}
			<button
				onClick={handleClickOpen}
				className='flex items-center gap-2 p-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm font-semibold'>
				<FilterListRoundedIcon className='text-gray-700' />
				More Options
			</button>

			{/* Modal Box (Custom Implementation with Tailwind CSS) */}
			{open && (
				<div
					onClick={handleOutsideClick}
					className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
					<div
						ref={modalRef}
						className='bg-white rounded-lg w-96 p-6 shadow-lg relative'>
						{/* Close Icon */}
						<button
							onClick={handleClose}
							className='absolute top-4 right-4 p-1 text-gray-600 hover:text-gray-900'>
							<CloseRoundedIcon />
						</button>

						<div className='text-xl font-semibold mb-4'>More Options</div>
						{/* Modal Content */}
						<div>
							<p className='text-sm'>Option 1: Something</p>
							<p className='text-sm'>Option 2: Something else</p>
							<p className='text-sm'>Option 3: Another option</p>
						</div>
						<div className='flex justify-end gap-2 mt-4'>
							{/* Close and Apply buttons */}
							<button
								onClick={handleClose}
								className='py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400 text-sm'>
								Reset
							</button>
							<button
								onClick={handleClose}
								className='py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-sm'>
								View {/*number of properties with this filter*/} properties
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MoreOptions;
