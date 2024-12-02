'use client';
import React from 'react';
import ContractorCard from './Contractor/components/ContractorCard';
import ContractorInfo from './Contractor/components/ContractorInfo';

const contractorData = {
	profileImage:
		'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900', // Path to contractor's profile image
	name: 'John Doe',
	job: ' Plumber',
	location: 'Texas Jigsaw',

	about:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rem cumque sit tempora rerum? Voluptas accusantium distinctio rerum tempore molestiae et obcaecati debitis beatae corporis ab iusto eum, laborum unde.',

	yOfExp: 10,
	reviews: [
		{
			clientName: 'Alice Johnson',
			rating: 5,
			reviewText: 'Great work, very professional and punctual!',
			jobDate: 'January 15, 2024',
			location: 'New York, NY',
		},
		{
			clientName: 'Bob Smith',
			rating: 4,
			reviewText:
				'Good work, though the job took a little longer than expected.',
			jobDate: 'February 10, 2024',
			location: 'Brooklyn, NY',
		},
	],
};

const Home = () => {
	return (
		<div className='mx-auto my-2 p-4 max-w-[1920px]'>
			<div>
				<h1 className='text-2xl font-bold'>Property Listings</h1>
				<div className='my-10'>
					{/* Contractor Card Section */}
					<h2 className='text-xl font-semibold mb-4'>Top Contractor</h2>

					<ContractorCard
						profileImage='https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900'
						name='John Doe'
						job='Web Developer'
						position='Frontend Engineer'
						company='TechCorp Inc.'
						location='San Francisco, CA'
						stars={3.5}
						status='active'
						joinedYear='2020'
					/>
					<div>
						<ContractorInfo {...contractorData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
