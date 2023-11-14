'use client';

import React from 'react';

import style from './style.module.scss';

import { IoPerson } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import Button from '@/components/Button';

import ErrorNotifier from './ErrorNotifier';

export default function Form() {
  const [IsShowErrorNotifier, setIsShowErrorNotifier] = React.useState(false);

  const router = useRouter();
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.ok) {
      router.refresh();
    } else {
      setIsShowErrorNotifier(true);
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className={style.form}
        action="#"
        method="#"
      >
        <Input
          placeholder={'yourmail@mail.ru'}
          label={'Почта'}
          icon={<IoPerson color={'#b1b1b1'} />}
          type="email"
          name="email"
          required
        />
        <Input
          placeholder={'Ваш пароль'}
          label={'Пароль'}
          icon={<FaLock color={'#b1b1b1'} />}
          type="password"
          name="password"
          required
        />

        <Button type="submit">Войти</Button>
      </form>

      <ErrorNotifier
        text={'Ошибка при входе Ошибка при входе Ошибка при входе'}
        isShowing={IsShowErrorNotifier}
        setIsShowing={setIsShowErrorNotifier}
      />
    </>
  );
}
