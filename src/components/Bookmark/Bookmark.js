import { useRef, useState } from 'react'
import { Carousel } from 'react-bootstrap'

export default function Bookmark ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
       <li style={{listStyle:'none'}}>
       {/* <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        /> */}
        <Carousel.Item>
        <img style={{ "borderRadius": "5%", "objectFit": "contain", "width": "100%", "height": "15vw" }} src={bookmark.url} alt={bookmark.title} />
       </Carousel.Item>
        {/* <button
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button> */}
      </li>
    </>
  )
}
