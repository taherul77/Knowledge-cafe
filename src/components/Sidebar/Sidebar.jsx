import React from "react";
import BookmarkItem from "./BookmarkItem";

const Sidebar = ({ readingTime, bookmarkItems }) => {
  return (
    <div className="sticky top-5">
      <p className="text-center border-2 border-[#6047EC] text-[#6047EC] py-5 rounded-md bg-[#EFEDFD] font-bold text-xl">
        Spent time on read : {readingTime} min
      </p>
      {bookmarkItems.length !== 0 && (
        <div className="bg-[#F3F3F3] mt-5 rounded-md">
          <p className="text-xl font-medium p-5">
            Bookmarked Blogs : {bookmarkItems.length}
          </p>
          <div className="p-4 pt-0 space-y-3">
            {bookmarkItems.map((bookmarkItem) => (
              <BookmarkItem key={bookmarkItem?.id} bookmarkItem={bookmarkItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
