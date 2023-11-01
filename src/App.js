import { useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import BookmarkPage from './pages/BookmarkPage'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/bookmarks' element = {<BookmarkPage />}></Route>
      </Routes>
      <BookmarkPage />
    </div>
  )
}

export default App