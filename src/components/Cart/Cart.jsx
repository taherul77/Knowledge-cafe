import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cart = (blog) => {

    const {authorImg,authorName, publishedDate, readingTime, tags, thumbnail, title} =blog.blog;
    const handleAddToRead=blog.handleAddToRead;
    console.log(blog.blog);
    return (
        <div>
            

            <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full" src={thumbnail} alt="Article" />

                    <div className="p-6">
                    <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={authorImg} alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{authorName}</a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 first-letter: dark:text-gray-300">{publishedDate}</span>
                                <button onClick={handleAddToRead} class="px-2 py-1 text-xs font-bold ">{readingTime} min read
                        
                        <FontAwesomeIcon icon={faBookmark} /></button>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tags}</p>
                        </div>

                        
                        <button  className=''>Make AS Read
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;