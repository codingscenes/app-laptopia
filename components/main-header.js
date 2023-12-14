import brandIcon from '@/assets/images/brandIcon.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <Image src={brandIcon.src} width={20} height={20} className='logo' alt='Brand logo' priority />
            Laptopia
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav flex-row me-auto'>
              <li className='nav-item'>
                <NavLink href={'/products'}>Products</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink href={'/sell'}>Sell</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
