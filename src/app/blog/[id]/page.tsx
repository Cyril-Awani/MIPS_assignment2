// [id].tsx - Blog Post Detail Page
'use client';
import React from 'react';
import { useParams } from 'next/navigation'; // Correct hook for path params in Next.js app directory
import { blogPosts } from '../data'; // Import blog data

const BlogPostPage: React.FC = () => {
	const { id } = useParams(); // Get the id from the URL path

	const blogPost = blogPosts.find((post) => post.id === id);

	if (!blogPost) {
		return <p>Blog post not found.</p>;
	}

	return (
		<div className='max-w-4xl mx-auto p-8'>
			<h1 className='text-3xl font-semibold mb-4'>{blogPost.title}</h1>
			<p className='text-sm text-gray-500'>
				By {blogPost.author} | {blogPost.postDate}
			</p>
			<div className='mt-6'>
				<h3 className='text-lg font-semibold'>Full Story:</h3>
				<p className='text-gray-700 mt-2'>{blogPost.fullStory}</p>
			</div>
		</div>
	);
};

export default BlogPostPage;
