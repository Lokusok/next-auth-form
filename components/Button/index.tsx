import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ type, children, ...props }: Props) {
  return (
    <button className={style.button} type={type} {...props}>
      {children}
    </button>
  );
}
