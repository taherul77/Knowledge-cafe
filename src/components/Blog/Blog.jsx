import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import './Blog.css'
const Blog = () => {

    const [blogs, setBlog] = useState([]);
    const [read, setRead]= useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])

    const handleAddToRead = (blog) =>{
        
        const newRead = [...read, blog];
        setRead(newRead);
        }
    return (
        <div className='grid grid-cols-12'>

            <div className='col-span-9 p-5'>

{
    blogs.map( blog => <Cart
    key={blog.id}
    blog = {blog}
    handleAddToRead={handleAddToRead}
    >

    </Cart>
    )
}
            </div>
            <div className='col-span-3 p-5'>
                <h1>coming soon : {read.length}</h1>

            </div>





        </div>
    );
};

export default Blog;