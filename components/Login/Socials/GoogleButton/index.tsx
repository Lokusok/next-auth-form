'use client';

import React from 'react';

import style from '../style.module.scss';

import { signIn } from 'next-auth/react';

import Image from 'next/image';

export default function GoogleButton() {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <button onClick={handleClick} className={style.socialElem}>
      <Image
        src="/images/google-icon.svg"
        alt="логотип Google"
        width={30}
        height={30}
      />
      <span className={style.socialElemText}>Войти через Google</span>
    </button>
  );
}
