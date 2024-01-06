// components/MenuBar.tsx

import React from 'react';
import Link from 'next/link';

const MenuBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
