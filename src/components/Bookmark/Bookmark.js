import { useRef, useState } from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'
import '../../App.css'

export default function Bookmark ({
  foundBookmarks,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <Card style={{ width: '18rem', margin: '2rem' }}>
        <h4 onClick={() => setShowInput(!showInput)}>{foundBookmarks.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              // const title = inputRef.current.value
              updateBookmark(foundBookmarks._id, { title: e.target.value })
              setShowInput(false)
            
            }
          }}
          defaultValue={foundBookmarks.title}
        />
        <a href={foundBookmarks.url} target='_blank' rel='noreferrer'>
           {foundBookmarks.title}</a>
        <Button style={{  marginLeft:'28%', marginRight:'32%',justifyContent: 'center', padding: '1rem', marginBottom: '5%', marginTop: '5%' }}
          onClick={() => deleteBookmark(foundBookmarks._id)}
        >
          Delete Me
        </Button>
      </Card>
      {/* <audio
      controls
      src="https://api.dictionaryapi.dev/media/pronunciations/en/button-us.mp3"
      >
      Your browser does not support the
      <code>audio</code> element.
</audio> */}
    </>
  )
}