'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link className={`nav-link ${path.startsWith(href) ? 'active' : undefined}`} href={href}>
      {children}
    </Link>
  );
}
