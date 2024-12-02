import React, { useState } from 'react';
import {
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Modal,
	Box,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from '@mui/icons-material/Verified';

const PropertyInquiry: React.FC = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [interestedIn, setInterestedIn] = useState('');
	const [employmentStatus, setEmploymentStatus] = useState('');
	const [otherStatus, setOtherStatus] = useState('');
	const [consent, setConsent] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [dropdownStates, setDropdownStates] = useState({
		furtherEnquiry: false,
		paynow: false,
	});

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const [date, setDate] = useState<string>('');
	const [time, setTime] = useState<string>('');

	// Get today's date and format it as YYYY-MM-DD
	const today = new Date();
	const todayString = today.toISOString().split('T')[0];

	// Calculate the date 7 days from today
	const maxDate = new Date();
	maxDate.setDate(today.getDate() + 7);
	const maxDateString = maxDate.toISOString().split('T')[0];

	// Define the time range: 09:00 AM to 05:00 PM (17:00)
	const minTime = '09:00';
	const maxTime = '17:00';

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTime(event.target.value);
	};

	const validatePhone = (phone: string) => {
		const re = /^\+?\d{10,15}$/;
		return re.test(phone);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage('');

		if (
			!fullName ||
			!email ||
			!phone ||
			!interestedIn ||
			!employmentStatus ||
			!consent
		) {
			setErrorMessage('Please fill in all required fields.');
			return;
		}

		if (!validateEmail(email)) {
			setErrorMessage('Please enter a valid email address.');
			return;
		}

		if (!validatePhone(phone)) {
			setErrorMessage('Please enter a valid phone number.');
			return;
		}
		const selectedDateTime = new Date(`${date}T${time}`);
		console.log('Selected DateTime:', selectedDateTime);

		console.log({
			fullName,
			email,
			phone,
			interestedIn,
			employmentStatus,
			otherStatus,
			consent,
		});
		alert('Inquiry submitted successfully!');
	};

	const toggleDropdown = (dropdown: keyof typeof dropdownStates) => {
		setDropdownStates((prev) => ({
			...prev,
			[dropdown]: !prev[dropdown],
		}));
	};

	const handleOpen = () => setModalOpen(true);
	const handleClose = () => setModalOpen(false);

	return (
		<div>
			<section className='p-6 border border-gray-200 rounded-3xl mb-8 group transition-all duration-500 hover:border-gray-400'>
				<p className='font-semibold text-sm leading-10 text-black pb-1 border-b border-gray-200 flex items-center'>
					Property Manager
				</p>
				<div className='w-full max-w-7xl mx-auto px-6 md:px-8'>
					<div className='flex items-center justify-center relative z-10 mb-1 mt-2'>
						<div className='relative inline-block'>
							<Image
								src=''
								alt='user-avatar-image'
								className='border-4 border-solid border-white rounded-full object-cover'
								width={50}
								height={50}
								style={{ width: '50px', height: '50px' }} // Ensuring consistent dimensions
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-6 absolute top-4 right-3 transform translate-x-1/2 translate-y-1/2 text-white bg-green-500 border-2 border-white rounded-full p-1'>
								<path
									fill-rule='evenodd'
									d='M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						<div className='flex flex-col items-center pl-2'>
							<h3 className='font-bold text-lg text-gray-900'>Jenny Wilson</h3>
							<p className='flex items-center justify-center rounded-full'>
								<span>
									<VerifiedIcon
										className='text-green-500 p-1'
										style={{ width: '25px', height: '25px' }}
									/>
								</span>
								<span className='text-xs'>Verified ID</span>
							</p>
						</div>
					</div>

					<p className='font-normal text-xs leading-7 text-gray-500 text-center mb-2'>
						A social media influencer and singer
					</p>
					<div className='hidden items-center justify-center gap-5'>
						{['facebook', 'twitter', 'instagram', 'youtube', 'linkedin'].map(
							(platform) => (
								<a
									key={platform}
									href='javascript:;'
									className='p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700'>
									{/* Insert corresponding SVG for each platform here */}
								</a>
							),
						)}
					</div>
					<div className='flex justify-center items-center gap-4 mt-4'>
						<button className='rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300'>
							Message
						</button>
						<button
							className='rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300'
							onClick={handleOpen}>
							Tour
						</button>

						<Modal
							open={modalOpen}
							onClose={handleClose}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'>
							<Box
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									width: {
										xs: '90%', // 90% width on extra-small screens
										sm: 400, // 400px on small screens and up
									},
									bgcolor: 'background.paper',
									boxShadow: 24,
									p: 4,
									borderRadius: 2, // Optional: Add rounded corners
									maxHeight: '90vh', // Optional: Limit height for large screens
									overflowY: 'auto', // Optional: Enable vertical scrolling if content overflows
								}}>
								<p className=' font-semibold text-sm leading-10 text-black pb-1 border-b border-gray-200'>
									Select Best Time for a Tour
								</p>
								<p className='text-xs mt-1'>
									When would you be available for a Tour Around the property,
									For a better Look
								</p>
								<form onSubmit={handleSubmit}>
									<TextField
										label='Full Name'
										required
										fullWidth
										value={fullName}
										onChange={(e) => setFullName(e.target.value)}
										margin='normal'
										size='small'
									/>
									<TextField
										label='Email'
										required
										type='email'
										fullWidth
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										margin='normal'
										size='small'
									/>
									<TextField
										label='Phone'
										required
										type='tel'
										fullWidth
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										margin='normal'
										size='small'
									/>

									<div>
										<label htmlFor='date'>Select Date:</label>
										<input
											type='date'
											id='date'
											value={date}
											onChange={handleDateChange}
											min={todayString} // Today's date as the minimum
											max={maxDateString} // Maximum date 7 days from today
											required
										/>
									</div>
									<div>
										<label htmlFor='time'>Select Time:</label>
										<input
											type='time'
											id='time'
											value={time}
											onChange={handleTimeChange}
											min={minTime} // Minimum time: 09:00 AM
											max={maxTime} // Maximum time: 05:00 PM
											required
										/>
									</div>
									<p className='text-xs mt-2 text-gray-600'>
										By proceeding, you consent to receive calls and texts at the
										number you provided, including marketing by autodialer and
										prerecorded and artificial voice, and email, from Awani.com.
									</p>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<Button
											type='submit'
											variant='contained'
											color='primary'
											startIcon={<SendIcon />}
											sx={{ mt: 2 }}>
											Send
										</Button>
									</div>
								</form>
							</Box>
						</Modal>
					</div>
				</div>
			</section>
			<div className='p-6 border border-gray-200 rounded-3xl mb-8 group transition-all duration-500 hover:border-gray-400'>
				<p
					className='font-semibold text-sm leading-10 text-black pb-1 border-b border-gray-200 cursor-pointer flex justify-between'
					onClick={() => toggleDropdown('furtherEnquiry')}>
					Further Enquiry
					<ExpandMoreIcon
						className={`transform transition-transform duration-300 ${
							dropdownStates.furtherEnquiry ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</p>

				{dropdownStates.furtherEnquiry && (
					<form onSubmit={handleSubmit}>
						{errorMessage && (
							<div className='text-red-600 text-sm'>{errorMessage}</div>
						)}
						<TextField
							label='Full Name'
							required
							fullWidth
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							margin='normal'
							size='small'
						/>
						<TextField
							label='Email'
							required
							type='email'
							fullWidth
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							margin='normal'
							size='small'
						/>
						<TextField
							label='Phone'
							required
							type='tel'
							fullWidth
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							margin='normal'
							size='small'
						/>
						<TextField
							label='What else would you like to know about?'
							required
							fullWidth
							multiline
							rows={4}
							value={interestedIn}
							onChange={(e) => setInterestedIn(e.target.value)}
							margin='normal'
							size='small'
							inputProps={{ maxLength: 120 }}
							sx={{
								'& .MuiInputBase-root': {
									minHeight: '10px',
								},
							}}
						/>

						<FormControl sx={{ m: 1, width: '200px' }} size='small' required>
							<InputLabel
								id='employment-status-label'
								sx={{ fontSize: '14px' }}>
								Employment Status
							</InputLabel>
							<Select
								labelId='employment-status-label'
								id='employment-status-select'
								value={employmentStatus}
								label='Employment Status'
								onChange={(e) => setEmploymentStatus(e.target.value)}
								sx={{ fontSize: '0.8rem' }} // Adjust the font size here as well
							>
								<MenuItem value='entrepreneur'>Entrepreneur</MenuItem>
								<MenuItem value='unemployed'>Unemployed</MenuItem>
								<MenuItem value='student'>Student</MenuItem>
								<MenuItem value='retired'>Retired</MenuItem>
								<MenuItem value='others'>Others (please specify)</MenuItem>
							</Select>
						</FormControl>

						{employmentStatus === 'others' && (
							<TextField
								variant='standard'
								label='Specify Employment Status'
								fullWidth
								margin='none'
								value={otherStatus}
								onChange={(e) => setOtherStatus(e.target.value)}
								size='small'
							/>
						)}
						<p className='text-xs mt-1'>
							By proceeding, you consent to receive calls and texts at the
							number you provided, including marketing by autodialer and
							prerecorded and artificial voice, and email, from Awani.com.
						</p>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								startIcon={<SendIcon />}
								sx={{ mt: 2 }}>
								Send
							</Button>
						</div>
					</form>
				)}
			</div>
			<section className='p-6 border border-gray-200 rounded-3xl mb-1 group transition-all duration-500 hover:border-gray-400'>
				<div className='py-2'>
					<p
						className='font-semibold text-sm leading-1 text-gray-900 leading-10 pb-1 border-b border-gray-200 cursor-pointer flex justify-between'
						onClick={() => toggleDropdown('paynow')}>
						Paynow
						<ExpandMoreIcon
							className={`transform transition-transform duration-300 ${
								dropdownStates.paynow ? 'rotate-180' : 'rotate-0'
							}`}
						/>
					</p>
					{dropdownStates.paynow && (
						<div>
							<p className='font-semibold text-xs leading-1 text-gray-900 leading-10  pt-1'>
								Breakdown
							</p>
							<div className='p-2 bg-gray-100 rounded-md'>
								<p className='text-gray-600 k'>N35,000 Monthly</p>
								<p className='font-light text-sm leading-1 text-gray-600'>
									Awani Service Fee{' '}
									<span className='font-light text-sm leading-1 text-gray-600'>
										(0.05% * Rental)
									</span>
								</p>
								<p className='font-light text-sm leading-1 text-gray-600'>
									Caution Fee{' '}
									<span className='font-light text-sm leading-1 text-gray-600'>
										(0.1% * Rental)
									</span>
								</p>
								<p className='font-light text-sm leading-1 text-gray-600'>
									Agreement Fee{' '}
									<span className='font-light text-sm leading-1 text-gray-600'>
										(0.1% * Rental)
									</span>
								</p>
								<p className='text-gray-600'>
									Total :{' '}
									<span className='font-light text-sm leading-1 text-gray-600'>
										Rental Fee + Caution Fee + Agreement Fee + Service Fee
									</span>
								</p>
							</div>
						</div>
					)}
				</div>

				<div className='mt-1'>
					<button className='w-full bg-blue-500 text-white font-bold py-2 rounded-md transition duration-300 hover:bg-blue-600'>
						Make Escrow Payment
					</button>
				</div>
				<p className='text-sm text-gray-500 text-center mt-4'>
					You won`t be charged yet.
				</p>
			</section>
		</div>
	);
};

export default PropertyInquiry;
