import React from 'react';
import CtaBtn from './CtaBtn';

interface CommentCardProps {
	imageUrl: string;
	title: string;
	description: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
	imageUrl,
	title,
	description,
}) => {
	return (
		<article className='mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto'>
			<div className='flex flex-col bg-btn md:flex-row py-2'>
				<div className='p-5 md:w-4/6 md:p-8'>
					<span className='rounded-md bor px-2 py-1 text-lg uppercase text-white'>
						Cawani
					</span>
					<p className='mt-2 text-xl font-black text-bck md:mt-6 md:text-4xl'>
						{title}
					</p>
					<p className='mt-3 text-bck'>{description}</p>

					<CtaBtn text='Follow' />
				</div>
				<div className='mx-auto hidden items-center px-5 md:flex md:p-8'>
					<img
						className='rounded-md shadow-lg'
						src={imageUrl}
						alt='Shop image'
					/>
				</div>
			</div>
		</article>
	);
};

export default CommentCard;
