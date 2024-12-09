import React from 'react';
import LinksDropdown from './LinksDropdown';
import { ThemeToggle } from './ThemeToggle';
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
