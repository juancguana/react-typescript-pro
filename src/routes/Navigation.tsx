import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/home'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='home' element={<ShoppingPage />} />
          <Route path='about' element={<h1>Home Page</h1>} />
          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
