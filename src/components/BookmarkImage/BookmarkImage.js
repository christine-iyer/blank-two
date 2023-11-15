import { useRef, useState } from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'
import '../../App.css'

export default function BookmarkImage ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <Card style={{ width: '18rem', margin: '2rem' }}>
       
        {/* <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
              console.log(title)
            }
          }}
          defaultValue={bookmark.title}
        /> */}

<Card.Img src={bookmark.url}></Card.Img>

      </Card>
    
    </>
  )
}