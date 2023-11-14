
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import BookmarkPage from './pages/BookmarkPage'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ResourcePage from './pages/ResourcePage'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path='/bookmarks' element = {<BookmarkPage />}/>
        <Route path='/about' element = {<AboutPage />}/>
        <Route path='/faq' element = {<FaqPage />}/>
        <Route path='/resources' element = {<ResourcePage />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;