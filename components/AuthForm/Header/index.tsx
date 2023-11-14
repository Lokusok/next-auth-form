import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
  subtitle: string;
};

export default function Header({ className, title, subtitle }: Props) {
  return (
    <div className={classNames(style.header, className)}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  );
}
