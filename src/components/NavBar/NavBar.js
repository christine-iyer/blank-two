import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/bookmarks">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/faq">FAQs</Link>
      &nbsp; | &nbsp;
      <Link to="/resources">Resources Page</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Us</Link>
    </nav>
  );
}
