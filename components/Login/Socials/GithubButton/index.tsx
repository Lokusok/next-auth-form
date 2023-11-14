'use client';

import React from 'react';

import style from '../style.module.scss';

import { signIn } from 'next-auth/react';

import Image from 'next/image';

export default function GithubButton() {
  const handleClick = () => {
    signIn('github');
  };

  return (
    <button onClick={handleClick} className={style.socialElem}>
      <Image
        src="/images/github-icon.svg"
        alt="логотип Github"
        width={30}
        height={30}
      />
      <span className={style.socialElemText}>Войти через Github</span>
    </button>
  );
}
