import React from 'react';
import ImageGallery from 'react-image-gallery';
// import Bookmark from '../Bookmark/Bookmark';


export default function Gallery({bookmarks}) {
     return (
       <div className="App">
         <ImageGallery items={bookmarks.url} showPlayButton={false} showFullscreenButton={false} slideDuration={500} />
       </div>
     );
   }
   
