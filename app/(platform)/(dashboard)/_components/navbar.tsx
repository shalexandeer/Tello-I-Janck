import { Plus } from 'lucide-react';
import React from 'react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import MobileSidebar from './mobile-sidebar';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      {/* Mobile sidebar */}
      <MobileSidebar />
      <div className="flex w-full items-center justify-between gap-x-4">
        <div className="flex gap-x-4">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <Button
            variant={'primary'}
            size={'sm'}
            className="hidden h-auto rounded-sm px-2 py-1.5 md:block "
          >
            Create
          </Button>
          <Button variant={'primary'} size={'sm'} className="block rounded-sm md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-2 ">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl={'/organization/:id'}
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl={'/organization/:id'}
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};
