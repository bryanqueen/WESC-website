import React from 'react';
import BlogCard from './BlogCard';

function BlogsOverview(props) {
    return (
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
            <div class="text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Latest from our blogs</h2>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-full py-2 px-4 hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                    <span>View all Blogs</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
           
            <BlogCard/>

        </div>

        <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
           

            <button type="button" class=" w-full py-2 flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded  hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <span>View all Blogs</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>
    );
}

export default BlogsOverview;