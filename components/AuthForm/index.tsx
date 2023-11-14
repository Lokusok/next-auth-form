import React from 'react';

import style from './style.module.scss';

import Header from './Header';
import Socials from '../Login/Socials';
import Separator from './Separator';
import Form from './Form';

export default function AuthForm() {
  return (
    <>
      <div className={style.wrapper}>
        <Header
          className={style.header}
          title={'Авторизуйтесь, чтобы продолжить'}
          subtitle={'Для продолжения необходима авторизация'}
        />

        <Socials className={style.socials} />

        <Separator className={style.separator}>Или</Separator>

        <Form />
      </div>
    </>
  );
}
