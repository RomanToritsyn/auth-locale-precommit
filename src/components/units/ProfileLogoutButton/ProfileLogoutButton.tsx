import { classNames } from '@/utils/classNames';
import React from 'react';
import { signOut } from 'next-auth/react';

type TProfileLogoutButton = {
  active: boolean;
  label: string;
};

const ProfileLogoutButton: React.FC<TProfileLogoutButton> = ({ active, label }) => {
  const onLogoutClick = () => {
    signOut({ callbackUrl: '/' }).then();
  };

  return (
    <div
      onClick={onLogoutClick}
      className={classNames(
        active ? 'bg-gray-50' : '',
        'block cursor-pointer px-3 py-1 text-sm leading-6 text-gray-900'
      )}
    >
      {label}
    </div>
  );
};

export default ProfileLogoutButton;
