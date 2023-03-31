import React from 'react';

const BookmarkItem = ({bookmarkItem}) => {
    return (
        <div className='bg-white rounded-md'>
            <p className='text-md font-medium p-3'>{bookmarkItem?.title}</p>
        </div>
    );
};

export default BookmarkItem;