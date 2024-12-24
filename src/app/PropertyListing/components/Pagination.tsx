const Pagination: React.FC<{
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<div className='flex items-center space-x-2'>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`p-2 border rounded-lg ${
					currentPage === 1
						? 'text-gray-400 cursor-not-allowed'
						: 'text-gray-600 hover:bg-gray-100'
				}`}>
				&lt;
			</button>

			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index}
					onClick={() => handlePageChange(index + 1)}
					className={`w-10 h-10 border rounded-lg flex items-center justify-center ${
						currentPage === index + 1
							? 'bg-blue-500 text-white'
							: 'bg-white text-gray-600 hover:bg-gray-100'
					}`}>
					{index + 1}
				</button>
			))}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`p-2 border rounded-lg ${
					currentPage === totalPages
						? 'text-gray-400 cursor-not-allowed'
						: 'text-gray-600 hover:bg-gray-100'
				}`}>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
