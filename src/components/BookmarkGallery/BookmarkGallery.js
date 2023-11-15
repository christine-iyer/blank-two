import BookmarkImage from '../BookmarkImage/BookmarkImage'

export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  return (
    <ul>
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (
                <BookmarkI
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
  )
}