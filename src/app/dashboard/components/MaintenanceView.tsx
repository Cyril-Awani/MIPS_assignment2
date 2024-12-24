interface MaintenanceViewProps {
	role: 'tenant' | 'contractor';
}

const MaintenanceView: React.FC<MaintenanceViewProps> = ({ role }) => {
	const isTenant = role === 'tenant';
	const isContractor = role === 'contractor';

	// Example data for requests
	const maintenanceRequests = [
		{
			id: 1,
			description: isTenant
				? 'Fix kitchen sink'
				: 'Fix AC unit in Apartment 3A',
			status: isTenant ? 'Pending' : 'In Progress',
			dateSubmitted: '2024-11-25',
		},
		{
			id: 2,
			description: isTenant
				? 'Repair door lock'
				: 'Replace broken window in Apartment 1B',
			status: isTenant ? 'Completed' : 'Pending',
			dateSubmitted: '2024-11-20',
		},
	];

	const handleStatusChange = (id: number, newStatus: string) => {
		// Logic for updating the status of a request
		console.log(`Request ID: ${id}, New Status: ${newStatus}`);
		// Here, you would update the state or make an API call to save the new status.
	};

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold'>
				{isTenant
					? 'Your Maintenance Requests'
					: 'Assigned Maintenance Requests'}
			</h1>
			<p className='mt-4'>
				{isTenant
					? 'View and submit maintenance requests.'
					: 'View and update the maintenance requests assigned to you.'}
			</p>

			{/* Table for displaying maintenance requests */}
			<table className='w-full mt-6 border'>
				<thead>
					<tr className='bg-gray-200'>
						<th className='p-2 border'>Request ID</th>
						<th className='p-2 border'>Description</th>
						<th className='p-2 border'>Status</th>
						<th className='p-2 border'>Date Submitted</th>
						{isContractor && <th className='p-2 border'>Actions</th>}
					</tr>
				</thead>
				<tbody>
					{maintenanceRequests.map((request) => (
						<tr key={request.id}>
							<td className='p-2 border'>{request.id}</td>
							<td className='p-2 border'>{request.description}</td>
							<td className='p-2 border'>{request.status}</td>
							<td className='p-2 border'>{request.dateSubmitted}</td>
							{isContractor && (
								<td className='p-2 border'>
									<select
										className='border p-1 rounded'
										defaultValue={request.status}
										onChange={(e) =>
											handleStatusChange(request.id, e.target.value)
										}>
										<option value='Pending'>Pending</option>
										<option value='In Progress'>In Progress</option>
										<option value='Completed'>Completed</option>
									</select>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>

			{/* Form for tenants to submit new maintenance requests */}
			{isTenant && (
				<form className='mt-6'>
					<h2 className='text-xl font-semibold'>Submit New Request</h2>
					<textarea
						className='w-full mt-2 p-2 border rounded'
						placeholder='Describe the issue...'></textarea>
					<button
						type='submit'
						className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default MaintenanceView;
