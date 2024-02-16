import { useState } from 'react';
import Bookmark from '../Bookmark/Bookmark'


export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <div style={{width:'10%', display:"flex",flexWrap:"wrap", margin: '1rem'}}>
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (


                
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  handleSelect={handleSelect}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />

              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </div>
  )
}