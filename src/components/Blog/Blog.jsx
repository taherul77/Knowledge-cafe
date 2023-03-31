import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import './Blog.css'
import Sidebar from "../Sidebar/Sidebar";
const Blog = () => {

    const [blogs, setBlog] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const [bookmarkItems, setBookmarkItems] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])


    return (
        <div className='grid grid-cols-12'>

            <div className='col-span-9 p-5'>

                {
                    blogs.map(blog => <Cart
                        key={blog.id}
                        blog={blog}
                        readingTime={readingTime}
                        setReadingTime={setReadingTime}
                        bookmarkItems={bookmarkItems}
                        setBookmarkItems={setBookmarkItems}

                    >

                    </Cart>
                    )
                }
            </div>
            <div className='col-span-3 p-5'>
                <Sidebar
                    readingTime={readingTime}
                    bookmarkItems={bookmarkItems}
                ></Sidebar>

            </div>

        </div>
    );
};

export default Blog;