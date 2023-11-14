'use client';

import React from 'react';

import style from './style.module.scss';

import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { TiWarning } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';

import classNames from 'classnames';

export enum SnackbarVariantsEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

type Props = {
  variant: SnackbarVariantsEnum;
  text: string;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Snackbar({
  variant,
  text,
  isShowing,
  setIsShowing,
}: Props) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowing(false);
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  });

  const handleClick = () => {
    setIsShowing(false);
  };

  return (
    <div
      className={classNames(style.wrapper, {
        [style.success]: variant == SnackbarVariantsEnum.SUCCESS,
        [style.error]: variant == SnackbarVariantsEnum.ERROR,
        [style.warning]: variant == SnackbarVariantsEnum.WARNING,
        [style.info]: variant == SnackbarVariantsEnum.INFO,
        [style.active]: isShowing,
      })}
    >
      {variant == SnackbarVariantsEnum.SUCCESS && <FaCheckCircle size={20} />}
      {variant == SnackbarVariantsEnum.ERROR && (
        <BsExclamationCircleFill size={20} />
      )}
      {variant == SnackbarVariantsEnum.WARNING && <TiWarning size={20} />}
      {variant == SnackbarVariantsEnum.INFO && <FaCircleInfo size={20} />}

      <span className={style.info}>{text}</span>

      <button
        className={style.closeBtn}
        onClick={handleClick}
        aria-label="Скрыть уведомление"
      >
        <RxCross2 size={18} />
      </button>
    </div>
  );
}
