import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Separator({ className, children }: Props) {
  return (
    <div className={classNames(style.separator, className)}>{children}</div>
  );
}
