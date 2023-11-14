import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

type Props = {
  label?: string;
  icon?: React.ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({
  placeholder,
  label,
  icon,
  type,
  ...props
}: Props) {
  return (
    <label className={style.label}>
      <span className={style.labelText}>{label}</span>

      <div className={style.inputOuter}>
        <div className={style.icon}>{icon}</div>
        <input
          className={classNames(style.input, { [style.paddingLeft]: icon })}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </label>
  );
}
