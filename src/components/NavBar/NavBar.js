import { Link } from 'react-router-dom';
import '../../App.css'


export default function NavBar() {
  return (
    <nav className='nav'>
      <Link className='link' to="/bookmarks">🔖</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/about">🍄</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/faq">🦀</Link>
&nbsp; | &nbsp;
      <Link className='link' to="/resources">►</Link>
      
      
    </nav>
  );
}
