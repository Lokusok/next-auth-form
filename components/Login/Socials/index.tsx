import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

import GoogleButton from './GoogleButton';
import GithubButton from './GithubButton';

type Props = {
  className?: string;
};

export default function Socials({ className }: Props) {
  return (
    <ul className={classNames(style.socialList, className)}>
      <li>
        <GoogleButton />
      </li>

      <li>
        <GithubButton />
      </li>
    </ul>
  );
}
