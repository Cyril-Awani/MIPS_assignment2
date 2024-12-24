// BlogListPage.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import BlogCard from './components/BlogCard'; // Path to BlogCard component
import { blogPosts } from './data'; // Import your blog data

const BlogListPage: React.FC = () => {
	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/blog/${id}`); // Navigate to the individual blog post page
	};

	return (
		<div className='max-w-6xl mx-auto p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Blog Posts</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{blogPosts.map((post) => (
					<div
						key={post.id}
						className='cursor-pointer'
						onClick={() => handleCardClick(post.id)}>
						<BlogCard
							id={post.id}
							title={post.title}
							category={post.category}
							minutesRead={post.minutesRead}
							author={post.author}
							description={post.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogListPage;
