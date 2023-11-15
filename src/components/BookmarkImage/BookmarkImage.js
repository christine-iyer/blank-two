import { useRef, useState } from 'react'

import '../../App.css'

export default function BookmarkImage ({
  bookmark
}) {

  return (
    <>
      <div style={{ width: '18rem', margin: '2rem' }}>
      <img style={{ "maxWidth": "100%", "height": "15vw" }} src={bookmark.url} alt='...' fluid />
      </div>
    </>
  )
}