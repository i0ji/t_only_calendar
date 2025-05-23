import React, { forwardRef } from 'react';

import styles from './CommonButton.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CommonButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      className={styles.common_button}
      ref={ref}
      {...props}
    />
  )
);

export default CommonButton;
