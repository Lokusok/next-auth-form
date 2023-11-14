import React from 'react';

import Snackbar from '@/components/Snackbar';

import { SnackbarVariantsEnum } from '@/components/Snackbar';

type Props = {
  text?: string;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ErrorNotifier({
  text = 'Произошла ошибка',
  isShowing,
  setIsShowing,
}: Props) {
  return (
    <Snackbar
      variant={SnackbarVariantsEnum.ERROR}
      text={text}
      isShowing={isShowing}
      setIsShowing={setIsShowing}
    />
  );
}
