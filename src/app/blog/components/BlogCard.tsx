// BlogCard.tsx
import React from 'react';

interface BlogCardProps {
	id: string;
	title: string;
	category: string;
	minutesRead: number;
	author: string;
	description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	id,
	title,
	category,
	minutesRead,
	author,
	description,
}) => {
	return (
		<div className='border p-4 rounded-lg shadow-md hover:shadow-lg'>
			<h2 className='text-xl font-semibold'>{title}</h2>
			<p className='text-sm text-gray-500'>
				By {author} | {category} | {minutesRead} min read
			</p>
			<p className='text-gray-700 mt-2'>{description}</p>
		</div>
	);
};

export default BlogCard;
