
import BookmarkImage from '../BookmarkImage/BookmarkImage'

export default function BookmarkGallery ({
  bookmarks
}) {
  return (
    <div>
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (
               <BookmarkImage  key={bookmark._id}>
               
               </BookmarkImage>


              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </div>
  )
}