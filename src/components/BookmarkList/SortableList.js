import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from 'react';
import { SortableItem } from './SortableItem';

export default function BookmarkList ({
     bookmarks,
     updateBookmark,
     deleteBookmark
   }) {
   
    
   
     return (
       <div>
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