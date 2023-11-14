'use client';

import React from 'react';

import style from './style.module.scss';

import { useSession, signOut } from 'next-auth/react';

import Button from '../Button';

export default function Profile() {
  const session = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={style.profile}>
      <h3 className={style.title}>Вы успешно вошли в свой аккаунт!</h3>

      <div className={style.points}>
        {session?.data?.user?.email && (
          <p className={style.info}>
            Ваша почта:{' '}
            <span className={style.important}>
              {session?.data?.user?.email}
            </span>
          </p>
        )}

        {session?.data?.user?.name && (
          <p className={style.info}>
            Ваше имя:{' '}
            <span className={style.important}>{session?.data?.user?.name}</span>
          </p>
        )}
      </div>
      <Button onClick={handleSignOut}>Выйти из аккаунта</Button>
    </div>
  );
}
